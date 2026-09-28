import { Request, Response } from 'express';
import { query } from '../db/pool';
import { extractTwoMode } from '../services/geminiService';
import { evaluateRules, computeFinalVerdict } from '../services/ruleEngine';
import { logAudit } from '../services/auditService';
import { notificationService } from '../services/notificationService';

export async function submitQuery(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { raw_description, description } = req.body;
  const promptText = raw_description || description;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized: User not authenticated' });
    return;
  }

  if (!promptText || typeof promptText !== 'string' || promptText.trim().length === 0) {
    res.status(400).json({ error: 'Task description is required' });
    return;
  }

  try {
    // 1. Two-mode extraction: classify intent and branch
    const extraction = await extractTwoMode(promptText.trim());

    if (extraction.mode === 'GENERAL') {
      // Insert conversational query record (do NOT run rule engine)
      const queryInsert = await query(
        `INSERT INTO queries (user_id, raw_description, extracted_requirements, status, conversational_reply)
         VALUES ($1, $2, NULL, 'conversational', $3)
         RETURNING id, user_id, raw_description, extracted_requirements, status, conversational_reply, created_at`,
        [userId, promptText.trim(), extraction.reply]
      );
      const queryRecord = queryInsert.rows[0];

      // Audit trail
      await logAudit({
        userId,
        queryId: queryRecord.id,
        action: 'query.conversational',
        details: { intent_reason: extraction.intent_reason },
      });

      res.status(200).json({
        id: queryRecord.id,
        query: queryRecord,
        mode: 'GENERAL',
        reply: extraction.reply,
        status: 'conversational',
      });
      return;
    }

    // TASK mode: existing deterministic verification pipeline
    const requirements = extraction.requirements;

    // 2. Insert query record
    const queryInsert = await query(
      `INSERT INTO queries (user_id, raw_description, extracted_requirements, status)
       VALUES ($1, $2, $3, 'processing')
       RETURNING id, raw_description, extracted_requirements, status, created_at`,
      [userId, promptText.trim(), JSON.stringify(requirements)]
    );

    const queryRecord = queryInsert.rows[0];
    const queryId = queryRecord.id;

    // Log query submission in audit trail
    await logAudit({
      userId,
      queryId,
      action: 'QUERY_SUBMITTED',
      details: {
        task_type: requirements.task_type,
        budget: requirements.constraints.budget,
        raw_length: promptText.length,
      },
    });

    // 3. Fetch all active tools to evaluate
    const toolsResult = await query('SELECT * FROM tools ORDER BY trending_percent DESC');
    const tools = toolsResult.rows;

    const verificationsList: any[] = [];

    // 4. Deterministic Rule Engine Evaluation for each tool
    for (const tool of tools) {
      const ruleResults = evaluateRules(requirements, tool);
      const finalVerdict = computeFinalVerdict(ruleResults);

      const verificationInsert = await query(
        `INSERT INTO verifications (query_id, tool_id, final_verdict)
         VALUES ($1, $2, $3)
         RETURNING id, query_id, tool_id, final_verdict, created_at`,
        [queryId, tool.id, finalVerdict]
      );
      const verificationRecord = verificationInsert.rows[0];

      // Save each rule evaluation
      const savedEvaluations: any[] = [];
      for (const rule of ruleResults) {
        const evalInsert = await query(
          `INSERT INTO rule_evaluations (verification_id, rule_name, verdict, reason)
           VALUES ($1, $2, $3, $4)
           RETURNING id, rule_name, verdict, reason, evaluated_at`,
          [verificationRecord.id, rule.rule_name, rule.verdict, rule.reason]
        );
        savedEvaluations.push(evalInsert.rows[0]);
      }

      verificationsList.push({
        id: verificationRecord.id,
        tool,
        final_verdict: finalVerdict,
        evaluations: savedEvaluations,
      });
    }

    // Sort verifications deterministically by verdict priority, then category match, then trending
    verificationsList.sort((a, b) => {
      const getRank = (verdict: string) => {
        if (verdict === 'MEETS_REQUIREMENTS') return 1;
        if (verdict === 'PARTIALLY_MEETS') return 2;
        return 3;
      };
      const rankDiff = getRank(a.final_verdict) - getRank(b.final_verdict);
      if (rankDiff !== 0) return rankDiff;

      const catPassA = a.evaluations?.some((e: any) => e.rule_name === 'category_match' && e.verdict === 'PASS') ? 1 : 0;
      const catPassB = b.evaluations?.some((e: any) => e.rule_name === 'category_match' && e.verdict === 'PASS') ? 1 : 0;
      if (catPassB !== catPassA) return catPassB - catPassA;

      return (b.tool?.trending_percent || 0) - (a.tool?.trending_percent || 0);
    });

    // 5. Update query status to completed
    await query("UPDATE queries SET status = 'completed' WHERE id = $1", [queryId]);

    // 6. Log completion audit
    await logAudit({
      userId,
      queryId,
      action: 'RULE_EVALUATION_COMPLETED',
      details: {
        tools_evaluated: tools.length,
        meets_requirements: verificationsList.filter(v => v.final_verdict === 'MEETS_REQUIREMENTS').length,
        partially_meets: verificationsList.filter(v => v.final_verdict === 'PARTIALLY_MEETS').length,
        does_not_meet: verificationsList.filter(v => v.final_verdict === 'DOES_NOT_MEET').length,
      },
    });

    // 7. Dispatch notification to user
    try {
      await notificationService.notifyVerdictReady(userId, promptText, queryId);
    } catch (notifErr: any) {
      console.warn('[QUERIES] Failed to dispatch verdict notification:', notifErr.message);
    }

    res.status(201).json({
      id: queryId,
      user_id: userId,
      raw_description: promptText.trim(),
      extracted_requirements: requirements,
      status: 'completed',
      created_at: queryRecord.created_at,
      verifications: verificationsList,
    });
  } catch (error: any) {
    console.error('[QUERIES] Submit query error:', error);
    res.status(500).json({ error: 'Failed to process task query' });
  }
}

export async function getUserQueries(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const result = await query(
      `SELECT q.*, 
        (SELECT COUNT(*) FROM verifications v WHERE v.query_id = q.id) as verification_count,
        (SELECT COUNT(*) FROM verifications v WHERE v.query_id = q.id AND v.final_verdict = 'MEETS_REQUIREMENTS') as meets_count,
        (SELECT COUNT(*) FROM verifications v WHERE v.query_id = q.id AND v.final_verdict = 'PARTIALLY_MEETS') as partial_count
       FROM queries q 
       WHERE q.user_id = $1 
       ORDER BY q.created_at DESC`,
      [userId]
    );

    res.status(200).json({ queries: result.rows });
  } catch (error: any) {
    console.error('[QUERIES] Get user queries error:', error);
    res.status(500).json({ error: 'Failed to fetch user queries' });
  }
}

export async function getQueryById(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { id } = req.params;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const queryResult = await query(
      'SELECT * FROM queries WHERE id = $1 AND user_id = $2',
      [id, userId]
    );

    if (queryResult.rows.length === 0) {
      res.status(404).json({ error: 'Query not found' });
      return;
    }

    const queryData = queryResult.rows[0];

    // Fetch verifications for this query with tool details
    const verificationsResult = await query(
      `SELECT v.id as verification_id, v.final_verdict, v.created_at,
              t.id as tool_id, t.name as tool_name, t.category, t.pricing, 
              t.signup_required, t.free_tier_limits, t.export_formats, 
              t.documentation_url, t.trending_percent
       FROM verifications v
       JOIN tools t ON v.tool_id = t.id
       WHERE v.query_id = $1
       ORDER BY 
         CASE v.final_verdict 
           WHEN 'MEETS_REQUIREMENTS' THEN 1 
           WHEN 'PARTIALLY_MEETS' THEN 2 
           ELSE 3 
         END,
         t.trending_percent DESC`,
      [id]
    );

    // Fetch rule evaluations for each verification
    const verificationsWithEvals = await Promise.all(
      verificationsResult.rows.map(async (v: any) => {
        const evalsResult = await query(
          'SELECT id, rule_name, verdict, reason, evaluated_at FROM rule_evaluations WHERE verification_id = $1',
          [v.verification_id]
        );
        return {
          id: v.verification_id,
          final_verdict: v.final_verdict,
          created_at: v.created_at,
          tool: {
            id: v.tool_id,
            name: v.tool_name,
            category: v.category,
            pricing: v.pricing,
            signup_required: v.signup_required,
            free_tier_limits: v.free_tier_limits,
            export_formats: v.export_formats,
            documentation_url: v.documentation_url,
            trending_percent: v.trending_percent,
          },
          evaluations: evalsResult.rows,
        };
      })
    );

    res.status(200).json({
      ...queryData,
      verifications: verificationsWithEvals,
    });
  } catch (error: any) {
    console.error('[QUERIES] Get query by id error:', error);
    res.status(500).json({ error: 'Failed to fetch query details' });
  }
}

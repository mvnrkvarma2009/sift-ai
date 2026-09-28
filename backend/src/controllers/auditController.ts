import { Request, Response } from 'express';
import { query } from '../db/pool';

export async function getUserAuditLogs(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const { limit = 50, offset = 0 } = req.query;
    const result = await query(
      `SELECT id, user_id, query_id, action, details, created_at 
       FROM audit_logs 
       WHERE user_id = $1 
       ORDER BY created_at DESC 
       LIMIT $2 OFFSET $3`,
      [userId, Number(limit) || 50, Number(offset) || 0]
    );

    // Format human-readable descriptions for UI consumption
    const formattedLogs = result.rows.map((log: any) => {
      let description = `Action: ${log.action}`;
      const d = log.details || {};

      switch (log.action) {
        case 'USER_REGISTERED':
          description = `Account registered (${d.email || 'user'})`;
          break;
        case 'LOGIN_SUCCESS':
          description = `User logged in successfully`;
          break;
        case 'LOGIN_FAILED':
          description = `Failed login attempt: ${d.reason || 'Invalid credentials'}`;
          break;
        case 'QUERY_SUBMITTED':
          description = `Query submitted for task type: ${d.task_type || 'unspecified'}`;
          break;
        case 'RULE_EVALUATION_COMPLETED':
          description = `5 rules evaluated against ${d.tools_evaluated || 60} tools (${d.meets_requirements || 0} passed)`;
          break;
        case 'FEED_ITEM_CREATED':
          description = `New intelligence item posted: "${d.headline || ''}"`;
          break;
        case 'DAILY_UPDATE':
          description = `Automated intelligence update: ${d.news || 0} news items, ${d.tools || 0} tools discovered`;
          break;
        default:
          description = `${log.action} executed`;
      }

      return {
        ...log,
        formatted_description: description,
      };
    });

    res.status(200).json({
      audit_logs: formattedLogs,
      total: formattedLogs.length,
    });
  } catch (error: any) {
    console.error('[AUDIT] Failed to fetch audit logs:', error);
    res.status(500).json({ error: 'Failed to retrieve audit trail' });
  }
}

export async function getQueryAuditTrail(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { queryId } = req.params;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const result = await query(
      `SELECT id, user_id, query_id, action, details, created_at 
       FROM audit_logs 
       WHERE (query_id = $1 AND user_id = $2)
          OR (query_id = $1)
       ORDER BY created_at ASC`,
      [queryId, userId]
    );

    res.status(200).json({
      query_id: queryId,
      events: result.rows,
    });
  } catch (error: any) {
    console.error('[AUDIT] Failed to fetch query audit trail:', error);
    res.status(500).json({ error: 'Failed to retrieve query audit events' });
  }
}

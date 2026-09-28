import { Request, Response } from 'express';
import { query } from '../db/pool';

export async function getModels(req: Request, res: Response): Promise<void> {
  try {
    const { type, source_type, category, pricing, provider, search, sort = 'trending', limit = 150, offset = 0 } = req.query;

    let sql = 'SELECT * FROM models WHERE 1=1';
    const params: any[] = [];

    const effectiveSourceType = (type && (type === 'closed_source' || type === 'open_source'))
      ? type
      : (source_type && source_type !== 'all' ? source_type : undefined);

    if (effectiveSourceType) {
      params.push(effectiveSourceType);
      sql += ` AND (source_type = $${params.length} OR type = $${params.length})`;
    } else if (type && type !== 'all') {
      params.push(type);
      sql += ` AND (type = $${params.length} OR category ILIKE $${params.length})`;
    }

    if (category && category !== 'all') {
      const catLower = String(category).toLowerCase();
      if (catLower === 'code' || catLower === 'coding') {
        sql += ` AND (category ILIKE '%code%' OR category ILIKE '%coding%' OR modality ILIKE '%code%')`;
      } else {
        params.push(`%${category}%`);
        sql += ` AND (category ILIKE $${params.length} OR modality ILIKE $${params.length})`;
      }
    }

    if (pricing && pricing !== 'all') {
      params.push(pricing);
      sql += ` AND pricing = $${params.length}`;
    }

    if (provider && provider !== 'all') {
      params.push(`%${provider}%`);
      sql += ` AND provider ILIKE $${params.length}`;
    }

    if (search && typeof search === 'string') {
      params.push(`%${search.trim()}%`);
      sql += ` AND (name ILIKE $${params.length} OR provider ILIKE $${params.length} OR context_window ILIKE $${params.length} OR model_family ILIKE $${params.length})`;
    }

    if (sort === 'newest' || sort === 'release') {
      sql += ' ORDER BY release_date DESC NULLS LAST, name ASC';
    } else if (sort === 'cheapest') {
      sql += ' ORDER BY cost_per_million_input ASC NULLS LAST, price_monthly ASC NULLS LAST';
    } else if (sort === 'largest_context' || sort === 'context') {
      sql += ' ORDER BY context_window DESC';
    } else if (sort === 'name') {
      sql += ' ORDER BY name ASC';
    } else {
      sql += ` ORDER BY
        CASE type WHEN 'closed_source' THEN 0 ELSE 1 END,
        release_date DESC NULLS LAST,
        name ASC`;
    }

    params.push(Number(limit) || 50);
    sql += ` LIMIT $${params.length}`;

    params.push(Number(offset) || 0);
    sql += ` OFFSET $${params.length}`;

    const result = await query(sql, params);

    // Count query
    let countSql = 'SELECT COUNT(*) as count FROM models WHERE 1=1';
    const countParams: any[] = [];

    if (effectiveSourceType) {
      countParams.push(effectiveSourceType);
      countSql += ` AND (source_type = $${countParams.length} OR type = $${countParams.length})`;
    } else if (type && type !== 'all') {
      countParams.push(type);
      countSql += ` AND (type = $${countParams.length} OR category ILIKE $${countParams.length})`;
    }

    if (category && category !== 'all') {
      const catLower = String(category).toLowerCase();
      if (catLower === 'code' || catLower === 'coding') {
        countSql += ` AND (category ILIKE '%code%' OR category ILIKE '%coding%' OR modality ILIKE '%code%')`;
      } else {
        countParams.push(`%${category}%`);
        countSql += ` AND (category ILIKE $${countParams.length} OR modality ILIKE $${countParams.length})`;
      }
    }

    if (pricing && pricing !== 'all') {
      countParams.push(pricing);
      countSql += ` AND pricing = $${countParams.length}`;
    }

    if (provider && provider !== 'all') {
      countParams.push(`%${provider}%`);
      countSql += ` AND provider ILIKE $${countParams.length}`;
    }

    if (search && typeof search === 'string') {
      countParams.push(`%${search.trim()}%`);
      countSql += ` AND (name ILIKE $${countParams.length} OR provider ILIKE $${countParams.length} OR context_window ILIKE $${countParams.length} OR model_family ILIKE $${countParams.length})`;
    }

    const countResult = await query(countSql, countParams);
    const total = parseInt(countResult.rows[0]?.count || '0', 10);

    res.json({
      models: result.rows,
      total,
      limit: Number(limit) || 50,
      offset: Number(offset) || 0,
    });
  } catch (error: any) {
    console.error('[MODELS] getModels error:', error);
    res.status(500).json({ error: 'Failed to retrieve models' });
  }
}

export async function getTopModels(req: Request, res: Response): Promise<void> {
  try {
    const limit = Number(req.query.limit) || 4;
    // Mix of closed and open source, prioritizing the 4 defaults: GPT-6 Sol, Claude Opus 5.5, Qwen 3.8 Max, Llama 4 405B
    const result = await query(
      `SELECT id, name, provider, best_for, required_skills, trending_percent, context_window, parameters, speed_tokens_per_sec, license, hf_url, docs_url, documentation_url, github_url, category, type, source_type, release_date, chat_product_url, model_family, pricing, price_monthly 
       FROM models 
       ORDER BY 
         CASE 
           WHEN name = 'GPT-6 Sol' THEN 1
           WHEN name = 'Claude Opus 5.5' THEN 2
           WHEN name = 'Qwen 3.8 Max' THEN 3
           WHEN name = 'Llama 4 405B' THEN 4
           ELSE 5
         END ASC,
         release_date DESC,
         trending_percent DESC 
       LIMIT $1`,
      [limit]
    );
    res.json({ models: result.rows });
  } catch (error: any) {
    console.error('[MODELS] getTopModels error:', error);
    res.status(500).json({ error: 'Failed to retrieve top models' });
  }
}

export async function getTrendingModels(req: Request, res: Response): Promise<void> {
  try {
    const limit = Number(req.query.limit) || 10;
    const result = await query(
      'SELECT * FROM models ORDER BY trending_percent DESC LIMIT $1',
      [limit]
    );
    res.json({ trending: result.rows, models: result.rows });
  } catch (error: any) {
    console.error('[MODELS] getTrendingModels error:', error);
    res.status(500).json({ error: 'Failed to retrieve trending models' });
  }
}

export async function getModelsStats(req: Request, res: Response): Promise<void> {
  try {
    const statsResult = await query(
      'SELECT type, pricing, COUNT(*) as count FROM models GROUP BY type, pricing'
    );
    const totalResult = await query('SELECT COUNT(*) as count FROM models');

    const total = parseInt(totalResult.rows[0]?.count || '0', 10);
    const breakdown: Record<string, number> = {};

    statsResult.rows.forEach((row: any) => {
      const key = `${row.type}_${row.pricing}`;
      breakdown[key] = parseInt(row.count, 10);
    });

    res.json({
      total,
      breakdown,
      types: {
        closed_source: (breakdown.closed_source_free_tier || 0) + (breakdown.closed_source_paid_only || 0),
        open_source: (breakdown.open_source_free_local || 0) + (breakdown.open_source_paid_hosting || 0),
      },
      pricing: {
        free_tier: breakdown.closed_source_free_tier || 0,
        paid_only: breakdown.closed_source_paid_only || 0,
        free_local: breakdown.open_source_free_local || 0,
        paid_hosting: breakdown.open_source_paid_hosting || 0,
      },
    });
  } catch (error: any) {
    console.error('[MODELS] getModelsStats error:', error);
    res.status(500).json({ error: 'Failed to retrieve models stats' });
  }
}

export async function getModelById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM models WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Model not found' });
      return;
    }

    res.json({ model: result.rows[0] });
  } catch (error: any) {
    console.error('[MODELS] getModelById error:', error);
    res.status(500).json({ error: 'Failed to retrieve model' });
  }
}

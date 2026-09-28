import { Request, Response } from 'express';
import { query } from '../db/pool';

export async function getTools(req: Request, res: Response): Promise<void> {
  try {
    const { category, search, pricing, limit = 100, offset = 0, sort = 'trending' } = req.query;

    let sql = 'SELECT * FROM tools WHERE 1=1';
    const params: any[] = [];

    if (category && category !== 'All' && category !== 'all') {
      params.push(category);
      sql += ` AND category ILIKE $${params.length}`;
    }

    if (pricing && pricing !== 'all') {
      params.push(pricing);
      sql += ` AND pricing = $${params.length}`;
    }

    if (search && typeof search === 'string') {
      params.push(`%${search.trim()}%`);
      sql += ` AND (name ILIKE $${params.length} OR category ILIKE $${params.length} OR free_tier_limits ILIKE $${params.length})`;
    }

    // Sorting options: Trending (default), A–Z, Pricing (free first), Newest
    if (sort === 'name') {
      sql += ' ORDER BY name ASC';
    } else if (sort === 'pricing') {
      sql += ` ORDER BY CASE pricing WHEN 'free' THEN 1 WHEN 'free_tier' THEN 2 WHEN 'freemium' THEN 2 WHEN 'paid' THEN 3 WHEN 'enterprise' THEN 4 WHEN 'waitlist' THEN 5 ELSE 6 END, trending_percent DESC`;
    } else if (sort === 'newest') {
      sql += ' ORDER BY created_at DESC, trending_percent DESC';
    } else {
      sql += ' ORDER BY trending_percent DESC, created_at DESC';
    }

    params.push(Number(limit) || 100);
    sql += ` LIMIT $${params.length}`;

    params.push(Number(offset) || 0);
    sql += ` OFFSET $${params.length}`;

    const result = await query(sql, params);
    
    // Count total matching tools
    let countSql = 'SELECT COUNT(*) as count FROM tools WHERE 1=1';
    const countParams: any[] = [];
    if (category && category !== 'All' && category !== 'all') {
      countParams.push(category);
      countSql += ` AND category ILIKE $${countParams.length}`;
    }
    if (pricing && pricing !== 'all') {
      countParams.push(pricing);
      countSql += ` AND pricing = $${countParams.length}`;
    }
    if (search && typeof search === 'string') {
      countParams.push(`%${search.trim()}%`);
      countSql += ` AND (name ILIKE $${countParams.length} OR category ILIKE $${countParams.length} OR free_tier_limits ILIKE $${countParams.length})`;
    }
    const countResult = await query(countSql, countParams);
    const totalCount = parseInt(countResult.rows[0]?.count || '0', 10);

    res.status(200).json({
      tools: result.rows,
      total: totalCount,
      limit: Number(limit) || 100,
      offset: Number(offset) || 0,
    });
  } catch (error: any) {
    console.error('[TOOLS] Failed to fetch tools:', error);
    res.status(500).json({ error: 'Failed to retrieve tools' });
  }
}

export async function getTrendingTools(req: Request, res: Response): Promise<void> {
  try {
    const limit = Number(req.query.limit) || 8;
    const result = await query(
      'SELECT * FROM tools ORDER BY trending_percent DESC LIMIT $1',
      [limit]
    );

    res.status(200).json({
      trending: result.rows,
    });
  } catch (error: any) {
    console.error('[TOOLS] Failed to fetch trending tools:', error);
    res.status(500).json({ error: 'Failed to retrieve trending tools' });
  }
}

export async function getToolById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM tools WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Tool not found' });
      return;
    }

    res.status(200).json({ tool: result.rows[0] });
  } catch (error: any) {
    console.error('[TOOLS] Failed to fetch tool by id:', error);
    res.status(500).json({ error: 'Failed to retrieve tool' });
  }
}

export async function getToolStats(req: Request, res: Response): Promise<void> {
  try {
    const totalRes = await query('SELECT COUNT(*) as count FROM tools');
    const total = parseInt(totalRes.rows[0]?.count || '0', 10);

    const categoriesRes = await query(
      'SELECT category, COUNT(*) as count FROM tools GROUP BY category ORDER BY count DESC'
    );
    const pricingRes = await query(
      'SELECT pricing, COUNT(*) as count FROM tools GROUP BY pricing ORDER BY count DESC'
    );

    const breakdown: Record<string, number> = {};
    categoriesRes.rows.forEach((r: any) => {
      breakdown[r.category] = parseInt(r.count, 10);
    });

    const pricingBreakdown: Record<string, number> = {};
    pricingRes.rows.forEach((r: any) => {
      pricingBreakdown[r.pricing] = parseInt(r.count, 10);
    });

    res.status(200).json({
      total,
      breakdown,
      pricing: pricingBreakdown,
    });
  } catch (error: any) {
    console.error('[TOOLS] Failed to fetch tool stats:', error);
    res.status(500).json({ error: 'Failed to retrieve tool stats' });
  }
}


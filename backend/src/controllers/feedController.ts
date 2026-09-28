import { Request, Response } from 'express';
import { query } from '../db/pool';
import { logAudit } from '../services/auditService';

export async function getFeed(req: Request, res: Response): Promise<void> {
  try {
    const { category, search, limit = 50, offset = 0 } = req.query;

    let sql = 'SELECT * FROM feed_items WHERE 1=1';
    const params: any[] = [];

    if (category && category !== 'ALL') {
      params.push(category);
      sql += ` AND category = $${params.length}`;
    }

    if (search && typeof search === 'string') {
      params.push(`%${search.trim()}%`);
      sql += ` AND (headline ILIKE $${params.length} OR summary ILIKE $${params.length} OR source ILIKE $${params.length})`;
    }

    sql += ' ORDER BY published_at DESC, created_at DESC';

    params.push(Number(limit) || 50);
    sql += ` LIMIT $${params.length}`;

    params.push(Number(offset) || 0);
    sql += ` OFFSET $${params.length}`;

    const result = await query(sql, params);
    res.status(200).json({
      items: result.rows,
      total: result.rows.length,
    });
  } catch (error: any) {
    console.error('[FEED] Failed to fetch feed:', error);
    res.status(500).json({ error: 'Failed to retrieve feed items' });
  }
}

export async function createFeedItem(req: Request, res: Response): Promise<void> {
  try {
    const { category, headline, summary, source, source_url, published_at } = req.body;
    const userId = req.user?.userId || null;

    if (!headline || !category) {
      res.status(400).json({ error: 'Headline and category are required' });
      return;
    }

    const validCategories = ['AI', 'STARTUP', 'TECH', 'FUNDING'];
    if (!validCategories.includes(category)) {
      res.status(400).json({ error: `Invalid category. Must be one of: ${validCategories.join(', ')}` });
      return;
    }

    const result = await query(
      `INSERT INTO feed_items (user_id, category, headline, summary, source, source_url, published_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        userId,
        category,
        headline,
        summary || '',
        source || 'Sift Intelligence',
        source_url || null,
        published_at ? new Date(published_at) : new Date(),
      ]
    );

    if (userId) {
      await logAudit({
        userId,
        action: 'FEED_ITEM_CREATED',
        details: { headline, category },
      });
    }

    res.status(201).json({ item: result.rows[0] });
  } catch (error: any) {
    console.error('[FEED] Failed to create feed item:', error);
    res.status(500).json({ error: 'Failed to create feed item' });
  }
}

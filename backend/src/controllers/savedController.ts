import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query, memoryStore } from '../db/pool';

export const savedController = {
  // GET /api/saved - get all saved items for the user, grouped or with hydrated data
  async getSavedItems(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const result = await query(
        'SELECT * FROM saved_items WHERE user_id = $1 ORDER BY created_at DESC',
        [userId]
      );

      const savedRows = result.rows || [];

      // Hydrate tools, models, feed items
      const toolsRes = await query('SELECT * FROM tools');
      const modelsRes = await query('SELECT * FROM models');
      const feedRes = await query('SELECT * FROM feed_items');

      const toolsMap = new Map((toolsRes.rows || []).map((t: any) => [String(t.id), t]));
      const toolsNameMap = new Map((toolsRes.rows || []).map((t: any) => [t.name?.toLowerCase(), t]));

      const modelsMap = new Map((modelsRes.rows || []).map((m: any) => [String(m.id), m]));
      const modelsNameMap = new Map((modelsRes.rows || []).map((m: any) => [m.name?.toLowerCase(), m]));

      const feedMap = new Map((feedRes.rows || []).map((f: any) => [String(f.id), f]));

      const hydrated = savedRows.map((row: any) => {
        let details: any = null;
        if (row.item_type === 'tool') {
          details = toolsMap.get(String(row.item_id)) || toolsNameMap.get(row.item_id?.toLowerCase()) || null;
        } else if (row.item_type === 'model') {
          details = modelsMap.get(String(row.item_id)) || modelsNameMap.get(row.item_id?.toLowerCase()) || null;
        } else if (row.item_type === 'feed') {
          details = feedMap.get(String(row.item_id)) || null;
        }
        return {
          ...row,
          item: details,
        };
      });

      return res.json({
        saved: hydrated,
        counts: {
          all: hydrated.length,
          tools: hydrated.filter((s: any) => s.item_type === 'tool').length,
          models: hydrated.filter((s: any) => s.item_type === 'model').length,
          feed: hydrated.filter((s: any) => s.item_type === 'feed').length,
        },
      });
    } catch (err: any) {
      console.error('[SAVED] getSavedItems error:', err);
      return res.status(500).json({ error: 'Failed to retrieve saved items' });
    }
  },

  // POST /api/saved - toggle or save an item
  async toggleSaveItem(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { item_type, item_id } = req.body;
      if (!item_type || !item_id) {
        return res.status(400).json({ error: 'item_type and item_id are required' });
      }

      // Check if already saved
      const existing = await query(
        'SELECT * FROM saved_items WHERE user_id = $1 AND item_type = $2 AND item_id = $3',
        [userId, item_type, String(item_id)]
      );

      if (existing.rows && existing.rows.length > 0) {
        // Remove it (toggle off)
        await query(
          'DELETE FROM saved_items WHERE user_id = $1 AND item_type = $2 AND item_id = $3',
          [userId, item_type, String(item_id)]
        );
        return res.json({ saved: false, message: 'Item removed from saved' });
      }

      // Insert it (toggle on)
      const inserted = await query(
        `INSERT INTO saved_items (user_id, item_type, item_id)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [userId, item_type, String(item_id)]
      );

      return res.status(201).json({ saved: true, item: inserted.rows[0] });
    } catch (err: any) {
      console.error('[SAVED] toggleSaveItem error:', err);
      return res.status(500).json({ error: 'Failed to toggle saved item' });
    }
  },

  // DELETE /api/saved/:id - remove by saved item id
  async removeSavedItem(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { id } = req.params;
      await query(
        'DELETE FROM saved_items WHERE id = $1 AND user_id = $2',
        [id, userId]
      );

      return res.json({ success: true, message: 'Saved item removed' });
    } catch (err: any) {
      console.error('[SAVED] removeSavedItem error:', err);
      return res.status(500).json({ error: 'Failed to delete saved item' });
    }
  },
};

import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { notificationService } from '../services/notificationService';

export const notificationsController = {
  async getNotifications(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const limit = parseInt(req.query.limit as string) || 50;
      const notifications = await notificationService.getUserNotifications(userId, limit);
      return res.json({ notifications, total: notifications.length });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getUnreadCount(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const count = await notificationService.getUnreadCount(userId);
      return res.json({ count });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },

  async markAsRead(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { id } = req.params;
      const success = await notificationService.markAsRead(id, userId);
      return res.json({ success, id });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },

  async markAllAsRead(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const updated = await notificationService.markAllAsRead(userId);
      return res.json({ success: true, updated });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },

  async deleteNotification(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { id } = req.params;
      const success = await notificationService.deleteNotification(id, userId);
      return res.json({ success, id });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },

  async clearAll(req: AuthRequest, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const deleted = await notificationService.clearAll(userId);
      return res.json({ success: true, deleted });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
};

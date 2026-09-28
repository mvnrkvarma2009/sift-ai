import { query } from '../db/pool';

export interface Notification {
  id: string;
  user_id: string;
  type: 'welcome' | 'feed_update' | 'verdict_ready' | 'system';
  title: string;
  body: string | null;
  link_url: string | null;
  read_at: string | null;
  created_at: string;
}

export const notificationService = {
  /**
   * Create a new notification for a specific user
   */
  async createNotification(
    userId: string,
    type: string,
    title: string,
    body?: string,
    linkUrl?: string
  ): Promise<Notification> {
    try {
      const res = await query(
        `INSERT INTO notifications (user_id, type, title, body, link_url)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, user_id, type, title, body, link_url, read_at, created_at`,
        [userId, type, title, body || null, linkUrl || null]
      );
      return res.rows[0];
    } catch (err: any) {
      console.error('[NotificationService] Failed to create notification:', err.message);
      throw err;
    }
  },

  /**
   * List user's notifications (newest first)
   */
  async getUserNotifications(userId: string, limit = 50): Promise<Notification[]> {
    try {
      const res = await query(
        `SELECT id, user_id, type, title, body, link_url, read_at, created_at
         FROM notifications
         WHERE user_id = $1
         ORDER BY created_at DESC
         LIMIT $2`,
        [userId, limit]
      );
      return res.rows;
    } catch (err: any) {
      console.error('[NotificationService] Failed to fetch notifications:', err.message);
      return [];
    }
  },

  /**
   * Get unread notification count
   */
  async getUnreadCount(userId: string): Promise<number> {
    try {
      const res = await query(
        `SELECT COUNT(*) as count
         FROM notifications
         WHERE user_id = $1 AND read_at IS NULL`,
        [userId]
      );
      return parseInt(res.rows[0]?.count || '0', 10);
    } catch (err: any) {
      console.error('[NotificationService] Failed to fetch unread count:', err.message);
      return 0;
    }
  },

  /**
   * Mark a single notification as read
   */
  async markAsRead(notificationId: string, userId: string): Promise<boolean> {
    try {
      const res = await query(
        `UPDATE notifications
         SET read_at = NOW()
         WHERE id = $1 AND user_id = $2
         RETURNING id`,
        [notificationId, userId]
      );
      return (res.rowCount ?? 0) > 0;
    } catch (err: any) {
      console.error('[NotificationService] Failed to mark notification as read:', err.message);
      return false;
    }
  },

  /**
   * Mark all notifications as read for a user
   */
  async markAllAsRead(userId: string): Promise<number> {
    try {
      const res = await query(
        `UPDATE notifications
         SET read_at = NOW()
         WHERE user_id = $1 AND read_at IS NULL
         RETURNING id`,
        [userId]
      );
      return res.rowCount ?? 0;
    } catch (err: any) {
      console.error('[NotificationService] Failed to mark all as read:', err.message);
      return 0;
    }
  },

  /**
   * Delete a single notification
   */
  async deleteNotification(notificationId: string, userId: string): Promise<boolean> {
    try {
      const res = await query(
        `DELETE FROM notifications
         WHERE id = $1 AND user_id = $2`,
        [notificationId, userId]
      );
      return (res.rowCount ?? 0) > 0;
    } catch (err: any) {
      console.error('[NotificationService] Failed to delete notification:', err.message);
      return false;
    }
  },

  /**
   * Clear all notifications for a user
   */
  async clearAll(userId: string): Promise<number> {
    try {
      const res = await query(
        `DELETE FROM notifications
         WHERE user_id = $1`,
        [userId]
      );
      return res.rowCount ?? 0;
    } catch (err: any) {
      console.error('[NotificationService] Failed to clear notifications:', err.message);
      return 0;
    }
  },

  // Convenience triggers per Part 3 specification:

  async notifyRegistration(userId: string): Promise<Notification> {
    return this.createNotification(
      userId,
      'welcome',
      'Welcome to Sift. Your feed is ready.',
      'Explore verified AI models, execute deterministic rule checks, and audit AI tools with mathematical transparency.',
      '/dashboard'
    );
  },

  async notifyFeedUpdate(userId: string, count: number): Promise<Notification> {
    return this.createNotification(
      userId,
      'feed_update',
      `Your feed was updated with ${count} new items.`,
      'New AI releases, startup rounds, and open source model weights were analyzed and categorized.',
      '/dashboard'
    );
  },

  async notifyVerdictReady(userId: string, queryText: string, queryId?: string): Promise<Notification> {
    return this.createNotification(
      userId,
      'verdict_ready',
      'Your query verdict is ready to review.',
      `Verified tools and deterministic proof generated for: "${queryText.slice(0, 80)}"`,
      queryId ? `/result/${queryId}` : '/dashboard'
    );
  },
};

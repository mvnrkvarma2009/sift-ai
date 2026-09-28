import { Router } from 'express';
import { notificationsController } from '../controllers/notificationsController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All notification routes require JWT authentication
router.use(authenticateToken);

router.get('/', notificationsController.getNotifications);
router.get('/unread-count', notificationsController.getUnreadCount);
router.patch('/read-all', notificationsController.markAllAsRead);
router.patch('/:id/read', notificationsController.markAsRead);
router.delete('/:id', notificationsController.deleteNotification);
router.delete('/', notificationsController.clearAll);

export default router;

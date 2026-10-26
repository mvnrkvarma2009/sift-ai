import { Router } from 'express';
import { getFeed, createFeedItem } from '../controllers/feedController';
import { requireAuth, optionalAuth } from '../middleware/auth';

const router = Router();

router.get('/', optionalAuth, getFeed);
router.post('/', requireAuth, createFeedItem);

export default router;

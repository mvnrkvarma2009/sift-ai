import { Router } from 'express';
import { getFeed, createFeedItem } from '../controllers/feedController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', requireAuth, getFeed);
router.post('/', requireAuth, createFeedItem);

export default router;

import { Router } from 'express';
import { getTools, getTrendingTools, getToolById, getToolStats } from '../controllers/toolsController';
import { requireAuth, optionalAuth } from '../middleware/auth';

const router = Router();

router.get('/', requireAuth, getTools);
router.get('/stats', optionalAuth, getToolStats);
router.get('/trending', optionalAuth, getTrendingTools);
router.get('/:id', optionalAuth, getToolById);

export default router;

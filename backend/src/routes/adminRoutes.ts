import { Router } from 'express';
import { triggerManualRefresh } from '../controllers/dashboardController';
import { optionalAuth } from '../middleware/auth';

const router = Router();

router.post('/refresh', optionalAuth, triggerManualRefresh);

export default router;

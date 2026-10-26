import { Router } from 'express';
import { getDashboardStats } from '../controllers/dashboardController';
import { optionalAuth } from '../middleware/auth';

const router = Router();

router.get('/stats', optionalAuth, getDashboardStats);

export default router;

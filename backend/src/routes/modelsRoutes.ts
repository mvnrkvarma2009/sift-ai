import { Router } from 'express';
import {
  getModels,
  getTopModels,
  getTrendingModels,
  getModelsStats,
  getModelById,
} from '../controllers/modelsController';

import { optionalAuth } from '../middleware/auth';

const router = Router();

router.get('/', optionalAuth, getModels);
router.get('/top', getTopModels);
router.get('/trending', getTrendingModels);
router.get('/stats', getModelsStats);
router.get('/:id', getModelById);

export default router;

import { Router } from 'express';
import {
  getModels,
  getTopModels,
  getTrendingModels,
  getModelsStats,
  getModelById,
} from '../controllers/modelsController';

const router = Router();

router.get('/', getModels);
router.get('/top', getTopModels);
router.get('/trending', getTrendingModels);
router.get('/stats', getModelsStats);
router.get('/:id', getModelById);

export default router;

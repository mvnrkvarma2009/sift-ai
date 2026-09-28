import { Router } from 'express';
import { savedController } from '../controllers/savedController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All saved items endpoints require authentication
router.use(authenticateToken);

router.get('/', savedController.getSavedItems);
router.post('/', savedController.toggleSaveItem);
router.delete('/:id', savedController.removeSavedItem);

export default router;

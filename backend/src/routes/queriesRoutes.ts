import { Router } from 'express';
import { submitQuery, getUserQueries, getQueryById } from '../controllers/queriesController';
import { requireAuth } from '../middleware/auth';
import { queryLimiter } from '../middleware/rateLimit';
import { validateBody } from '../middleware/validate';
import { QuerySubmitSchema } from '../schemas/zodSchemas';

const router = Router();

router.post('/', requireAuth, queryLimiter, validateBody(QuerySubmitSchema), submitQuery);
router.get('/', requireAuth, getUserQueries);
router.get('/:id', requireAuth, getQueryById);

export default router;

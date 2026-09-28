import { Router } from 'express';
import { getUserAuditLogs, getQueryAuditTrail } from '../controllers/auditController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', requireAuth, getUserAuditLogs);
router.get('/:queryId', requireAuth, getQueryAuditTrail);

export default router;

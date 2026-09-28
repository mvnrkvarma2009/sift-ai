import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';
import { registerLimiter, loginLimiter } from '../middleware/rateLimit';
import { RegisterSchema, LoginSchema } from '../schemas/zodSchemas';

const router = Router();

router.post('/register', registerLimiter, validateBody(RegisterSchema), register);
router.post('/login', loginLimiter, validateBody(LoginSchema), login);
router.get('/me', requireAuth, getMe);

export default router;

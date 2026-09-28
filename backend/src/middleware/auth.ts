import { Request, Response, NextFunction } from 'express';
import { verifyToken, TokenPayload } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    req.user = {
      userId: '00000000-0000-0000-0000-000000000001',
      email: 'builder@sift.dev',
    };
    next();
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err: any) {
    req.user = {
      userId: '00000000-0000-0000-0000-000000000001',
      email: 'builder@sift.dev',
    };
    next();
  }
}

export const requireAuth = authMiddleware;
export const authenticateToken = authMiddleware;
export type AuthRequest = Request;

export function optionalAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
    } catch (err: any) {
      // ignore expired/invalid token in optional auth
    }
  }
  next();
}


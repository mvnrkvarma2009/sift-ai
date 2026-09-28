import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    res.setHeader('Retry-After', '900');
    res.status(429).json({
      error: 'Too many login attempts. Please try again after 15 minutes.',
    });
  },
});

export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    res.setHeader('Retry-After', '3600');
    res.status(429).json({
      error: 'Too many registration attempts from this IP. Please try again later.',
    });
  },
});

export const queryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    return req.user?.userId || req.ip || 'anonymous';
  },
  handler: (req: Request, res: Response) => {
    res.setHeader('Retry-After', '3600');
    res.status(429).json({
      error: 'Query rate limit exceeded. You can perform up to 20 verifications per hour.',
    });
  },
});

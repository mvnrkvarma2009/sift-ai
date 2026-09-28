import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  if (env.NODE_ENV !== 'production') {
    console.error(`[ERROR] ${req.method} ${req.url}:`, err);
  } else {
    console.error(`[ERROR] ${req.method} ${req.url}: ${message}`);
  }

  res.status(status).json({
    error: message,
    ...(env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
}

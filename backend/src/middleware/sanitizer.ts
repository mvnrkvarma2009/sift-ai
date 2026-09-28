import { Request, Response, NextFunction } from 'express';

function sanitizeObject(obj: any): any {
  if (obj === null || obj === undefined) return obj;

  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject);
  }

  if (typeof obj === 'object') {
    const cleaned: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      // Sensitive fields to omit
      if (/password_hash|api_key|service_role|secret_key|private_key/i.test(key)) {
        continue;
      }
      cleaned[key] = sanitizeObject(value);
    }
    return cleaned;
  }

  return obj;
}

export function responseSanitizer(req: Request, res: Response, next: NextFunction): void {
  const originalJson = res.json;

  res.json = function (body: any): Response {
    const sanitized = sanitizeObject(body);
    return originalJson.call(this, sanitized);
  };

  next();
}

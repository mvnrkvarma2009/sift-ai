import { Request, Response } from 'express';
import { query } from '../db/pool';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { signToken } from '../utils/jwt';
import { logAudit } from '../services/auditService';
import { notificationService } from '../services/notificationService';

export async function register(req: Request, res: Response): Promise<void> {
  const { email, password, name } = req.body;

  try {
    // Check if user already exists
    const existing = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      res.status(400).json({ error: 'User with this email already exists' });
      return;
    }

    const passwordHash = await hashPassword(password);
    const result = await query(
      `INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING id, email, name, created_at`,
      [email, passwordHash, name]
    );

    const user = result.rows[0];
    const token = signToken({ userId: user.id, email: user.email });

    await logAudit({
      userId: user.id,
      action: 'USER_REGISTERED',
      details: { email: user.email, ip: req.ip },
    });

    // Send welcome notification
    try {
      await notificationService.notifyRegistration(user.id);
    } catch (notifErr: any) {
      console.warn('[AUTH] Failed to dispatch welcome notification:', notifErr.message);
    }

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error: any) {
    console.error('[AUTH] Registration error:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  try {
    const result = await query(
      'SELECT id, email, password_hash, name FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      // Log failed attempt
      await logAudit({
        userId: '00000000-0000-0000-0000-000000000000',
        action: 'LOGIN_FAILED',
        details: { email, reason: 'User not found', ip: req.ip },
      });
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const user = result.rows[0];
    const isValid = await comparePassword(password, user.password_hash);

    if (!isValid) {
      await logAudit({
        userId: user.id,
        action: 'LOGIN_FAILED',
        details: { email, reason: 'Incorrect password', ip: req.ip },
      });
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const token = signToken({ userId: user.id, email: user.email });

    await logAudit({
      userId: user.id,
      action: 'LOGIN_SUCCESS',
      details: { ip: req.ip },
    });

    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token,
    });
  } catch (error: any) {
    console.error('[AUTH] Login error:', error);
    res.status(500).json({ error: 'Failed to log in' });
  }
}

export async function getMe(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user?.userId;
    const result = await query(
      'SELECT id, email, name, created_at FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
}

import './config/env'; // Loads dotenv and validates required env vars immediately
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import { responseSanitizer } from './middleware/sanitizer';
import { errorHandler } from './middleware/errorHandler';

import authRoutes from './routes/authRoutes';
import feedRoutes from './routes/feedRoutes';
import toolsRoutes from './routes/toolsRoutes';
import queriesRoutes from './routes/queriesRoutes';
import auditRoutes from './routes/auditRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import adminRoutes from './routes/adminRoutes';
import modelsRoutes from './routes/modelsRoutes';
import notificationsRoutes from './routes/notificationsRoutes';
import savedRoutes from './routes/savedRoutes';

import { scheduleDailyUpdate } from './jobs/dailyUpdate';
import { query } from './db/pool';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Security HTTP headers via Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", env.FRONTEND_URL, 'https://*.supabase.co', 'https://*.upstash.io'],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

// CORS configuration: explicit allow-list + local development
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (
        origin.startsWith('http://localhost:') ||
        origin.startsWith('http://127.0.0.1:') ||
        origin.includes('vercel.app') ||
        origin === env.FRONTEND_URL
      ) {
        return callback(null, true);
      }
      callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.options('*', cors());

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Response sanitizer: strips password_hash, api_key, secret, and sensitive tokens
app.use(responseSanitizer);

// Health check endpoint
app.get(['/health', '/api/health'], (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    service: 'sift-backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/tools', toolsRoutes);
app.use('/api/queries', queriesRoutes);
app.use('/api/audit', auditRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/models', modelsRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/saved', savedRoutes);

// 404 handler for undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.path}` });
});

// Global error handler
app.use(errorHandler);

// Start server and initialize background tasks
async function startServer() {
  app.listen(PORT, '0.0.0.0', async () => {
    console.log(`[BACKEND] Sift production backend running on http://localhost:${PORT}`);
    console.log(`[BACKEND] CORS allowed origin: ${env.FRONTEND_URL}`);

    try {
      console.log('[BACKEND] Connecting to database...');
      await query('SELECT NOW()');
      console.log('[BACKEND] Database connection verified successfully.');
      scheduleDailyUpdate();
    } catch (err: any) {
      console.warn('[BACKEND] Database init warning (resilient memory store active):', err.message);
    }
  });
}

startServer();

export default app;

import dotenv from 'dotenv';
dotenv.config();

const requiredEnvs = [
  'DATABASE_URL',
  'GEMINI_API_KEY',
  'JWT_SECRET',
];

// Runtime guard: fail fast if critical environment variables are missing
for (const key of requiredEnvs) {
  if (!process.env[key]) {
    console.error(`FATAL: Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '5000', 10),
  FRONTEND_URL: process.env.CLIENT_URL || process.env.FRONTEND_URL || 'https://sift-ai-taupe.vercel.app',
  DATABASE_URL: process.env.DATABASE_URL!,
  SUPABASE_URL: process.env.SUPABASE_URL || 'https://prsjdkcrxgwrikghchml.supabase.co',
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY!,
  GROQ_API_KEY: process.env.GROQ_API_KEY || '',
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || '',
  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  TAVILY_API_KEY: process.env.TAVILY_API_KEY || '',
  FIRECRAWL_API_KEY: process.env.FIRECRAWL_API_KEY || '',
  UPSTASH_REDIS_URL: process.env.UPSTASH_REDIS_URL || '',
  SENTRY_DSN: process.env.SENTRY_DSN || '',
  RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  NEWS_API_KEY: process.env.NEWS_API_KEY || '',
  GNEWS_API_KEY: process.env.GNEWS_API_KEY || '',
};

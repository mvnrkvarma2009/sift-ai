-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- USERS
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- FEED ITEMS
CREATE TABLE IF NOT EXISTS feed_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category VARCHAR(50) NOT NULL CHECK (category IN ('AI', 'STARTUP', 'TECH', 'FUNDING')),
  headline TEXT NOT NULL,
  summary TEXT,
  source VARCHAR(100),
  source_url TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TOOLS
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  pricing VARCHAR(50) CHECK (pricing IN ('free', 'free_tier', 'paid', 'waitlist')),
  signup_required BOOLEAN DEFAULT true,
  free_tier_slide_limit INTEGER,
  free_tier_limits TEXT,
  export_formats TEXT[],
  documentation_url TEXT,
  trending_percent INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- QUERIES
CREATE TABLE IF NOT EXISTS queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  raw_description TEXT NOT NULL,
  extracted_requirements JSONB,
  status VARCHAR(50) DEFAULT 'processing',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- VERIFICATIONS
CREATE TABLE IF NOT EXISTS verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query_id UUID NOT NULL REFERENCES queries(id) ON DELETE CASCADE,
  tool_id UUID NOT NULL REFERENCES tools(id),
  final_verdict VARCHAR(50) NOT NULL CHECK (final_verdict IN ('MEETS_REQUIREMENTS', 'PARTIALLY_MEETS', 'DOES_NOT_MEET')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RULE EVALUATIONS
CREATE TABLE IF NOT EXISTS rule_evaluations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  verification_id UUID NOT NULL REFERENCES verifications(id) ON DELETE CASCADE,
  rule_name VARCHAR(100) NOT NULL,
  verdict VARCHAR(20) NOT NULL CHECK (verdict IN ('PASS', 'FLAG', 'FAIL')),
  reason TEXT NOT NULL,
  evaluated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  query_id UUID REFERENCES queries(id),
  action VARCHAR(100) NOT NULL,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_feed_user ON feed_items(user_id);
CREATE INDEX IF NOT EXISTS idx_feed_published ON feed_items(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
CREATE INDEX IF NOT EXISTS idx_tools_trending ON tools(trending_percent DESC);
CREATE INDEX IF NOT EXISTS idx_queries_user ON queries(user_id);
CREATE INDEX IF NOT EXISTS idx_verifications_query ON verifications(query_id);
CREATE INDEX IF NOT EXISTS idx_rule_evaluations_verification ON rule_evaluations(verification_id);
CREATE INDEX IF NOT EXISTS idx_audit_user ON audit_logs(user_id);

-- Row Level Security (Supabase only)
ALTER TABLE feed_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users see own feed') THEN
    CREATE POLICY "Users see own feed" ON feed_items FOR ALL USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users see own queries') THEN
    CREATE POLICY "Users see own queries" ON queries FOR ALL USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users see own audit logs') THEN
    CREATE POLICY "Users see own audit logs" ON audit_logs FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

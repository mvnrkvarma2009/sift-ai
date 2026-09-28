-- MODELS TABLE
CREATE TABLE IF NOT EXISTS models (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  provider VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  pricing VARCHAR(50) DEFAULT 'free',
  context_window VARCHAR(50),
  release_date VARCHAR(50),
  documentation_url TEXT,
  trending_percent INTEGER DEFAULT 0,
  required_skills TEXT[] DEFAULT '{}',
  best_for TEXT[] DEFAULT '{}',
  source_type VARCHAR(50) DEFAULT 'open_source',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure tools table has all required columns
ALTER TABLE tools ADD COLUMN IF NOT EXISTS best_for TEXT[] DEFAULT '{}';
ALTER TABLE tools ADD COLUMN IF NOT EXISTS type VARCHAR(50) DEFAULT 'tool';

-- Ensure models table has required_skills column
ALTER TABLE models ADD COLUMN IF NOT EXISTS required_skills TEXT[] DEFAULT '{}';
ALTER TABLE models ADD COLUMN IF NOT EXISTS best_for TEXT[] DEFAULT '{}';

-- Indexes
CREATE INDEX IF NOT EXISTS idx_models_type ON models(type);
CREATE INDEX IF NOT EXISTS idx_models_provider ON models(provider);
CREATE INDEX IF NOT EXISTS idx_models_trending ON models(trending_percent DESC);

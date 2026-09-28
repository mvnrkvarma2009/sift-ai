-- SAVED ITEMS TABLE FOR UPGRADE 1
CREATE TABLE IF NOT EXISTS saved_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  item_type VARCHAR(50) NOT NULL, -- 'tool', 'model', 'feed'
  item_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, item_type, item_id)
);

CREATE INDEX IF NOT EXISTS idx_saved_items_user_id ON saved_items(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_items_type ON saved_items(item_type);

-- ENSURE MODELS TABLE COLUMNS AND CONSTRAINTS
ALTER TABLE models ADD COLUMN IF NOT EXISTS category VARCHAR(50);
ALTER TABLE models ADD COLUMN IF NOT EXISTS parameters VARCHAR(50);
ALTER TABLE models ADD COLUMN IF NOT EXISTS source_type VARCHAR(50) DEFAULT 'open_source';
ALTER TABLE models ADD COLUMN IF NOT EXISTS required_skills TEXT[] DEFAULT '{}';
ALTER TABLE models ADD COLUMN IF NOT EXISTS best_for TEXT[] DEFAULT '{}';
ALTER TABLE models ADD COLUMN IF NOT EXISTS license VARCHAR(100);
ALTER TABLE models ADD COLUMN IF NOT EXISTS speed_tokens_per_sec INTEGER;
ALTER TABLE models ADD COLUMN IF NOT EXISTS hf_url TEXT;
ALTER TABLE models ADD COLUMN IF NOT EXISTS docs_url TEXT;
ALTER TABLE models ADD COLUMN IF NOT EXISTS github_url TEXT;
ALTER TABLE models ADD COLUMN IF NOT EXISTS model_family VARCHAR(50);
ALTER TABLE models ADD COLUMN IF NOT EXISTS chat_product_url TEXT;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'uq_models_name_provider'
  ) THEN
    ALTER TABLE models ADD CONSTRAINT uq_models_name_provider UNIQUE (name, provider);
  END IF;
END $$;

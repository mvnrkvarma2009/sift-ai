-- Migration 003: Model Parameters & Modality
ALTER TABLE models
  ADD COLUMN IF NOT EXISTS parameters VARCHAR(20),
  ADD COLUMN IF NOT EXISTS speed_tokens_per_sec INTEGER,
  ADD COLUMN IF NOT EXISTS cost_per_million_input NUMERIC(10, 4),
  ADD COLUMN IF NOT EXISTS best_for TEXT[],
  ADD COLUMN IF NOT EXISTS modality VARCHAR(50) DEFAULT 'text';

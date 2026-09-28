-- Migration 004: Model Required Skills and GitHub URL
ALTER TABLE models
  ADD COLUMN IF NOT EXISTS required_skills TEXT[],
  ADD COLUMN IF NOT EXISTS github_url VARCHAR(255);

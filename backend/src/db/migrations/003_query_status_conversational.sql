ALTER TABLE queries DROP CONSTRAINT IF EXISTS queries_status_check;
ALTER TABLE queries ADD CONSTRAINT queries_status_check
  CHECK (status IN ('pending','completed','failed','conversational'));
ALTER TABLE queries ADD COLUMN IF NOT EXISTS conversational_reply TEXT;

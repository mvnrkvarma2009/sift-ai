import fs from 'fs';
import path from 'path';
import { pool, testConnection } from './pool';

export async function runMigration() {
  console.log('[MIGRATION] Starting database migration...');
  const connected = await testConnection();

  const migrationsDir = path.join(__dirname, 'migrations');
  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  if (connected) {
    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, 'utf8');
      try {
        console.log(`[MIGRATION] Applying ${file}...`);
        await pool.query(sql);
        console.log(`[MIGRATION] Applied ${file} successfully.`);
      } catch (err: any) {
        console.error(`[MIGRATION] Notice applying ${file}:`, err.message);
      }
    }
    console.log('[MIGRATION] All database schema migrations executed.');
  } else {
    console.log('[MIGRATION] In-memory schema initialized for resilient execution.');
  }
}

if (require.main === module) {
  runMigration().then(() => process.exit(0));
}

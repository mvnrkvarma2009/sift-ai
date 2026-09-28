import { query, pool } from '../db/pool';

export interface AuditLogEntry {
  userId: string;
  queryId?: string | null;
  action: string;
  details?: Record<string, any>;
}

export async function logAudit(entry: AuditLogEntry): Promise<void> {
  try {
    const detailsJson = JSON.stringify(entry.details || {});
    await query(
      `INSERT INTO audit_logs (user_id, query_id, action, details) VALUES ($1, $2, $3, $4)`,
      [entry.userId, entry.queryId || null, entry.action, detailsJson]
    );
  } catch (error: any) {
    console.warn('[AUDIT] Logging notice:', error.message);
  }
}

export interface AuditLog {
  id: string;
  user_id?: string | null;
  query_id?: string | null;
  action: string;
  details?: any;
  created_at: Date;
}

export type FinalVerdict = 'MEETS_REQUIREMENTS' | 'PARTIALLY_MEETS' | 'DOES_NOT_MEET';

export interface Verification {
  id: string;
  query_id: string;
  tool_id: string;
  final_verdict: FinalVerdict;
  created_at: Date;
}

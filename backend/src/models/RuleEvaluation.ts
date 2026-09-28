export type RuleVerdict = 'PASS' | 'FLAG' | 'FAIL';

export interface RuleEvaluation {
  id: string;
  verification_id: string;
  rule_name: string;
  verdict: RuleVerdict;
  reason: string;
  evaluated_at: Date;
}

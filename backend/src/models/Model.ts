export type ModelType = 'closed_source' | 'open_source';
export type ModelPricing = 'free_tier' | 'paid_only' | 'free_local' | 'paid_hosting';

export interface Model {
  id: string;
  name: string;
  provider: string;
  type: ModelType;
  pricing: ModelPricing;
  context_window?: string;
  release_date?: string;
  documentation_url?: string;
  trending_percent: number;
  required_skills?: string[];
  github_url?: string;
  created_at: Date;
  updated_at: Date;
}

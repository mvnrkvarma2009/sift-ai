export type ToolPricing = 'free' | 'free_tier' | 'paid' | 'waitlist' | 'enterprise';

export interface Tool {
  id: string;
  name: string;
  category: string;
  pricing: ToolPricing;
  signup_required: boolean;
  free_tier_slide_limit?: number | null;
  free_tier_limits?: string | null;
  export_formats?: string[] | null;
  documentation_url?: string | null;
  trending_percent: number;
  created_at: Date;
  updated_at: Date;
}

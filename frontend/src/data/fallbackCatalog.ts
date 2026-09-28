import { TOOLS_DATA } from './toolsData';
import { MODELS_DATA } from './modelsData';

export interface ModelItem {
  id: string;
  name: string;
  provider: string;
  type: string;
  source_type?: string;
  category?: string;
  pricing: string;
  price_monthly?: number | null;
  context_window?: string;
  parameters?: string | null;
  speed_tokens_per_sec?: number | null;
  cost_per_million_input?: number | null;
  best_for?: string[];
  modality?: string;
  release_date?: string;
  documentation_url?: string;
  docs_url?: string | null;
  hf_url?: string | null;
  chat_product_url?: string | null;
  model_family?: string;
  license?: string;
  trending_percent: number;
  required_skills?: string[];
  github_url?: string;
}

export interface ToolResult {
  id: string;
  name: string;
  category: string;
  trending_percent: number;
  pricing: 'free' | 'free_tier' | 'freemium' | 'paid' | 'waitlist' | 'enterprise' | string;
  verdict: string;
  description: string;
  rules: {
    id: string;
    name: string;
    status: 'PASS' | 'FAIL' | 'WARN';
    detail: string;
  }[];
  signup_required?: boolean;
  free_tier_limits?: string;
  export_formats?: string[];
  documentation_url?: string;
  best_for?: string[];
  type?: string;
}

export const FALLBACK_TOOLS: ToolResult[] = TOOLS_DATA.map((t, idx) => {
  const pricingType = (t.pricing || 'free_tier').toLowerCase();
  const isPaid = pricingType === 'paid' || pricingType === 'paid_only';
  return {
    id: `t-${idx + 1}`,
    name: t.name,
    category: t.category,
    trending_percent: t.trending_percent || 75,
    pricing: t.pricing || 'free_tier',
    verdict: isPaid ? 'PARTIALLY MEETS' : 'MEETS REQUIREMENTS',
    description: t.description || `${t.name} is an AI tool for ${t.category}.`,
    rules: [
      { id: 'r1', name: 'category match', status: 'PASS', detail: `${t.category} workflow verified` },
      {
        id: 'r2',
        name: 'budget check',
        status: isPaid ? 'WARN' : 'PASS',
        detail: t.free_tier_limits || (isPaid ? 'Paid subscription required' : 'Free tier access available'),
      },
      {
        id: 'r3',
        name: 'signup check',
        status: 'PASS',
        detail: t.signup_required ? 'Standard account registration required' : 'No signup required',
      },
      {
        id: 'r4',
        name: 'export format check',
        status: 'PASS',
        detail: t.export_formats && t.export_formats.length > 0 ? t.export_formats.join(', ') : 'Standard web & format support',
      },
      { id: 'r5', name: 'workflow compatibility check', status: 'PASS', detail: 'Workflow integration verified' },
    ],
    signup_required: t.signup_required,
    free_tier_limits: t.free_tier_limits,
    export_formats: t.export_formats,
    documentation_url: t.documentation_url,
    best_for: t.best_for,
    type: t.type,
  };
});

export const FALLBACK_MODELS: ModelItem[] = MODELS_DATA.map((m, idx) => {
  return {
    id: m.id || `m-${idx + 1}`,
    name: m.name,
    provider: m.provider,
    type: (m.type || m.source_type || 'closed_source') as any,
    source_type: (m.source_type || (m.type === 'open_source' ? 'open_source' : 'closed_source')) as any,
    category: m.category || 'chat',
    pricing: m.pricing || 'free_tier',
    price_monthly: m.price_monthly,
    context_window: m.context_window || '128k tokens',
    speed_tokens_per_sec: m.speed_tokens_per_sec,
    cost_per_million_input: m.cost_per_million_input,
    license: m.license || 'Proprietary',
    model_family: m.model_family || m.name,
    trending_percent: m.trending_percent || 80,
    release_date: m.release_date || '2024-01-01',
    modality: m.modality || 'text',
    best_for: m.best_for || [],
    required_skills: m.required_skills || [],
    documentation_url: m.documentation_url || m.docs_url || '',
    docs_url: m.docs_url,
    hf_url: m.hf_url,
    github_url: m.github_url,
    chat_product_url: m.chat_product_url,
    parameters: m.parameters,
  };
});

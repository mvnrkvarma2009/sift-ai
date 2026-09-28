const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(/\/$/, '');

export interface FeedItem {
  id: string;
  category: 'AI' | 'Startups' | 'Tech' | 'Funding' | 'STARTUP';
  title?: string;
  headline?: string;
  summary: string;
  timestamp?: string;
  published_at?: string;
  source: string;
  source_url?: string;
  url?: string;
}

export interface RuleCheck {
  id?: string;
  rule_name?: string;
  name: string;
  status: 'PASS' | 'WARN' | 'FAIL' | 'FLAG';
  verdict?: 'PASS' | 'WARN' | 'FAIL' | 'FLAG';
  detail: string;
  reason?: string;
}

export interface ToolResult {
  id: string;
  name: string;
  category: string;
  pricing?: string;
  signup_required?: boolean;
  free_tier_limits?: string;
  export_formats?: string[];
  documentation_url?: string;
  trending_percent?: number;
  verdict: 'MEETS REQUIREMENTS' | 'PARTIALLY MEETS' | 'DOES NOT MEET' | 'MEETS_REQUIREMENTS' | 'PARTIALLY_MEETS' | 'DOES_NOT_MEET';
  description: string;
  rules: RuleCheck[];
}

export interface AuditData {
  tool: string;
  query: string;
  engineVersion: string;
  nonce?: string;
  executionTimeMs: number;
  signature: string;
  proofId: string;
  assertions: Array<{
    id: string;
    ruleId: string;
    description: string;
    status: 'PASS' | 'WARN' | 'FAIL';
  }>;
}

export const INITIAL_FEED_ITEMS: FeedItem[] = [
  {
    id: 'feed-1',
    category: 'AI',
    title: 'Mistral releases Large 2 with 128k context and native function calling',
    summary:
      'Benchmarked directly against GPT-4o with significant improvements in multilingual code synthesis and reasoning.',
    timestamp: '2h ago',
    source: 'ArXiv · mistral.ai',
  },
  {
    id: 'feed-2',
    category: 'Funding',
    title: 'Physical Intelligence raises $400M at $2.4B valuation from Bezos and Thrive',
    summary:
      'Developing foundation models for robotics and hardware automation across industrial applications.',
    timestamp: '3h ago',
    source: 'TechCrunch · PitchBook',
  },
  {
    id: 'feed-3',
    category: 'Startups',
    title: 'Harvey introduces automated contract generation and live docket sync',
    summary:
      'Expanding legal AI workflows with audited redlining and real-time court repository ingestion.',
    timestamp: '5h ago',
    source: 'PR Newswire',
  },
  {
    id: 'feed-4',
    category: 'Tech',
    title: 'Anthropic details computer-use safety mitigations and runtime sandbox isolation',
    summary:
      'Security protocols for autonomous tool execution, agentic browser navigation, and prompt injection defense.',
    timestamp: '7h ago',
    source: 'Anthropic Research',
  },
  {
    id: 'feed-5',
    category: 'AI',
    title: 'OpenAI announces structural changes ahead of expected non-profit governance shift',
    summary:
      'Corporate re-alignment aimed at securing larger debt facilities and compute partnerships.',
    timestamp: '9h ago',
    source: 'The Information',
  },
];

export const INITIAL_TOOLS: ToolResult[] = [
  {
    id: 'gamma',
    name: 'Gamma',
    category: 'Presentations · Deck & Doc Builder',
    trending_percent: 94,
    pricing: 'free_tier',
    verdict: 'MEETS REQUIREMENTS',
    description:
      'AI presentation tool with prompt-to-deck generation, real-time vector layout styling, and native PowerPoint export.',
    rules: [
      { id: 'r1', name: 'category match', status: 'PASS', detail: 'Presentation generation tool category verified' },
      { id: 'r2', name: 'budget check', status: 'PASS', detail: 'Includes 400 free AI compute credits on registration' },
      { id: 'r3', name: 'signup check', status: 'PASS', detail: 'Standard email signup supported' },
      { id: 'r4', name: 'export format check', status: 'PASS', detail: 'Full vector PowerPoint (.pptx) export supported' },
      { id: 'r5', name: 'slide count check', status: 'PASS', detail: 'Slide generation within free tier quota' },
    ],
  },
  {
    id: 'claude',
    name: 'Claude 3.5 Sonnet',
    category: 'Writing & Reasoning · Anthropic',
    trending_percent: 93,
    pricing: 'free_tier',
    verdict: 'MEETS REQUIREMENTS',
    description:
      'Leading frontier reasoning model renowned for nuanced, human-sounding long-form writing and code synthesis.',
    rules: [
      { id: 'r1', name: 'category match', status: 'PASS', detail: 'Writing and reasoning model category verified' },
      { id: 'r2', name: 'budget check', status: 'PASS', detail: 'Free tier available on web platform with daily quotas' },
      { id: 'r3', name: 'signup check', status: 'PASS', detail: 'Free account login verified' },
      { id: 'r4', name: 'export format check', status: 'PASS', detail: 'Markdown, text, and code export supported' },
      { id: 'r5', name: 'slide count check', status: 'PASS', detail: 'No restrictive slide limit applicable' },
    ],
  },
  {
    id: 'descript',
    name: 'Descript',
    category: 'Audio & Video · Transcription',
    trending_percent: 88,
    pricing: 'free_tier',
    verdict: 'MEETS REQUIREMENTS',
    description:
      'Text-based audio and video editor with automated high-accuracy transcription and studio sound enhancement.',
    rules: [
      { id: 'r1', name: 'category match', status: 'PASS', detail: 'Audio transcription and editing tool category verified' },
      { id: 'r2', name: 'budget check', status: 'PASS', detail: '1 free transcription hour per month without credit card' },
      { id: 'r3', name: 'signup check', status: 'PASS', detail: 'Account registration required' },
      { id: 'r4', name: 'export format check', status: 'PASS', detail: 'SRT, VTT, TXT, and DOCX formats natively available' },
      { id: 'r5', name: 'slide count check', status: 'PASS', detail: 'Transcription pipeline compatible' },
    ],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'Coding · AI Code Editor',
    trending_percent: 95,
    pricing: 'free_tier',
    verdict: 'MEETS REQUIREMENTS',
    description:
      'Fork of VS Code with deep agentic model integration, multi-file codebase edits, and native TypeScript syntax intelligence.',
    rules: [
      { id: 'r1', name: 'category match', status: 'PASS', detail: 'AI code editor and coding assistant category verified' },
      { id: 'r2', name: 'budget check', status: 'PASS', detail: 'Free Hobby tier with 2,000 monthly completions' },
      { id: 'r3', name: 'signup check', status: 'PASS', detail: 'Account authentication verified' },
      { id: 'r4', name: 'export format check', status: 'PASS', detail: 'Codebase files and diffs export verified' },
      { id: 'r5', name: 'slide count check', status: 'PASS', detail: 'Developer workspace compatible' },
    ],
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    category: 'Presentations · Smart Slides',
    trending_percent: 45,
    pricing: 'paid',
    verdict: 'DOES NOT MEET',
    description:
      'Template-driven presentation platform featuring smart automatic slide alignment and corporate branding controls.',
    rules: [
      { id: 'r1', name: 'category match', status: 'PASS', detail: 'Presentation platform category verified' },
      { id: 'r2', name: 'budget check', status: 'FAIL', detail: 'Paid-only tool; requires credit card for trial' },
      { id: 'r3', name: 'signup check', status: 'FAIL', detail: 'Requires billing details before canvas access' },
      { id: 'r4', name: 'export format check', status: 'PASS', detail: 'PPTX export available on paid tier' },
      { id: 'r5', name: 'slide count check', status: 'PASS', detail: 'Slide generation compatible' },
    ],
  },
];

export const INITIAL_AUDIT_DATA: AuditData = {
  tool: 'Cursor',
  query: 'I need a free coding assistant that works in VS Code and supports TypeScript.',
  engineVersion: 'SIFT-DETERMINISTIC-4.2',
  executionTimeMs: 418,
  signature: '7e2b83a04f691b01c37d0482029ff10091aa38914901f4c',
  proofId: 'SIFT-TR-20260328-9921',
  assertions: [
    { id: 'a1', ruleId: 'RULE_CATEGORY_MATCH', description: 'Category Match: Coding assistant detected and confirmed', status: 'PASS' },
    { id: 'a2', ruleId: 'RULE_ZERO_COST', description: 'Budget Check: Free tier active with 2,000 monthly completions', status: 'PASS' },
    { id: 'a3', ruleId: 'RULE_IDE_COMPATIBILITY', description: 'IDE Support: VS Code integration confirmed via extensions engine', status: 'PASS' },
    { id: 'a4', ruleId: 'RULE_LANG_TYPESCRIPT', description: 'Language Support: Native TypeScript compiler and AST support verified', status: 'PASS' },
  ],
};

// Aliases for backward compatibility
export type FeedArticle = FeedItem;
export const INITIAL_FEED_ARTICLES = INITIAL_FEED_ITEMS;
export const DEFAULT_QUERY_RESULT = INITIAL_TOOLS[0];

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || localStorage.getItem('sift_jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('sift_jwt');
      localStorage.removeItem('user');
      localStorage.removeItem('sift_user');
      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export { api };
export default api;

// API Client Helper using Axios instance
async function apiRequest<T>(endpoint: string, options: any = {}): Promise<T> {
  const method = (options.method || 'GET').toUpperCase();
  const url = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  let data = options.body;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch {
      // keep raw string
    }
  }

  const response = await api.request<T>({
    url,
    method,
    data,
    params: options.params,
    headers: options.headers,
  });

  return response.data;
}

// Auth API
export const authApi = {
  register: (name: string, email: string, password?: string) =>
    apiRequest<{ user: any; token: string }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password: password || 'Password123!' }),
    }),
  login: (email: string, password?: string) =>
    apiRequest<{ user: any; token: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password: password || 'Password123!' }),
    }),
  getMe: () => apiRequest<{ user: any }>('/api/auth/me'),
};

// Feed API
export const feedApi = {
  getFeed: (category?: string, search?: string) => {
    const params = new URLSearchParams();
    if (category && category !== 'ALL') params.set('category', category);
    if (search) params.set('search', search);
    return apiRequest<{ items: FeedItem[]; total: number }>(`/api/feed?${params.toString()}`);
  },
  createItem: (item: Partial<FeedItem>) =>
    apiRequest<{ item: FeedItem }>('/api/feed', {
      method: 'POST',
      body: JSON.stringify(item),
    }),
  refresh: () =>
    apiRequest<{ message: string; news_added: number; tools_added: number; timestamp: string }>('/api/admin/refresh', {
      method: 'POST',
    }),
};

// Tools API
export const toolsApi = {
  getTools: (category?: string, search?: string, sort = 'trending', limit?: number, offset?: number) => {
    const params = new URLSearchParams();
    if (category && category !== 'All' && category !== 'all') params.set('category', category);
    if (search) params.set('search', search);
    if (sort) params.set('sort', sort);
    if (limit !== undefined) params.set('limit', String(limit));
    if (offset !== undefined) params.set('offset', String(offset));
    return apiRequest<{ tools: any[]; total: number }>(`/api/tools?${params.toString()}`);
  },
  getTrending: () => apiRequest<{ trending: any[] }>('/api/tools/trending'),
  getStats: () =>
    apiRequest<{ total: number; breakdown: Record<string, number>; pricing: Record<string, number> }>('/api/tools/stats'),
  getById: (id: string) => apiRequest<{ tool: any }>(`/api/tools/${id}`),
};

// Queries API
export const queriesApi = {
  submitQuery: (raw_description: string) =>
    apiRequest<any>('/api/queries', {
      method: 'POST',
      body: JSON.stringify({ raw_description }),
    }),
  getUserQueries: () => apiRequest<{ queries: any[] }>('/api/queries'),
  getById: (id: string) => apiRequest<any>(`/api/queries/${id}`),
};

// Audit API
export const auditApi = {
  getAuditLogs: () => apiRequest<{ audit_logs: any[]; total: number }>('/api/audit'),
  getQueryTrail: (queryId: string) => apiRequest<{ query_id: string; events: any[] }>(`/api/audit/${queryId}`),
};

// Dashboard API
export const dashboardApi = {
  getStats: () => apiRequest<any>('/api/dashboard/stats'),
};

// TimeAgo utility for relative timestamps
export function timeAgo(date: any): string {
  if (!date) return 'just now';
  let d: Date;
  if (typeof date === 'object') {
    if (date instanceof Date) {
      d = date;
    } else if (date.seconds) {
      d = new Date(date.seconds * 1000);
    } else if (date._seconds) {
      d = new Date(date._seconds * 1000);
    } else if (typeof date.toString === 'function' && date.toString() !== '[object Object]') {
      d = new Date(date.toString());
    } else {
      return 'recently';
    }
  } else {
    d = new Date(date);
  }
  if (isNaN(d.getTime())) {
    if (typeof date === 'string' && date.includes('ago')) return date;
    return 'recently';
  }
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 48) return `${hours}h ago`;

  // If item is more than 48 hours old, prefix with date: "Sep 26 · 2:30 PM"
  const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const timeStr = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return `${monthDay} · ${timeStr}`;
}

// Admin API
export const adminApi = {
  refresh: () =>
    apiRequest<{ message: string; news_added: number; tools_added: number; timestamp: string }>('/api/admin/refresh', {
      method: 'POST',
    }),
};

// Models API
export interface ModelItem {
  id: string;
  name: string;
  provider: string;
  type: 'chat' | 'image' | 'video' | 'audio' | 'code' | 'music' | 'multimodal' | 'closed_source' | 'open_source' | string;
  source_type?: 'closed_source' | 'open_source';
  category?: string;
  pricing: 'free' | 'free_tier' | 'paid_only' | 'paid_hosting' | 'free_local' | 'waitlist' | 'enterprise' | string;
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

export const modelsApi = {
  getModels: (
    type?: string,
    pricing?: string,
    search?: string,
    sort = 'trending',
    limit?: number,
    offset?: number,
    source_type?: string,
    provider?: string,
    category?: string
  ) => {
    const params = new URLSearchParams();
    if (type && type !== 'all') params.set('type', type);
    if (source_type && source_type !== 'all') params.set('source_type', source_type);
    if (category && category !== 'all') params.set('category', category);
    if (pricing && pricing !== 'all') params.set('pricing', pricing);
    if (provider && provider !== 'all') params.set('provider', provider);
    if (search) params.set('search', search);
    if (sort) params.set('sort', sort);
    if (limit !== undefined) params.set('limit', String(limit));
    if (offset !== undefined) params.set('offset', String(offset));
    return apiRequest<{ models: ModelItem[]; total: number; limit: number; offset: number }>(`/api/models?${params.toString()}`);
  },
  getTrending: (limit = 10) => apiRequest<{ trending: ModelItem[] }>(`/api/models/trending?limit=${limit}`),
  getTop: (limit = 4) => apiRequest<{ models: ModelItem[] }>(`/api/models/top?limit=${limit}`),
  getStats: () =>
    apiRequest<{
      total: number;
      breakdown: Record<string, number>;
      types: Record<string, number>;
      pricing: Record<string, number>;
    }>('/api/models/stats'),
  getById: (id: string) => apiRequest<{ model: ModelItem }>(`/api/models/${id}`),
};

// Saved API (Upgrade 1)
export interface SavedItem {
  id: string;
  user_id: string;
  item_type: 'tool' | 'model' | 'feed';
  item_id: string;
  created_at: string;
  item?: any;
}

export const savedApi = {
  getSaved: () =>
    apiRequest<{ saved: SavedItem[]; counts: { all: number; tools: number; models: number; feed: number } }>(
      '/api/saved'
    ),
  toggleSave: (item_type: 'tool' | 'model' | 'feed', item_id: string) =>
    apiRequest<{ saved: boolean; item?: SavedItem }>('/api/saved', {
      method: 'POST',
      body: JSON.stringify({ item_type, item_id }),
    }),
  removeSaved: (id: string) =>
    apiRequest<{ success: boolean; message: string }>(`/api/saved/${id}`, {
      method: 'DELETE',
    }),
};

// Notifications API
export interface NotificationItem {
  id: string;
  user_id: string;
  type: string;
  title: string;
  body: string | null;
  link_url: string | null;
  read_at: string | null;
  created_at: string;
}

export const notificationsApi = {
  getNotifications: (limit = 50) =>
    apiRequest<{ notifications: NotificationItem[]; total: number }>(`/api/notifications?limit=${limit}`),
  getUnreadCount: () => apiRequest<{ count: number }>('/api/notifications/unread-count'),
  markAsRead: (id: string) =>
    apiRequest<{ success: boolean; id: string }>(`/api/notifications/${id}/read`, {
      method: 'PATCH',
    }),
  markAllAsRead: () =>
    apiRequest<{ success: boolean; updated: number }>('/api/notifications/read-all', {
      method: 'PATCH',
    }),
  deleteNotification: (id: string) =>
    apiRequest<{ success: boolean; id: string }>(`/api/notifications/${id}`, {
      method: 'DELETE',
    }),
  clearAll: () =>
    apiRequest<{ success: boolean; deleted: number }>('/api/notifications', {
      method: 'DELETE',
    }),
};


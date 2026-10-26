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

// Aliases for backward compatibility
export type FeedArticle = FeedItem;

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
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
  getNotifications: async (limit = 50) => {
    const res = await apiRequest<any>(`/api/notifications?limit=${limit}`);
    const list = Array.isArray(res) ? res : (res?.notifications || []);
    return { notifications: list, total: list.length };
  },
  getUnreadCount: async () => {
    const res = await apiRequest<any>('/api/notifications/unread-count');
    if (typeof res === 'number') return { count: res };
    return { count: res?.count ?? 0 };
  },
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


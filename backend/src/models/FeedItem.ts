export type FeedCategory = 'AI' | 'STARTUP' | 'TECH' | 'FUNDING';

export interface FeedItem {
  id: string;
  user_id?: string | null;
  category: FeedCategory;
  headline: string;
  summary?: string | null;
  source?: string | null;
  source_url?: string | null;
  published_at?: Date | null;
  created_at: Date;
}

import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, RefreshCw, CheckCircle2, Sparkles } from 'lucide-react';
import { FeedItem, feedApi, adminApi, timeAgo, savedApi } from '../../lib/api';
import { FeedCard } from './FeedCard';
import { QueryInput } from './QueryInput';
import { useNavigate } from 'react-router-dom';

export const FeedList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'AI' | 'Startups' | 'Tech' | 'Funding'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<FeedItem[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshToast, setRefreshToast] = useState<{ message: string; showRefreshLink?: boolean } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [minAgo, setMinAgo] = useState(0);

  const [bookmarkedArticles, setBookmarkedArticles] = useState<Record<string, boolean>>({});

  const navigate = useNavigate();

  // Load saved bookmarks from server
  useEffect(() => {
    savedApi.getSaved()
      .then((res) => {
        if (res.saved) {
          const feedSaved = res.saved.filter((s) => s.item_type === 'feed');
          const map: Record<string, boolean> = {};
          feedSaved.forEach((s) => {
            map[s.item_id] = true;
          });
          setBookmarkedArticles(map);
        }
      })
      .catch(() => {});
  }, []);

  // Update "Updated X min ago" timer
  useEffect(() => {
    const timer = setInterval(() => {
      const mins = Math.floor((Date.now() - lastUpdated.getTime()) / 60000);
      setMinAgo(mins);
    }, 30000);
    return () => clearInterval(timer);
  }, [lastUpdated]);

  const loadFeed = async (checkNew = false) => {
    try {
      const data = await feedApi.getFeed();
      if (data && data.items) {
        if (checkNew && data.items.length > items.length && items.length > 0) {
          const diff = data.items.length - items.length;
          setRefreshToast({
            message: `${diff} new ${diff === 1 ? 'item' : 'items'} available`,
            showRefreshLink: true,
          });
        }
        const mapped = data.items.map((it: any) => ({
          id: it.id,
          category: it.category === 'STARTUP' ? 'Startups' : it.category,
          title: it.headline || it.title || 'Intelligence Brief',
          summary: it.summary || '',
          source: it.source || 'Sift Intelligence',
          published_at: it.published_at,
          timestamp: it.published_at ? timeAgo(it.published_at) : 'just now',
          url: it.source_url || it.url,
        }));
        setItems(mapped);
        setLastUpdated(new Date());
        setMinAgo(0);
      }
    } catch (err) {
      console.warn('[FEED] Fetch notice:', err);
    }
  };

  useEffect(() => {
    loadFeed();

    // Auto-refresh feed every 5 minutes
    const interval = setInterval(() => {
      loadFeed(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRefreshNow = async () => {
    setIsRefreshing(true);
    try {
      await adminApi.refresh().catch(() => {});
      await feedApi.refresh().catch(() => {});
      await loadFeed();
      setRefreshToast({ message: 'Feed updated successfully' });
    } catch (err: any) {
      await loadFeed();
      setRefreshToast({ message: 'Feed updated' });
    } finally {
      setIsRefreshing(false);
      setTimeout(() => setRefreshToast(null), 4000);
    }
  };

  const toggleBookmark = async (id: string) => {
    const nextState = !bookmarkedArticles[id];
    setBookmarkedArticles((prev) => ({ ...prev, [id]: nextState }));
    try {
      await savedApi.toggleSave('feed', id);
    } catch (e) {
      console.error(e);
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const itemTitle = item.title || item.headline || '';
      const itemSummary = item.summary || '';
      const matchesTab =
        activeTab === 'All'
          ? true
          : activeTab === 'Startups'
          ? item.category.toLowerCase().includes('startup')
          : item.category.toLowerCase() === activeTab.toLowerCase();

      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : itemTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            itemSummary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [items, activeTab, searchQuery]);

  return (
    <div className="p-6 lg:p-10 max-w-[840px] mx-auto w-full relative">
      {/* Subtle Toast with Refresh link */}
      {refreshToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-surface-card border border-accent-indigo shadow-2xl px-4 py-3 rounded-lg text-text-primary text-[12px] font-mono animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{refreshToast.message}</span>
          {refreshToast.showRefreshLink && (
            <button
              onClick={handleRefreshNow}
              className="ml-2 font-semibold text-accent-indigo hover:underline cursor-pointer"
            >
              Refresh
            </button>
          )}
        </div>
      )}

      {/* Top Editorial Header Bar with LIVE Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border-hairline gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-[32px] font-semibold tracking-tight text-text-primary">Today</h1>

          {/* Subtle LIVE Indicator: green dot + Updated X min ago */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-card border border-border-hairline">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-semibold text-emerald-500 uppercase tracking-wider">LIVE</span>
            <span className="text-text-muted text-[10px]">·</span>
            <span className="font-mono text-[11px] text-text-muted">
              Updated {minAgo < 1 ? 'just now' : `${minAgo} min ago`}
            </span>
          </div>

          <button
            onClick={handleRefreshNow}
            disabled={isRefreshing}
            aria-label="Refresh feed"
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md border border-border-hairline bg-surface-card text-text-secondary hover:text-text-primary hover:border-accent-indigo transition-all cursor-pointer disabled:opacity-50"
            title="Refresh feed with latest intelligence"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-accent-indigo' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-[260px]">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search news, tools, startups"
              className="w-full h-9 pl-9 pr-3 bg-surface-card border border-border-hairline rounded-lg text-[12px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-indigo transition-all"
              placeholder="Search news, tools, startups..."
              type="text"
            />
            <Search className="absolute left-2.5 top-2.5 text-text-muted w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Filter Bar */}
      <nav className="flex items-center gap-8 pt-4 pb-2 border-b border-border-hairline overflow-x-auto">
        {(['All', 'AI', 'Startups', 'Tech', 'Funding'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-label={`Show ${tab} category`}
            className={`relative pb-3 text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? 'text-text-primary tracking-normal font-semibold'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-indigo" />
            )}
          </button>
        ))}
      </nav>

      {/* Query Input Block Above Feed */}
      <div className="pt-6 pb-2">
        <QueryInput />
      </div>

      {/* Articles Feed */}
      <div className="mt-6 flex flex-col border-t border-border-hairline">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FeedCard
              key={item.id}
              item={item}
              isBookmarked={!!bookmarkedArticles[item.id]}
              onToggleBookmark={toggleBookmark}
            />
          ))
        ) : (
          <div className="py-20 text-center text-text-muted font-mono text-[13px]">
            No feed items found. Checking for live updates...
          </div>
        )}
      </div>
    </div>
  );
};

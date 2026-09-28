import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Bookmark, Loader2, Layers, Wrench, Cpu, Newspaper } from 'lucide-react';
import { savedApi, SavedItem, timeAgo } from '../lib/api';
import { ToolCard } from '../components/tools/ToolCard';
import { ModelCard } from '../components/models/ModelCard';
import { FeedCard } from '../components/dashboard/FeedCard';
import { Link, useSearchParams } from 'react-router-dom';

type SavedTab = 'tools' | 'models' | 'feed';

export const SavedPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = (searchParams.get('tab') as SavedTab) || null;
  const [activeTab, setActiveTab] = useState<SavedTab>(tabParam || 'tools');
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSaved = async () => {
    try {
      setLoading(true);
      const res = await savedApi.getSaved();
      const apiSaved = res.saved || [];
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      const combined = [...apiSaved];
      for (const loc of local) {
        if (!combined.some((c) => c.item_type === loc.item_type && String(c.item_id) === String(loc.item_id))) {
          combined.push(loc);
        }
      }
      setSavedItems(combined);
      if (!tabParam) {
        const toolsCount = combined.filter((s) => s.item_type === 'tool').length;
        const modelsCount = combined.filter((s) => s.item_type === 'model').length;
        if (toolsCount === 0 && modelsCount > 0) {
          setActiveTab('models');
        }
      }
    } catch (err) {
      console.warn('[SAVED] Failed to load saved items:', err);
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      setSavedItems(local);
      if (!tabParam) {
        const toolsCount = local.filter((s: any) => s.item_type === 'tool').length;
        const modelsCount = local.filter((s: any) => s.item_type === 'model').length;
        if (toolsCount === 0 && modelsCount > 0) {
          setActiveTab('models');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  const savedTools = savedItems.filter((s) => s.item_type === 'tool');
  const savedModels = savedItems.filter((s) => s.item_type === 'model');
  const savedFeed = savedItems.filter((s) => s.item_type === 'feed');

  const handleToggleFeedBookmark = async (id: string) => {
    try {
      await savedApi.toggleSave('feed', id);
      setSavedItems((prev) => prev.filter((s) => !(s.item_type === 'feed' && s.item_id === id)));
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      const updated = local.filter((item: any) => !(item.item_type === 'feed' && item.item_id === id));
      localStorage.setItem('sift_saved_items', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout showSidebar>
      <div className="p-6 lg:p-10 max-w-[1520px] mx-auto w-full space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-border-hairline">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <Bookmark className="w-5 h-5 text-accent-indigo" />
              <h1 className="font-serif text-[28px] sm:text-[32px] font-normal text-text-primary tracking-tight">
                Saved Items
              </h1>
            </div>
            <p className="text-[13px] sm:text-[14px] text-text-muted">
              Your bookmarked models, handpicked tools, and feed updates.
            </p>
          </div>

          <span className="font-mono text-[11px] text-text-muted">
            {savedItems.length} TOTAL SAVED
          </span>
        </div>

        {/* 3 Tabs */}
        <div className="flex items-center gap-2 border-b border-border-hairline pb-2">
          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-accent-indigo text-white font-medium shadow-sm'
                : 'bg-surface-card text-text-muted hover:text-text-primary border border-border-hairline hover:bg-surface-elevated'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Tools</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {savedTools.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('models')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
              activeTab === 'models'
                ? 'bg-accent-indigo text-white font-medium shadow-sm'
                : 'bg-surface-card text-text-muted hover:text-text-primary border border-border-hairline hover:bg-surface-elevated'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Models</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {savedModels.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('feed')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
              activeTab === 'feed'
                ? 'bg-accent-indigo text-white font-medium shadow-sm'
                : 'bg-surface-card text-text-muted hover:text-text-primary border border-border-hairline hover:bg-surface-elevated'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>Feed</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {savedFeed.length}
            </span>
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="py-24 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-6 h-6 animate-spin text-accent-indigo" />
            <p className="text-[13px] font-mono text-text-muted">Loading saved items...</p>
          </div>
        ) : activeTab === 'tools' ? (
          savedTools.length === 0 ? (
            <div className="py-20 text-center rounded-xl bg-surface-card border border-border-hairline p-8 max-w-md mx-auto space-y-3">
              <Wrench className="w-8 h-8 text-text-muted mx-auto opacity-50" />
              <h3 className="text-[16px] font-medium text-text-primary">No saved tools yet</h3>
              <p className="text-[13px] text-text-muted">
                Click the bookmark icon on any tool card in the tools directory to save it here.
              </p>
              <Link
                to="/tools"
                className="mt-2 inline-block px-3.5 py-1.5 rounded-lg bg-accent-indigo text-white text-[12px] font-mono font-medium hover:bg-accent-indigo/90"
              >
                Browse Tools
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedTools.map((s) => (
                <ToolCard
                  key={s.id}
                  tool={s.item || { name: s.item_id, category: 'Tool' }}
                  isSavedInitial={true}
                />
              ))}
            </div>
          )
        ) : activeTab === 'models' ? (
          savedModels.length === 0 ? (
            <div className="py-20 text-center rounded-xl bg-surface-card border border-border-hairline p-8 max-w-md mx-auto space-y-3">
              <Cpu className="w-8 h-8 text-text-muted mx-auto opacity-50" />
              <h3 className="text-[16px] font-medium text-text-primary">No saved models yet</h3>
              <p className="text-[13px] text-text-muted">
                Click the bookmark icon on any open source model to save it here.
              </p>
              <Link
                to="/models"
                className="mt-2 inline-block px-3.5 py-1.5 rounded-lg bg-accent-indigo text-white text-[12px] font-mono font-medium hover:bg-accent-indigo/90"
              >
                Browse Open Source Models
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {savedModels.map((s) => (
                <ModelCard
                  key={s.id}
                  model={s.item || { id: s.item_id, name: s.item_id, provider: 'Open Source' }}
                  isSavedInitial={true}
                />
              ))}
            </div>
          )
        ) : (
          savedFeed.length === 0 ? (
            <div className="py-20 text-center rounded-xl bg-surface-card border border-border-hairline p-8 max-w-md mx-auto space-y-3">
              <Newspaper className="w-8 h-8 text-text-muted mx-auto opacity-50" />
              <h3 className="text-[16px] font-medium text-text-primary">No saved articles yet</h3>
              <p className="text-[13px] text-text-muted">
                Save intelligence briefs from the live feed to revisit them later.
              </p>
              <Link
                to="/dashboard"
                className="mt-2 inline-block px-3.5 py-1.5 rounded-lg bg-accent-indigo text-white text-[12px] font-mono font-medium hover:bg-accent-indigo/90"
              >
                Go to Feed
              </Link>
            </div>
          ) : (
            <div className="max-w-[820px] mx-auto border-t border-border-hairline">
              {savedFeed.map((s) => (
                <FeedCard
                  key={s.id}
                  item={
                    s.item || {
                      id: s.item_id,
                      category: 'AI',
                      title: 'Saved Brief',
                      summary: 'Bookmarked from intelligence feed.',
                      source: 'Sift',
                      published_at: s.created_at,
                    }
                  }
                  isBookmarked={true}
                  onToggleBookmark={handleToggleFeedBookmark}
                />
              ))}
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Search, Loader2, ArrowRight } from 'lucide-react';
import { toolsApi } from '../lib/api';
import { ToolCard } from '../components/tools/ToolCard';
import { useNavigate } from 'react-router-dom';

// 8 Clean Categories Only
const CATEGORIES = [
  'All',
  'Coding',
  'Writing',
  'Chat',
  'Research',
  'Image',
  'Video',
  'Audio',
  'Presentations',
] as const;

type SortOption = 'trending' | 'name' | 'pricing' | 'newest';

const PAGE_SIZE = 24;

export const ToolsPage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('trending');
  const [tools, setTools] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  // Compare state (2-4 tools)
  const [compareIds, setCompareIds] = useState<string[]>([]);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 250);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetch initial tools whenever filter/sort/search changes
  useEffect(() => {
    let isCancelled = false;

    async function loadInitialTools() {
      setLoading(true);
      try {
        const cat = selectedCategory === 'All' ? undefined : selectedCategory;
        const res = await toolsApi.getTools(cat, debouncedSearch || undefined, sortBy, PAGE_SIZE, 0);
        if (!isCancelled) {
          setTools(res.tools || []);
          setTotal(res.total || 0);
        }
      } catch (err) {
        if (!isCancelled) {
          setTools([]);
          setTotal(0);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadInitialTools();
    return () => {
      isCancelled = true;
    };
  }, [selectedCategory, debouncedSearch, sortBy]);

  // Load More Tools
  const handleLoadMore = async () => {
    if (loadingMore || tools.length >= total) return;
    setLoadingMore(true);
    try {
      const cat = selectedCategory === 'All' ? undefined : selectedCategory;
      const res = await toolsApi.getTools(cat, debouncedSearch || undefined, sortBy, PAGE_SIZE, tools.length);
      if (res && res.tools) {
        setTools((prev) => [...prev, ...res.tools]);
        setTotal(res.total || 0);
      }
    } catch (err) {
      console.warn('[TOOLS] Failed to load more tools:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleToggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const isCompareMaxed = compareIds.length >= 4;

  return (
    <Layout showSidebar>
      <div className="p-6 lg:p-10 max-w-[1520px] mx-auto w-full space-y-6">
        {/* Header Bar: "200 tools, handpicked." */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-border-hairline">
          <div>
            <h1 className="font-serif text-[28px] sm:text-[32px] font-normal text-text-primary tracking-tight">
              {total > 0 ? `${total.toLocaleString()} tools, handpicked.` : '1,000+ tools, handpicked.'}
            </h1>
            <p className="text-[13px] sm:text-[14px] text-text-muted mt-1">
              Curated, deterministic AI software audited across 8 essential workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools or features..."
                className="w-full h-9 pl-9 pr-3 bg-surface-card border border-border-hairline rounded-lg text-[12px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-indigo transition-colors"
              />
              <Search className="w-4 h-4 text-text-muted absolute left-2.5 top-2.5" />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-9 px-3 bg-surface-card border border-border-hairline rounded-lg text-[12px] text-text-secondary focus:outline-none cursor-pointer"
            >
              <option value="trending">Trending</option>
              <option value="name">A–Z</option>
              <option value="pricing">Pricing (Free first)</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* 8 Categories Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 border-b border-border-hairline">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent-indigo text-white font-medium shadow-sm'
                    : 'bg-surface-card text-text-muted hover:text-text-primary border border-border-hairline hover:bg-surface-elevated'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        {loading ? (
          <div className="py-24 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-6 h-6 animate-spin text-accent-indigo" />
            <p className="text-[13px] font-mono text-text-muted">Loading audited tools...</p>
          </div>
        ) : tools.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <p className="text-[15px] font-medium text-text-primary">No tools found</p>
            <p className="text-[13px] text-text-muted max-w-sm">
              No audited tools match your filter. Try selecting another category or clearing your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearch('');
              }}
              className="mt-2 px-3 py-1.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-elevated text-[12px] font-mono text-accent-indigo"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.id || tool.name}
                  tool={tool}
                  isSelectedForCompare={compareIds.includes(tool.id || tool.name)}
                  onToggleCompare={handleToggleCompare}
                  disableCompare={isCompareMaxed}
                />
              ))}
            </div>

            {/* Load More Button */}
            {tools.length < total && (
              <div className="pt-4 pb-12 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-6 py-2.5 rounded-xl border border-border-hairline bg-surface-card hover:bg-surface-elevated text-[13px] font-mono text-text-primary hover:border-accent-indigo transition-all cursor-pointer flex items-center gap-2"
                >
                  {loadingMore ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-accent-indigo" />
                      <span>Loading more tools...</span>
                    </>
                  ) : (
                    <span>
                      Load more tools ({tools.length} of {total})
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Floating Compare Bar (Upgrade 2) */}
        {compareIds.length >= 2 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-surface-card/95 border border-accent-indigo/40 shadow-2xl backdrop-blur-md">
              <span className="text-[13px] font-medium text-text-primary">
                Compare {compareIds.length} tools
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCompareIds([])}
                  className="text-[12px] font-mono text-text-muted hover:text-text-primary px-2 py-1 transition-colors cursor-pointer"
                >
                  Clear
                </button>
                <button
                  onClick={() => navigate(`/tools/compare?ids=${compareIds.join(',')}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-indigo text-white text-[12px] font-medium hover:bg-accent-indigo/90 transition-all cursor-pointer shadow-sm hover:gap-2"
                >
                  <span>Compare now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

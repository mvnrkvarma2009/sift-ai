import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Search, SearchX, Loader2, ArrowRight } from 'lucide-react';
import { modelsApi, ModelItem } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { ModelCard } from '../components/models/ModelCard';

// Type filter tabs (Section C)
const TYPE_TABS = [
  { id: 'all', label: 'All' },
  { id: 'closed_source', label: 'Closed Source' },
  { id: 'open_source', label: 'Open Source' },
];

// Category pills (Section C)
const CATEGORY_PILLS = [
  { id: 'all', label: 'All' },
  { id: 'chat', label: 'Chat' },
  { id: 'code', label: 'Code' },
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'audio', label: 'Audio' },
  { id: 'multimodal', label: 'Multimodal' },
];

export const ModelsPage: React.FC = () => {
  const navigate = useNavigate();

  // Filter States
  const [selectedType, setSelectedType] = useState<string>('all'); // all, closed_source, open_source
  const [selectedCategory, setSelectedCategory] = useState<string>('all'); // all, chat, code, etc.
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  // Data States
  const [models, setModels] = useState<ModelItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // Compare State (2-4 models)
  const [compareIds, setCompareIds] = useState<string[]>([]);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 250);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetch All Models with filters applied
  useEffect(() => {
    let isCancelled = false;

    async function loadFilteredModels() {
      setLoading(true);
      try {
        const typeFilter = selectedType === 'all' ? undefined : selectedType;
        const categoryFilter = selectedCategory === 'all' ? undefined : selectedCategory;
        const res = await modelsApi.getModels(
          typeFilter,
          undefined, // pricing
          debouncedSearch || undefined,
          'default',
          150, // limit
          0, // offset
          typeFilter, // source_type
          undefined, // provider
          categoryFilter // category
        );
        if (!isCancelled) {
          setModels(res.models || []);
          setTotal(res.total || 0);
        }
      } catch (err) {
        console.error('[MODELS] Failed to fetch models:', err);
        if (!isCancelled) {
          setModels([]);
          setTotal(0);
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadFilteredModels();
    return () => {
      isCancelled = true;
    };
  }, [selectedType, selectedCategory, debouncedSearch]);

  // Toggle compare selection
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

  const handleGoToCompare = () => {
    if (compareIds.length >= 2) {
      navigate(`/models/compare?ids=${compareIds.join(',')}`);
    }
  };

  return (
    <Layout showSidebar>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-12">
        {/* SECTION A — Header */}
        <div className="space-y-2">
          <h1 className="font-serif text-[32px] sm:text-[36px] font-normal text-text-primary tracking-tight">
            The complete model landscape.
          </h1>
          <p className="text-[16px] text-text-muted">
            Every major AI model. Open source to closed source. {total > 0 ? `${total.toLocaleString()} models indexed.` : '500+ models indexed.'}
          </p>
        </div>

        {/* SECTION B — Explanation cards (two columns, hairline borders, 24px padding) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT CARD (closed source) */}
          <div className="p-6 rounded-2xl bg-surface-card border border-border-hairline flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-colors">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold block">
                CLOSED SOURCE
              </span>
              <h2 className="text-[20px] font-medium text-text-primary font-sans">
                Pay per use. No download.
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                OpenAI, Anthropic, Google. You pay monthly or per token. No hardware needed.
              </p>
            </div>
            <div className="pt-3 border-t border-border-hairline/60">
              <p className="text-[13px] font-mono text-amber-400/90 font-medium">
                Best for: apps without servers
              </p>
            </div>
          </div>

          {/* RIGHT CARD (open source) */}
          <div className="p-6 rounded-2xl bg-surface-card border border-border-hairline flex flex-col justify-between space-y-4 hover:border-teal-500/30 transition-colors">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-teal-400 font-semibold block">
                OPEN SOURCE
              </span>
              <h2 className="text-[20px] font-medium text-text-primary font-sans">
                Download and run it yourself.
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Meta, Alibaba, DeepSeek. Free weights. You provide the GPU. Full control.
              </p>
            </div>
            <div className="pt-3 border-t border-border-hairline/60">
              <p className="text-[13px] font-mono text-teal-400/90 font-medium">
                Best for: privacy and control
              </p>
            </div>
          </div>
        </div>

        {/* SECTION C & SECTION E — Filter row & All models grid */}
        <div className="space-y-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted font-medium block">
              ALL MODELS
            </span>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
              <h2 className="font-serif text-[24px] font-normal text-text-primary tracking-tight">
                Explore the complete AI roster.
              </h2>
              <span className="font-mono text-[12px] text-text-muted">
                {loading ? 'Scanning catalog...' : `${total} models available`}
              </span>
            </div>
          </div>

          {/* Filter row: Type tabs, Category pills, Search input */}
          <div className="p-4 rounded-xl bg-surface-card border border-border-hairline space-y-4">
            {/* Type tabs + Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Type tabs: All · Closed Source · Open Source */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-elevated border border-border-hairline w-fit">
                {TYPE_TABS.map((tab) => {
                  const active = selectedType === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedType(tab.id)}
                      className={`px-3 py-1.5 rounded-md text-[12px] font-mono transition-colors cursor-pointer ${
                        active
                          ? 'bg-accent-indigo text-white font-medium shadow-sm'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Search input: Search models or providers... */}
              <div className="relative flex-1 sm:max-w-xs">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search models or providers..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-border-hairline bg-surface-base text-[13px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-indigo"
                />
              </div>
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[12px] font-sans">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider mr-1 shrink-0">
                CATEGORY:
              </span>
              {CATEGORY_PILLS.map((pill) => {
                const active = selectedCategory === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedCategory(pill.id)}
                    className={`px-3 py-1 rounded-full text-[12px] transition-colors shrink-0 cursor-pointer ${
                      active
                        ? 'bg-surface-elevated text-text-primary border border-accent-indigo font-medium'
                        : 'border border-border-hairline text-text-muted hover:text-text-primary hover:border-border-hairline'
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Models Grid: 4 columns desktop, 3 tablet, 1 mobile */}
          {loading ? (
            <div className="p-16 text-center flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-6 h-6 animate-spin text-accent-indigo" />
              <span className="font-mono text-[13px] text-text-muted">Loading models...</span>
            </div>
          ) : models.length === 0 ? (
            <div className="p-16 text-center rounded-xl bg-surface-card border border-border-hairline space-y-3">
              <SearchX className="w-8 h-8 text-text-muted mx-auto" />
              <p className="text-[15px] font-medium text-text-primary">No models match your filter</p>
              <p className="text-[13px] text-text-muted">
                Try resetting your search query or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedCategory('all');
                  setSearch('');
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-surface-elevated text-accent-indigo text-[12px] font-mono border border-border-hairline hover:bg-accent-indigo hover:text-white transition-colors"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {models.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  isSelectedForCompare={compareIds.includes(model.id)}
                  onToggleCompare={handleToggleCompare}
                  disableCompare={compareIds.length >= 4}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating Compare Bar */}
        {compareIds.length >= 2 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-surface-card border border-accent-indigo/60 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="text-[13px] font-mono">
              <span className="text-text-primary font-medium">{compareIds.length} of 4</span>
              <span className="text-text-muted"> models selected</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCompareIds([])}
                className="px-2.5 py-1 text-[11px] font-mono text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                Clear
              </button>
              <button
                onClick={handleGoToCompare}
                className="px-4 py-1.5 rounded-lg bg-accent-indigo text-white font-mono text-[12px] font-medium hover:bg-accent-indigo/90 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Compare {compareIds.length} models</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

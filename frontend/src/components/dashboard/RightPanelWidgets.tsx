import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { queriesApi, modelsApi, ModelItem } from '../../lib/api';
import { History, Sparkles, TrendingUp } from 'lucide-react';

interface RecentQuery {
  id: string;
  raw_description?: string;
  description?: string;
  meets_count?: number;
  partial_count?: number;
  verification_count?: number;
  created_at?: string;
}

export const RightPanelWidgets: React.FC = () => {
  const [queries, setQueries] = useState<RecentQuery[]>([]);
  const [trendingModels, setTrendingModels] = useState<ModelItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const [qRes, topRes] = await Promise.allSettled([
          queriesApi.getUserQueries(),
          modelsApi.getTop(3),
        ]);

        if (isMounted) {
          if (qRes.status === 'fulfilled' && qRes.value && Array.isArray(qRes.value.queries)) {
            setQueries(qRes.value.queries.slice(0, 3));
          }
          if (topRes.status === 'fulfilled' && topRes.value && Array.isArray(topRes.value.models)) {
            setTrendingModels(topRes.value.models.slice(0, 3));
          }
        }
      } catch (err) {
        if (isMounted) setQueries([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  const quickTasks = [
    { label: 'Find a coding assistant →', task: 'coding' },
    { label: 'Find a writing tool →', task: 'writing' },
    { label: 'Find a video editor →', task: 'video' },
    { label: 'Find a research tool →', task: 'research' },
  ];

  const truncate = (text: string, max = 40) => {
    if (!text) return '';
    return text.length > max ? `${text.slice(0, max)}…` : text;
  };

  return (
    <div className="space-y-6">
      {/* UPGRADE 3: FEATURED MODELS (Above Your Recent Queries) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-accent-indigo" />
            FEATURED MODELS
          </p>
        </div>

        {trendingModels.length === 0 ? (
          <div className="p-3 bg-surface-elevated/40 border border-border-hairline rounded text-[12px] text-text-muted">
            Tracking verified foundation models...
          </div>
        ) : (
          <div className="space-y-2">
            {trendingModels.map((m) => (
              <Link
                key={m.id}
                to={`/models`}
                className="p-3 bg-surface-elevated border border-border-hairline rounded block hover:border-accent-indigo transition-colors group cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[13px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors truncate">
                    {m.name}
                  </p>
                  <span className="text-[11px] font-mono text-text-muted font-medium shrink-0">
                    {m.type === 'closed_source' ? 'API' : 'Weights'}
                  </span>
                </div>
                <p className="text-[11px] text-text-muted mt-0.5">{m.provider}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Section A: YOUR RECENT QUERIES */}
      <div className="space-y-3 pt-2 border-t border-border-hairline">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest flex items-center gap-1.5">
            <History className="w-3 h-3 text-accent-indigo" />
            YOUR RECENT QUERIES
          </p>
        </div>

        {loading ? (
          <div className="space-y-2">
            {[1, 2].map((i) => (
              <div key={i} className="p-3 bg-surface-elevated border border-border-hairline rounded animate-pulse h-14" />
            ))}
          </div>
        ) : queries.length === 0 ? (
          <div className="p-3.5 bg-surface-elevated/40 border border-border-hairline rounded text-[12px] text-text-muted">
            No queries yet. Ask Sift something.
          </div>
        ) : (
          <div className="space-y-2">
            {queries.map((q) => {
              const queryText = q.raw_description || q.description || 'Query';
              const meets = q.meets_count ?? (q.verification_count ? Math.max(1, q.verification_count - 1) : 1);
              const partial = q.partial_count ?? 0;

              return (
                <Link
                  key={q.id}
                  to={`/result/${q.id}`}
                  className="p-3 bg-surface-elevated border border-border-hairline rounded block hover:border-outline-variant transition-colors group cursor-pointer"
                  aria-label={`View query: ${queryText}`}
                >
                  <p className="text-[13px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors truncate">
                    {truncate(queryText, 40)}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 font-mono text-[11px] text-text-muted">
                    <span className="text-emerald-500 font-medium">{meets} meets</span>
                    <span>·</span>
                    <span className="text-amber-500">{partial} partial</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Section B: QUICK TASKS */}
      <div className="space-y-3 pt-4 border-t border-border-hairline">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-accent-indigo" />
            QUICK TASKS
          </p>
        </div>

        <div className="space-y-2">
          {quickTasks.map((qt) => (
            <button
              key={qt.task}
              onClick={() => navigate(`/query?task=${qt.task}`)}
              className="w-full p-2.5 text-left bg-surface-elevated hover:bg-surface-elevated/80 border border-border-hairline hover:border-outline-variant rounded text-[13px] font-medium text-text-primary hover:text-accent-indigo transition-all flex items-center justify-between group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-indigo outline-none"
              aria-label={qt.label}
            >
              <span className="truncate">{qt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ArrowLeft, X, Layers, ExternalLink } from 'lucide-react';
import { toolsApi } from '../lib/api';
import { getPricingBadge } from '../components/tools/ToolCard';

export const ToolsComparePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const idsParam = searchParams.get('ids') || '';
  const toolIds = idsParam.split(',').filter(Boolean).slice(0, 4);

  const [tools, setTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    async function loadTools() {
      setLoading(true);
      try {
        const res = await toolsApi.getTools(undefined, undefined, undefined, 200, 0);
        const allTools = res.tools || [];
        const matching = toolIds
          .map((id) => allTools.find((t: any) => t.id === id || t.name.toLowerCase() === id.toLowerCase()))
          .filter(Boolean);

        if (!isCancelled) {
          setTools(matching);
        }
      } catch (err) {
        console.error('Failed to load comparison tools:', err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    if (toolIds.length > 0) {
      loadTools();
    } else {
      setTools([]);
      setLoading(false);
    }

    return () => {
      isCancelled = true;
    };
  }, [idsParam]);

  const handleRemoveTool = (idToRemove: string) => {
    const updatedIds = toolIds.filter((id) => id !== idToRemove);
    setSearchParams(updatedIds.length > 0 ? { ids: updatedIds.join(',') } : {});
    setTools((prev) => prev.filter((t) => (t.id || t.name) !== idToRemove));
  };

  return (
    <Layout showSidebar>
      <div className="p-4 sm:p-6 lg:p-10 max-w-[1500px] mx-auto w-full space-y-6">
        {/* Back Link */}
        <div>
          <button
            onClick={() => navigate('/tools')}
            className="inline-flex items-center gap-2 text-[13px] font-mono text-accent-indigo hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to handpicked tools</span>
          </button>
        </div>

        {/* Title */}
        <div className="border-b border-border-hairline pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h1 className="font-serif text-[24px] sm:text-[30px] font-normal text-text-primary tracking-tight">
              Compare AI Tools
            </h1>
            <p className="text-[13px] sm:text-[14px] text-text-muted mt-0.5">
              Side-by-side compliance, free tier limits, and capabilities comparison.
            </p>
          </div>
          {tools.length > 0 && (
            <span className="font-mono text-[11px] text-text-muted">
              COMPARING {tools.length} {tools.length === 1 ? 'TOOL' : 'TOOLS'}
            </span>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="p-16 text-center text-text-muted font-mono text-[13px]">
            Loading tool specifications...
          </div>
        ) : tools.length < 2 ? (
          <div className="py-16 px-4 text-center rounded-xl bg-surface-card border border-border-hairline max-w-md mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-surface-elevated flex items-center justify-center text-accent-indigo mb-3">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-[17px] font-medium text-text-primary">
              Select 2 to 4 tools to compare.
            </h3>
            <p className="text-[13px] text-text-muted mt-1.5 leading-relaxed">
              Use the "Compare" checkbox on handpicked tool cards to evaluate limits and workflows side-by-side.
            </p>
            <Link
              to="/tools"
              className="mt-4 inline-block px-4 py-2 rounded-lg bg-accent-indigo text-white text-[12px] font-medium hover:bg-accent-indigo/90 transition-colors shadow-sm"
            >
              Browse 200 Handpicked Tools
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-border-hairline bg-surface-card shadow-sm">
              <table className="w-full text-left border-collapse" style={{ minWidth: '980px' }}>
                <thead>
                  <tr className="border-b border-border-hairline bg-surface-elevated/80 sticky top-0 z-10 backdrop-blur-md">
                    <th className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider" style={{ minWidth: '180px' }}>
                      Tool
                    </th>
                    <th className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider" style={{ minWidth: '140px' }}>
                      Provider
                    </th>
                    <th className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider" style={{ minWidth: '130px' }}>
                      Category
                    </th>
                    <th className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider" style={{ minWidth: '110px' }}>
                      Pricing
                    </th>
                    <th className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider" style={{ minWidth: '220px' }}>
                      Free Tier Limits
                    </th>
                    <th className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider" style={{ minWidth: '200px' }}>
                      Best For
                    </th>
                    <th className="p-4 w-10 text-center">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border-hairline text-[13px]">
                  {tools.map((t) => {
                    const pricing = getPricingBadge(t.pricing);
                    const provider = t.provider || t.name.split(' ')[0] || 'Independent';

                    return (
                      <tr key={t.id || t.name} className="hover:bg-surface-elevated/40 transition-colors">
                        {/* Tool */}
                        <td className="p-4 align-top">
                          <div>
                            <span className="text-[15px] font-medium text-text-primary block leading-snug">
                              {t.name}
                            </span>
                            {t.documentation_url && (
                              <a
                                href={t.documentation_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-indigo hover:underline mt-1"
                              >
                                <span>Website</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        </td>

                        {/* Provider */}
                        <td className="p-4 align-top text-text-muted font-medium">
                          {provider}
                        </td>

                        {/* Category */}
                        <td className="p-4 align-top">
                          <span className="font-mono text-[12px] text-text-secondary uppercase">
                            {t.category}
                          </span>
                        </td>

                        {/* Pricing Badge (No dollar amounts) */}
                        <td className="p-4 align-top">
                          <span
                            className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded border font-medium ${pricing.badgeColor}`}
                          >
                            {pricing.label}
                          </span>
                        </td>

                        {/* Free tier limits */}
                        <td className="p-4 align-top text-text-secondary text-[12px] leading-relaxed">
                          {t.free_tier_limits || 'Standard free tier available.'}
                        </td>

                        {/* Best For */}
                        <td className="p-4 align-top">
                          <div className="flex flex-wrap gap-1.5">
                            {t.best_for && t.best_for.length > 0 ? (
                              t.best_for.slice(0, 3).map((tag: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="text-[11px] px-2 py-0.5 rounded-full border border-border-hairline text-text-secondary bg-surface-elevated/70 whitespace-nowrap"
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-text-muted">—</span>
                            )}
                          </div>
                        </td>

                        {/* Remove */}
                        <td className="p-4 align-top text-center">
                          <button
                            onClick={() => handleRemoveTool(t.id || t.name)}
                            className="text-text-muted hover:text-red-400 p-1.5 rounded-md hover:bg-surface-elevated transition-colors cursor-pointer"
                            title={`Remove ${t.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Card Layout */}
            <div className="md:hidden space-y-4">
              {tools.map((t) => {
                const pricing = getPricingBadge(t.pricing);
                const provider = t.provider || t.name.split(' ')[0] || 'Independent';

                return (
                  <div
                    key={t.id || t.name}
                    className="rounded-xl border border-border-hairline bg-surface-card p-5 space-y-3.5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3 border-b border-border-hairline pb-3">
                      <div>
                        <h3 className="text-[17px] font-medium text-text-primary leading-snug">
                          {t.name}
                        </h3>
                        <p className="text-[12px] text-text-muted mt-0.5">{provider} · {t.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded border font-medium ${pricing.badgeColor}`}>
                          {pricing.label}
                        </span>
                        <button
                          onClick={() => handleRemoveTool(t.id || t.name)}
                          className="text-text-muted hover:text-red-400 p-1 rounded hover:bg-surface-elevated cursor-pointer"
                          title={`Remove ${t.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-text-muted uppercase block mb-0.5">Free Tier Limits</span>
                      <p className="text-[12px] text-text-secondary bg-surface-elevated/50 p-2.5 rounded border border-border-hairline/60">
                        {t.free_tier_limits || 'Standard free tier available.'}
                      </p>
                    </div>

                    {t.best_for && t.best_for.length > 0 && (
                      <div>
                        <span className="font-mono text-[10px] text-text-muted uppercase block mb-1">Best For</span>
                        <div className="flex flex-wrap gap-1.5">
                          {t.best_for.slice(0, 3).map((tag: string, idx: number) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-0.5 rounded-full border border-border-hairline text-text-secondary bg-surface-elevated"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

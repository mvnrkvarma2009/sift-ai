import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ArrowLeft, X, Layers, ExternalLink } from 'lucide-react';
import { modelsApi, ModelItem } from '../lib/api';

export const ModelsComparePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const idsParam = searchParams.get('ids') || '';
  
  // Truncate to maximum 4 models
  const modelIds = idsParam.split(',').filter(Boolean).slice(0, 4);

  const [models, setModels] = useState<ModelItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    async function loadModels() {
      setLoading(true);
      try {
        const fetched = await Promise.all(
          modelIds.map(async (id) => {
            try {
              const res = await modelsApi.getById(id);
              return res.model;
            } catch {
              return null;
            }
          })
        );
        if (!isCancelled) {
          setModels(fetched.filter((m): m is ModelItem => m !== null));
        }
      } catch (err) {
        console.error('Failed to load comparison models:', err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    if (modelIds.length > 0) {
      loadModels();
    } else {
      setModels([]);
      setLoading(false);
    }

    return () => {
      isCancelled = true;
    };
  }, [idsParam]);

  const handleRemoveModel = (idToRemove: string) => {
    const updatedIds = modelIds.filter((id) => id !== idToRemove);
    setSearchParams(updatedIds.length > 0 ? { ids: updatedIds.join(',') } : {});
    setModels((prev) => prev.filter((m) => m.id !== idToRemove));
  };

  const isOpenSource = (m: ModelItem) =>
    m.source_type === 'open_source' || m.type === 'open_source';

  // Access text: "API only" (closed) or "Python, GPU, Ollama" (open)
  const getAccessText = (m: ModelItem) => {
    if (!isOpenSource(m)) {
      return 'API only';
    }
    if (m.required_skills && m.required_skills.length > 0) {
      return m.required_skills.join(', ');
    }
    return 'Python, Ollama';
  };

  // Price or Hardware
  const getPriceOrHardware = (m: ModelItem) => {
    if (!isOpenSource(m)) {
      if (m.price_monthly && m.price_monthly > 0) {
        return `$${m.price_monthly}/mo`;
      }
      if (m.pricing === 'free_tier') {
        return 'Free tier';
      }
      if (m.pricing === 'enterprise') {
        return 'Enterprise';
      }
      return 'Pay per token';
    }

    // For open source: "GPU 24GB" or "CPU only"
    const skillsStr = (m.required_skills || []).join(' ').toLowerCase();
    if (skillsStr.includes('8×a100') || skillsStr.includes('multi-gpu')) {
      return 'Multi-GPU (8×A100)';
    }
    if (skillsStr.includes('48gb')) {
      return 'GPU (48GB)';
    }
    if (skillsStr.includes('16gb')) {
      return 'GPU (16GB)';
    }
    if (skillsStr.includes('gpu')) {
      return 'GPU (24GB)';
    }
    return 'CPU only';
  };

  const hasClosed = models.some((m) => !isOpenSource(m));
  const hasOpen = models.some((m) => isOpenSource(m));
  const isMixed = hasClosed && hasOpen;

  return (
    <Layout showSidebar>
      <div className="p-4 sm:p-6 lg:p-10 max-w-[1400px] mx-auto w-full space-y-6">
        {/* Top Back Link */}
        <div>
          <button
            onClick={() => navigate('/models')}
            className="inline-flex items-center gap-2 text-[13px] font-mono text-accent-indigo hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to models directory</span>
          </button>
        </div>

        {/* Title */}
        <div className="border-b border-border-hairline pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h1 className="font-serif text-[24px] sm:text-[30px] font-normal text-text-primary tracking-tight">
              Compare Models
            </h1>
            <p className="text-[13px] sm:text-[14px] text-text-muted mt-0.5">
              Side-by-side spec comparison across architecture, access, and hardware. Up to 4 models.
            </p>
          </div>
          {models.length > 0 && (
            <span className="font-mono text-[11px] text-text-muted">
              COMPARING {models.length} OF 4 MODELS
            </span>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="p-16 text-center text-text-muted font-mono text-[13px]">
            Loading model specifications...
          </div>
        ) : models.length < 2 ? (
          /* Empty State: Select 2-4 models to compare */
          <div className="py-16 px-4 text-center rounded-xl bg-surface-card border border-border-hairline max-w-md mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-surface-elevated flex items-center justify-center text-accent-indigo mb-3">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-[17px] font-medium text-text-primary">
              Select 2 to 4 models to compare.
            </h3>
            <p className="text-[13px] text-text-muted mt-1.5 leading-relaxed">
              Use the "Compare" checkbox on model cards in the directory to inspect access models, hardware requirements, and pricing side-by-side.
            </p>
            <Link
              to="/models"
              className="mt-4 inline-block px-4 py-2 rounded-lg bg-accent-indigo text-white text-[12px] font-medium hover:bg-accent-indigo/90 transition-colors shadow-sm"
            >
              Browse Models Directory
            </Link>
          </div>
        ) : (
          <>
            {/* Above table: small note if types mixed */}
            {isMixed && (
              <div className="p-3.5 rounded-xl bg-surface-elevated/80 border border-accent-indigo/30 text-[12px] font-mono text-text-secondary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-indigo shrink-0" />
                <span>Comparing closed and open source. See Access column for how to run each.</span>
              </div>
            )}

            {/* Desktop Table View (≥768px) — EXACT 6 COLUMNS SPECIFIED */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-border-hairline bg-surface-card shadow-sm">
              <table className="w-full text-left border-collapse" style={{ minWidth: '960px' }}>
                <thead>
                  <tr className="border-b border-border-hairline bg-surface-elevated/80 sticky top-0 z-10 backdrop-blur-md">
                    {/* 1. Model */}
                    <th
                      className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider"
                      style={{ minWidth: '220px' }}
                    >
                      Model
                    </th>

                    {/* 2. Type */}
                    <th
                      className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider"
                      style={{ minWidth: '130px' }}
                    >
                      Type
                    </th>

                    {/* 3. Provider */}
                    <th
                      className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider"
                      style={{ minWidth: '140px' }}
                    >
                      Provider
                    </th>

                    {/* 4. Best for */}
                    <th
                      className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider"
                      style={{ minWidth: '200px' }}
                    >
                      Best for
                    </th>

                    {/* 5. Access */}
                    <th
                      className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider"
                      style={{ minWidth: '200px' }}
                    >
                      Access
                    </th>

                    {/* 6. Price or Hardware */}
                    <th
                      className="p-4 text-[11px] font-mono text-text-muted uppercase tracking-wider"
                      style={{ minWidth: '160px' }}
                    >
                      Price or Hardware
                    </th>

                    {/* Remove Action */}
                    <th className="p-4 w-10 text-center">
                      <span className="sr-only">Remove</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border-hairline text-[13px]">
                  {models.map((m) => {
                    const isOS = isOpenSource(m);
                    return (
                      <tr key={m.id} className="hover:bg-surface-elevated/40 transition-colors">
                        {/* 1. Model Name — full name, no truncation */}
                        <td
                          className="p-4 align-top"
                          style={{
                            minWidth: '220px',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                          }}
                        >
                          <span className="text-[15px] font-medium text-text-primary block leading-snug">
                            {m.name}
                          </span>
                        </td>

                        {/* 2. Type — "Closed Source" or "Open Source" */}
                        <td className="p-4 align-top">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium ${
                              isOS
                                ? 'text-teal-400 bg-teal-500/10 border border-teal-500/20'
                                : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                            }`}
                          >
                            {isOS ? 'Open Source' : 'Closed Source'}
                          </span>
                        </td>

                        {/* 3. Provider — company */}
                        <td className="p-4 align-top font-medium text-text-primary">
                          {m.provider}
                        </td>

                        {/* 4. Best for — tags */}
                        <td className="p-4 align-top">
                          {m.best_for && m.best_for.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {m.best_for.slice(0, 3).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] px-2 py-0.5 rounded-full border border-border-hairline text-text-secondary bg-surface-elevated/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-text-muted">—</span>
                          )}
                        </td>

                        {/* 5. Access — "API only" (closed) or "Python, GPU, Ollama" (open) */}
                        <td className="p-4 align-top font-mono text-[12px] text-text-primary">
                          <span className="block">{getAccessText(m)}</span>
                          <span className="block mt-1">
                            {!isOS ? (
                              <a
                                href={m.docs_url || m.documentation_url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] text-accent-indigo hover:underline inline-flex items-center gap-1"
                              >
                                <span>View on {m.provider} →</span>
                              </a>
                            ) : (
                              <a
                                href={m.hf_url || m.documentation_url || 'https://huggingface.co'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] text-accent-indigo hover:underline inline-flex items-center gap-1"
                              >
                                <span>View on HuggingFace →</span>
                              </a>
                            )}
                          </span>
                        </td>

                        {/* 6. Price or Hardware */}
                        <td className="p-4 align-top font-mono text-[13px] text-text-secondary">
                          <span
                            className={
                              !isOS
                                ? 'text-text-primary font-medium'
                                : 'text-[#C48458] font-medium'
                            }
                          >
                            {getPriceOrHardware(m)}
                          </span>
                        </td>

                        {/* Remove button */}
                        <td className="p-4 align-top text-center">
                          <button
                            onClick={() => handleRemoveModel(m.id)}
                            title={`Remove ${m.name} from comparison`}
                            aria-label={`Remove ${m.name} from comparison`}
                            className="p-1 rounded text-text-muted hover:text-red-400 hover:bg-surface-elevated transition-colors cursor-pointer"
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

            {/* Mobile View (<768px) Card Stack */}
            <div className="md:hidden space-y-4">
              {models.map((m) => {
                const isOS = isOpenSource(m);
                return (
                  <div
                    key={m.id}
                    className="p-5 rounded-xl border border-border-hairline bg-surface-card space-y-3 relative"
                  >
                    <button
                      onClick={() => handleRemoveModel(m.id)}
                      title={`Remove ${m.name}`}
                      aria-label={`Remove ${m.name}`}
                      className="absolute top-4 right-4 p-1 rounded text-text-muted hover:text-red-400 hover:bg-surface-elevated transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                            isOS
                              ? 'text-teal-400 bg-teal-500/10 border border-teal-500/20'
                              : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                          }`}
                        >
                          {isOS ? 'Open Source' : 'Closed Source'}
                        </span>
                        <span className="text-[12px] text-text-muted">· {m.provider}</span>
                      </div>
                      <h3 className="text-[17px] font-medium text-text-primary">{m.name}</h3>
                    </div>

                    {m.best_for && m.best_for.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {m.best_for.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded-full border border-border-hairline text-text-secondary bg-surface-elevated/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border-hairline text-[12px] font-mono">
                      <div>
                        <span className="text-text-muted text-[10px] uppercase block">Access</span>
                        <span className="text-text-primary font-medium">{getAccessText(m)}</span>
                      </div>
                      <div>
                        <span className="text-text-muted text-[10px] uppercase block">
                          Price or Hardware
                        </span>
                        <span
                          className={
                            !isOS
                              ? 'text-text-primary font-medium'
                              : 'text-[#C48458] font-medium'
                          }
                        >
                          {getPriceOrHardware(m)}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border-hairline/60 flex items-center justify-between text-[11px] font-mono">
                      {!isOS ? (
                        <a
                          href={m.docs_url || m.documentation_url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-indigo hover:underline inline-flex items-center gap-1"
                        >
                          <span>View on {m.provider} →</span>
                        </a>
                      ) : (
                        <a
                          href={m.hf_url || m.documentation_url || 'https://huggingface.co'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-indigo hover:underline inline-flex items-center gap-1"
                        >
                          <span>View on HuggingFace →</span>
                        </a>
                      )}
                    </div>
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

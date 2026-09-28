import React, { useState } from 'react';
import { ModelItem, savedApi } from '../../lib/api';
import { Bookmark } from 'lucide-react';

interface ModelCardProps {
  model: ModelItem;
  isSelectedForCompare?: boolean;
  onToggleCompare?: (modelId: string) => void;
  disableCompare?: boolean;
  isSavedInitial?: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({
  model,
  isSelectedForCompare = false,
  onToggleCompare,
  disableCompare = false,
  isSavedInitial = false,
}) => {
  const [isSaved, setIsSaved] = useState(isSavedInitial);
  const [saving, setSaving] = useState(false);

  // Check if model is new
  const isNewModel = (releaseDate?: string, name?: string): boolean => {
    const guaranteed = [
      'GPT-6 Sol',
      'GPT-6 Luna',
      'Claude Opus 5.5',
      'Gemini 3.8 Live',
      'Gemini 3.8 Flash',
      'Grok 4.7',
      'MiMo-V2.6-Pro',
      'Qwen 3.8 Max',
      'Llama 4 405B'
    ];
    if (name && guaranteed.some(g => name.toLowerCase().includes(g.toLowerCase()))) {
      return true;
    }
    if (!releaseDate) return false;
    const relTime = new Date(releaseDate).getTime();
    if (isNaN(relTime)) return false;
    const refTime = new Date('2026-09-27T17:00:00Z').getTime();
    const diffDays = (refTime - relTime) / (1000 * 60 * 60 * 24);
    return diffDays >= -2 && diffDays <= 30;
  };

  const isNew = isNewModel(model.release_date, model.name);
  const isOpenSource = model.source_type === 'open_source' || model.type === 'open_source';
  const isClosedSource = !isOpenSource;

  const handleToggleSave = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setSaving(true);
      const res = await savedApi.toggleSave('model', model.id);
      setIsSaved(res.saved);
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      if (res.saved) {
        if (!local.some((item: any) => item.item_type === 'model' && item.item_id === model.id)) {
          local.unshift({
            id: `saved_m_${Date.now()}`,
            user_id: 'builder',
            item_type: 'model',
            item_id: model.id,
            created_at: new Date().toISOString(),
            item: model,
          });
        }
      } else {
        const filtered = local.filter((item: any) => !(item.item_type === 'model' && item.item_id === model.id));
        localStorage.setItem('sift_saved_items', JSON.stringify(filtered));
        return;
      }
      localStorage.setItem('sift_saved_items', JSON.stringify(local));
    } catch (err) {
      console.error('Failed to toggle save:', err);
      // Fallback local toggle
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      const exists = local.some((item: any) => item.item_type === 'model' && item.item_id === model.id);
      if (exists) {
        const filtered = local.filter((item: any) => !(item.item_type === 'model' && item.item_id === model.id));
        localStorage.setItem('sift_saved_items', JSON.stringify(filtered));
        setIsSaved(false);
      } else {
        local.unshift({
          id: `saved_m_${Date.now()}`,
          user_id: 'builder',
          item_type: 'model',
          item_id: model.id,
          created_at: new Date().toISOString(),
          item: model,
        });
        localStorage.setItem('sift_saved_items', JSON.stringify(local));
        setIsSaved(true);
      }
    } finally {
      setSaving(false);
    }
  };

  // Helper for pricing display string in closed source
  const getPricingDisplay = () => {
    if (model.price_monthly && model.price_monthly > 0) {
      return `$${model.price_monthly}/mo`;
    }
    if (model.pricing === 'free_tier') {
      return 'Free tier available';
    }
    if (model.pricing === 'enterprise') {
      return 'Enterprise';
    }
    if (model.pricing === 'paid_only') {
      return 'Pay per token';
    }
    return 'API access';
  };

  // Helper for consumer product display label
  const getProductLabel = (url?: string | null): string | null => {
    if (!url) return null;
    const lower = url.toLowerCase();
    if (lower.includes('chatgpt.com')) return 'ChatGPT';
    if (lower.includes('claude.ai')) return 'Claude.ai';
    if (lower.includes('gemini.google.com')) return 'Gemini';
    if (lower.includes('x.com') || lower.includes('grok')) return 'Grok';
    if (lower.includes('perplexity.ai')) return 'Perplexity';
    if (lower.includes('mistral.ai')) return 'Le Chat';
    if (lower.includes('copilot')) return 'Copilot';
    if (lower.includes('pi.ai')) return 'Pi';
    return 'App';
  };

  // Extract GPU requirement badge if any
  const extractGpuBadge = () => {
    if (!model.required_skills || model.required_skills.length === 0) return null;
    for (const skill of model.required_skills) {
      if (skill.toLowerCase().includes('gpu') || skill.toLowerCase().includes('vram')) {
        return skill;
      }
    }
    return null;
  };

  const gpuBadge = extractGpuBadge();

  return (
    <div
      className={`p-4 sm:p-5 rounded-xl bg-surface-card border transition-all flex flex-col justify-between group hover:border-accent-indigo relative h-[260px] ${
        isSelectedForCompare
          ? 'border-accent-indigo ring-1 ring-accent-indigo/40'
          : 'border-border-hairline'
      }`}
    >
      {/* TOP SECTION */}
      <div>
        {/* TOP ROW: Type badge left, compare + bookmark right */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {isClosedSource ? (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
                CLOSED
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20">
                OPEN
              </span>
            )}

            {isNew && (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase font-semibold text-accent-indigo bg-accent-indigo/[0.08] border border-accent-indigo/20">
                NEW
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Bookmark button */}
            <button
              onClick={handleToggleSave}
              disabled={saving}
              title={isSaved ? 'Remove from saved' : 'Save model'}
              aria-label={isSaved ? 'Remove from saved' : 'Save model'}
              className={`p-1 rounded hover:bg-surface-elevated transition-colors cursor-pointer ${
                isSaved ? 'text-accent-indigo' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Compare checkbox (up to 4 models) */}
            {onToggleCompare && (
              <label
                className={`flex items-center gap-1.5 select-none text-[11px] font-mono shrink-0 ${
                  disableCompare && !isSelectedForCompare
                    ? 'opacity-40 cursor-not-allowed text-text-muted'
                    : 'cursor-pointer text-text-muted hover:text-text-primary'
                }`}
                title={disableCompare && !isSelectedForCompare ? 'Maximum 4 models' : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  if (disableCompare && !isSelectedForCompare) {
                    e.preventDefault();
                  }
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelectedForCompare}
                  disabled={disableCompare && !isSelectedForCompare}
                  onChange={() => {
                    if (!disableCompare || isSelectedForCompare) {
                      onToggleCompare(model.id);
                    }
                  }}
                  aria-label={`Compare ${model.name}`}
                  className="rounded border-border-hairline text-accent-indigo focus:ring-accent-indigo cursor-pointer w-3.5 h-3.5 disabled:cursor-not-allowed"
                />
                <span className="hidden sm:inline text-[11px]">Compare</span>
              </label>
            )}
          </div>
        </div>

        {/* MODEL NAME: 18px Inter medium, no truncation, allows 2 lines */}
        <h3
          className="text-[17px] sm:text-[18px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors leading-tight line-clamp-2"
          title={model.name}
        >
          {model.name}
        </h3>

        {/* PROVIDER: 13px muted */}
        <p className="text-[13px] text-text-muted mt-0.5">{model.provider}</p>

        {/* BEST FOR TAGS: 2 pills, hairline border */}
        {model.best_for && Array.isArray(model.best_for) && model.best_for.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            {model.best_for.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-full border border-border-hairline text-text-secondary bg-surface-elevated/60 font-sans whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ACCESS BLOCK (the differentiator) */}
      <div className="pt-2 border-t border-border-hairline/60">
        {isClosedSource ? (
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                ACCESS
              </span>
              {(model.docs_url || model.documentation_url) && (
                <a
                  href={model.docs_url || model.documentation_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] font-mono text-accent-indigo hover:underline shrink-0"
                >
                  View on {model.provider} →
                </a>
              )}
            </div>
            <div className="flex items-baseline justify-between gap-1 mt-0.5">
              <span className="text-[13px] font-medium text-text-primary">API only</span>
              <span className="text-[13px] text-text-muted">{getPricingDisplay()}</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                REQUIRED SKILLS
              </span>
              {(model.hf_url || model.documentation_url) && (
                <a
                  href={model.hf_url || model.documentation_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] font-mono text-accent-indigo hover:underline shrink-0"
                >
                  View on HuggingFace →
                </a>
              )}
            </div>
            <div className="flex items-center justify-between gap-1 mt-0.5">
              <span className="text-[13px] font-medium text-text-primary truncate">
                {model.required_skills && model.required_skills.length > 0
                  ? model.required_skills.filter(s => !s.toLowerCase().includes('gpu') && !s.toLowerCase().includes('vram')).slice(0, 2).join(', ') || 'Python, Ollama'
                  : 'Python, Ollama'}
              </span>
              {gpuBadge && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-[#C48458]/30 bg-[#C48458]/10 text-[#C48458] shrink-0 font-medium">
                  {gpuBadge.length > 16 ? 'Multi-GPU' : gpuBadge}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM ROW: Model context/status + Cross-link Try on [product] */}
      <div className="pt-2 border-t border-border-hairline/60 flex items-center justify-between text-[11px] font-mono">
        <div>
          <span className="text-text-muted">
            {model.context_window ? `${model.context_window} context` : 'Verified model'}
          </span>
        </div>

        {/* Cross-link (Part 8): Try on [product] → */}
        {model.chat_product_url && getProductLabel(model.chat_product_url) ? (
          <a
            href={model.chat_product_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-indigo hover:underline"
          >
            <span>Try on {getProductLabel(model.chat_product_url)} →</span>
          </a>
        ) : (
          <span className="text-text-muted text-[10px]">
            {isOpenSource ? model.parameters || 'Open Weights' : 'API Service'}
          </span>
        )}
      </div>
    </div>
  );
};

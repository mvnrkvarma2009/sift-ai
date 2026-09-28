import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import { savedApi } from '../../lib/api';

export interface ToolItem {
  id?: string;
  name: string;
  category: string;
  pricing?: 'free' | 'free_tier' | 'paid' | 'waitlist' | 'enterprise' | 'paid_hosting' | string;
  signup_required?: boolean;
  free_tier_limits?: string;
  description?: string;
  best_for?: string[];
  export_formats?: string[];
  documentation_url?: string;
  provider?: string;
}

export function getPricingBadge(pricingRaw?: string): { label: string; badgeColor: string } {
  const p = (pricingRaw || 'free_tier').toLowerCase().trim();
  switch (p) {
    case 'free':
      return {
        label: 'FREE',
        badgeColor: 'bg-status-success/10 text-status-success border-status-success/20',
      };
    case 'free_tier':
    case 'freemium':
      return {
        label: 'FREE TIER',
        badgeColor: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20',
      };
    case 'paid':
    case 'paid_only':
      return {
        label: 'PAID',
        badgeColor: 'bg-accent-copper/10 text-accent-copper border-accent-copper/20',
      };
    case 'waitlist':
      return {
        label: 'WAITLIST',
        badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      };
    default:
      return {
        label: 'FREE TIER',
        badgeColor: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20',
      };
  }
}

interface ToolCardProps {
  tool: ToolItem;
  isSelectedForCompare?: boolean;
  onToggleCompare?: (toolId: string) => void;
  disableCompare?: boolean;
  isSavedInitial?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  isSelectedForCompare = false,
  onToggleCompare,
  disableCompare = false,
  isSavedInitial = false,
}) => {
  const navigate = useNavigate();
  const pricing = getPricingBadge(tool.pricing);
  const [isSaved, setIsSaved] = useState(isSavedInitial);
  const [saving, setSaving] = useState(false);

  const toolId = tool.id || tool.name;

  const handleClick = () => {
    navigate(`/audit/${encodeURIComponent(tool.name.toLowerCase())}`);
  };

  const handleToggleSave = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setSaving(true);
      const res = await savedApi.toggleSave('tool', toolId);
      setIsSaved(res.saved);
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      if (res.saved) {
        if (!local.some((item: any) => item.item_type === 'tool' && item.item_id === toolId)) {
          local.unshift({
            id: `saved_t_${Date.now()}`,
            user_id: 'builder',
            item_type: 'tool',
            item_id: toolId,
            created_at: new Date().toISOString(),
            item: tool,
          });
        }
      } else {
        const filtered = local.filter((item: any) => !(item.item_type === 'tool' && item.item_id === toolId));
        localStorage.setItem('sift_saved_items', JSON.stringify(filtered));
        return;
      }
      localStorage.setItem('sift_saved_items', JSON.stringify(local));
    } catch (err) {
      console.error('Failed to toggle save tool:', err);
      const local = JSON.parse(localStorage.getItem('sift_saved_items') || '[]');
      const exists = local.some((item: any) => item.item_type === 'tool' && item.item_id === toolId);
      if (exists) {
        const filtered = local.filter((item: any) => !(item.item_type === 'tool' && item.item_id === toolId));
        localStorage.setItem('sift_saved_items', JSON.stringify(filtered));
        setIsSaved(false);
      } else {
        local.unshift({
          id: `saved_t_${Date.now()}`,
          user_id: 'builder',
          item_type: 'tool',
          item_id: toolId,
          created_at: new Date().toISOString(),
          item: tool,
        });
        localStorage.setItem('sift_saved_items', JSON.stringify(local));
        setIsSaved(true);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`p-5 rounded-xl bg-surface-card border transition-all flex flex-col justify-between group min-h-[170px] cursor-pointer hover:border-accent-indigo ${
        isSelectedForCompare ? 'border-accent-indigo ring-1 ring-accent-indigo/40' : 'border-border-hairline'
      }`}
    >
      <div>
        {/* Row 1: Tool name (no truncation, allows wrapping) + Bookmark + Compare checkbox + Pricing badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0 pr-1">
            <h3 className="text-[17px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors leading-snug whitespace-normal break-words">
              {tool.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0 pt-0.5">
            {/* Bookmark button */}
            <button
              onClick={handleToggleSave}
              disabled={saving}
              title={isSaved ? 'Remove from saved' : 'Save tool'}
              aria-label={isSaved ? 'Remove from saved' : 'Save tool'}
              className={`p-1 rounded hover:bg-surface-elevated transition-colors cursor-pointer ${
                isSaved ? 'text-accent-indigo' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Compare Checkbox */}
            {onToggleCompare && (
              <label
                className={`flex items-center gap-1.5 select-none text-[11px] font-mono shrink-0 ${
                  disableCompare && !isSelectedForCompare
                    ? 'opacity-40 cursor-not-allowed text-text-muted'
                    : 'cursor-pointer text-text-muted hover:text-text-primary'
                }`}
                title={disableCompare && !isSelectedForCompare ? 'Maximum tools selected' : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  if (disableCompare && !isSelectedForCompare) e.preventDefault();
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelectedForCompare}
                  disabled={disableCompare && !isSelectedForCompare}
                  onChange={() => {
                    if (!disableCompare || isSelectedForCompare) {
                      onToggleCompare(toolId);
                    }
                  }}
                  aria-label={`Compare ${tool.name}`}
                  className="rounded border-border-hairline text-accent-indigo focus:ring-accent-indigo cursor-pointer w-3.5 h-3.5"
                />
                <span className="hidden sm:inline text-[11px]">Compare</span>
              </label>
            )}

            {/* Pricing Badge (FREE, FREE TIER, PAID - NO FREEMIUM) */}
            <span
              className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded border shrink-0 font-medium ${pricing.badgeColor}`}
            >
              {pricing.label}
            </span>
          </div>
        </div>

        {/* Row 2: Category (11px monospace muted) */}
        <div className="mt-1">
          <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block">
            {tool.category}
          </span>
        </div>

        {/* Row 3: Short description or limits */}
        <p className="mt-2.5 text-[13px] text-text-muted leading-relaxed line-clamp-2">
          {tool.description || tool.free_tier_limits || 'Verified deterministic compliance profile.'}
        </p>

        {/* 2-3 best_for tags */}
        {tool.best_for && tool.best_for.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-border-hairline/60">
            {tool.best_for.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-elevated text-text-muted border border-border-hairline"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

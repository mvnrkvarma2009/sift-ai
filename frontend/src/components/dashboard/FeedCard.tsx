import React from 'react';
import { Bookmark } from 'lucide-react';
import { FeedItem, timeAgo } from '../../lib/api';
import { getFeedCategoryColor } from '../../lib/utils';

interface FeedCardProps {
  item: FeedItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelect?: (item: FeedItem) => void;
}

export const FeedCard: React.FC<FeedCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark,
  onSelect,
}) => {
  const displayTime =
    typeof item.published_at === 'string' && item.published_at.includes('ago')
      ? item.published_at
      : item.published_at
      ? timeAgo(item.published_at)
      : typeof item.timestamp === 'string' && item.timestamp.includes('ago')
      ? item.timestamp
      : item.timestamp
      ? timeAgo(item.timestamp)
      : 'just now';

  return (
    <article
      onClick={() => onSelect && onSelect(item)}
      className="py-6 border-b border-border-hairline hover:bg-surface-card/40 transition-colors px-2 cursor-pointer group"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.12em] font-semibold shrink-0 w-24 ${getFeedCategoryColor(
            item.category
          )}`}
        >
          {item.category}
        </span>
        <div className="flex-1 max-w-[820px] flex flex-col gap-2">
          <h3 className="text-[20px] leading-[1.4] text-text-primary font-medium tracking-tight group-hover:text-accent-indigo transition-colors">
            {item.title || item.headline}
          </h3>
          <p className="text-[14px] leading-[1.6] text-text-secondary">{item.summary}</p>
          <div className="flex items-center gap-4 mt-2 font-mono text-[11px] text-text-muted">
            <span>{typeof item.source === 'object' && item.source !== null ? (item.source as any).name || (item.source as any).title || 'Sift Intelligence' : item.source || 'Sift Intelligence'}</span>
            <span>·</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(item.id);
                }}
                className={`flex items-center gap-1 hover:text-text-primary transition-colors cursor-pointer ${
                  isBookmarked ? 'text-accent-indigo' : ''
                }`}
                title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-accent-indigo text-accent-indigo' : ''}`} />
                <span>{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>
        <span className="font-mono text-[12px] text-text-muted tabular-nums shrink-0 text-right md:w-24">
          {displayTime}
        </span>
      </div>
    </article>
  );
};

export default FeedCard;

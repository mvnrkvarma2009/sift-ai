import React, { useState } from 'react';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QueryInputProps {
  initialValue?: string;
  onSearch?: (query: string) => void;
  compact?: boolean;
}

export const QueryInput: React.FC<QueryInputProps> = ({
  initialValue = '',
  onSearch,
  compact = false,
}) => {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (onSearch) {
      onSearch(query);
    } else {
      navigate('/query?q=' + encodeURIComponent(query));
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    if (onSearch) {
      onSearch(suggestion);
    } else {
      navigate('/query?q=' + encodeURIComponent(suggestion));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-2">
        {!compact && (
          <label className="block font-mono text-[11px] uppercase tracking-widest text-text-muted">
            WHAT DO YOU WANT TO DO?
          </label>
        )}
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="I need a free presentation tool with PPTX export..."
            className="w-full bg-surface-card border border-border-hairline rounded-[8px] py-[16px] pl-[20px] pr-[56px] text-text-primary text-[14px] leading-normal placeholder:text-text-muted focus:outline-none focus:border-accent-indigo transition-colors"
          />
          <button
            type="submit"
            aria-label="Submit query"
            className="absolute right-3.5 w-8 h-8 rounded-full bg-accent-indigo flex items-center justify-center text-white hover:bg-accent-indigo/90 transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
        {!compact && (
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[12px] text-text-muted">
            <span>Try:</span>
            {[
              'free video editor',
              'AI research assistant',
              'code copilot',
              'PPTX export tool',
            ].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleSuggestionClick(tag)}
                className="hover:text-accent-indigo underline decoration-border-hairline transition-colors cursor-pointer"
              >
                '{tag}'
              </button>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};

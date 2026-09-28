import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ToolResult } from '../../lib/api';
import { RuleRow } from './RuleRow';

interface ToolVerdictCardProps {
  tool: ToolResult & { queryId?: string };
  queryId?: string;
}

export const ToolVerdictCard: React.FC<ToolVerdictCardProps> = ({ tool, queryId }) => {
  const normalizedVerdict = (tool.verdict || '').replace(/_/g, ' ').toUpperCase();
  const getBadgeStyle = () => {
    if (normalizedVerdict.includes('MEETS') && !normalizedVerdict.includes('PARTIAL') && !normalizedVerdict.includes('NOT')) {
      return 'text-status-success';
    }
    if (normalizedVerdict.includes('PARTIAL')) {
      return 'text-accent-copper';
    }
    return 'text-status-alert';
  };

  const targetAuditId = queryId || (tool as any).queryId || tool.id;

  return (
    <div className="p-6 rounded-xl bg-surface-card border border-border-hairline transition-colors hover:border-outline-variant/60">
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-2.5">
          <h2 className="text-[20px] text-text-primary font-medium tracking-tight">{tool.name}</h2>
          <span className="text-[12px] text-text-muted">{tool.category}</span>
        </div>
        <span className={`font-mono text-[10px] uppercase tracking-[0.15em] font-semibold ${getBadgeStyle()}`}>
          {normalizedVerdict}
        </span>
      </div>
      <div className="mt-4 divide-y divide-border-hairline">
        {tool.rules?.map((rule, idx) => (
          <RuleRow key={rule.id || idx} rule={rule} />
        ))}
      </div>
      <div className="mt-4 pt-1 flex justify-end">
        <Link
          to={`/audit/${targetAuditId}`}
          className="font-mono text-[10px] uppercase text-text-muted hover:text-accent-indigo transition-colors tracking-wider flex items-center gap-1 cursor-pointer"
        >
          <span>View full audit trail</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

import React from 'react';
import { Check, AlertTriangle, X } from 'lucide-react';
import { RuleCheck } from '../../lib/api';

interface RuleRowProps {
  rule: RuleCheck;
}

export const RuleRow: React.FC<RuleRowProps> = ({ rule }) => {
  const getIcon = () => {
    switch (rule.status) {
      case 'PASS':
        return <Check className="text-status-success w-3.5 h-3.5 mt-0.5 shrink-0" />;
      case 'WARN':
        return <AlertTriangle className="text-accent-copper w-3.5 h-3.5 mt-0.5 shrink-0" />;
      case 'FAIL':
        return <X className="text-status-alert w-3.5 h-3.5 mt-0.5 shrink-0" />;
    }
  };

  return (
    <div className="py-3 flex items-start gap-3">
      {getIcon()}
      <div className="text-[12px] text-text-secondary flex-1">
        <span className="text-text-primary font-medium">{rule.name}</span>
        <span className="mx-1 text-text-muted">·</span>
        <span>{rule.reason || rule.detail}</span>
      </div>
    </div>
  );
};

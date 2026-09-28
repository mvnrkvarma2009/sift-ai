import React from 'react';

interface RequirementPillsProps {
  requirements?: Array<{ label: string; status: 'success' | 'warn' | 'info' }>;
}

export const RequirementPills: React.FC<RequirementPillsProps> = ({
  requirements = [
    { label: 'Budget: Free', status: 'success' },
    { label: 'Signup: Not required', status: 'warn' },
    { label: 'Export: PPTX', status: 'success' },
    { label: 'Slides: 10', status: 'success' },
  ],
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {requirements.map((req, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated border border-border-hairline"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              req.status === 'success'
                ? 'bg-status-success'
                : req.status === 'warn'
                ? 'bg-accent-copper'
                : 'bg-accent-indigo'
            }`}
          />
          <span className="text-[12px] text-text-secondary">{req.label}</span>
        </div>
      ))}
    </div>
  );
};

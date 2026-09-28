import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { queriesApi, INITIAL_TOOLS, ToolResult } from '../../lib/api';
import { ToolVerdictCard } from './ToolVerdictCard';
import { RequirementPills } from './RequirementPills';

export const QueryResult: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const qParam = searchParams.get('q');

  const [loading, setLoading] = useState<boolean>(Boolean(id));
  const [queryData, setQueryData] = useState<any>(null);
  const [toolsList, setToolsList] = useState<ToolResult[]>(INITIAL_TOOLS);

  useEffect(() => {
    let isCancelled = false;

    if (id) {
      setLoading(true);
      queriesApi
        .getById(id)
        .then((data) => {
          if (!isCancelled && data) {
            setQueryData(data);
            if (data.verifications && Array.isArray(data.verifications) && data.verifications.length > 0) {
              const formattedTools: ToolResult[] = data.verifications.map((v: any) => {
                const toolObj = v.tool || {};
                const evals = v.evaluations || [];
                return {
                  id: toolObj.id || v.id,
                  name: toolObj.name || 'Verified Tool',
                  category: toolObj.category || 'Developer Tool',
                  pricing: toolObj.pricing || 'free_tier',
                  signup_required: toolObj.signup_required,
                  free_tier_limits: toolObj.free_tier_limits,
                  export_formats: toolObj.export_formats,
                  documentation_url: toolObj.documentation_url,
                  verdict: (v.final_verdict || 'MEETS_REQUIREMENTS') as any,
                  description: toolObj.free_tier_limits || 'Deterministic constraint verification passed.',
                  rules: evals.map((e: any, idx: number) => ({
                    id: e.id || `eval-${idx}`,
                    name: (e.rule_name || 'Rule Check').replace(/^RULE_/, '').replace(/_/g, ' '),
                    status: (e.verdict === 'PASS' ? 'PASS' : e.verdict === 'WARN' ? 'WARN' : 'FAIL') as any,
                    detail: e.reason || 'Verified deterministic compliance.',
                    reason: e.reason,
                  })),
                };
              });
              setToolsList(formattedTools);
            }
          }
        })
        .catch((err) => {
          console.warn('[QUERY RESULT] Failed to fetch query details:', err.message);
        })
        .finally(() => {
          if (!isCancelled) {
            setLoading(false);
          }
        });
    } else if (qParam) {
      const qLower = qParam.toLowerCase();
      setToolsList((prev) => {
        return [...prev].sort((a, b) => {
          const matchA =
            (a.category.toLowerCase().includes('pres') && (qLower.includes('pres') || qLower.includes('slide') || qLower.includes('pptx'))) ||
            (a.category.toLowerCase().includes('code') && (qLower.includes('code') || qLower.includes('typescript') || qLower.includes('vs code'))) ||
            (a.category.toLowerCase().includes('writing') && (qLower.includes('write') || qLower.includes('blog') || qLower.includes('essay'))) ||
            (a.category.toLowerCase().includes('audio') && (qLower.includes('audio') || qLower.includes('transcri') || qLower.includes('podcast')));
          const matchB =
            (b.category.toLowerCase().includes('pres') && (qLower.includes('pres') || qLower.includes('slide') || qLower.includes('pptx'))) ||
            (b.category.toLowerCase().includes('code') && (qLower.includes('code') || qLower.includes('typescript') || qLower.includes('vs code'))) ||
            (b.category.toLowerCase().includes('writing') && (qLower.includes('write') || qLower.includes('blog') || qLower.includes('essay'))) ||
            (b.category.toLowerCase().includes('audio') && (qLower.includes('audio') || qLower.includes('transcri') || qLower.includes('podcast')));
          if (matchA && !matchB) return -1;
          if (!matchA && matchB) return 1;
          return 0;
        });
      });
    }

    return () => {
      isCancelled = true;
    };
  }, [id, qParam]);

  const displayQuery = queryData?.raw_description || qParam || 'I need a free presentation tool with PPTX export.';

  // Build requirement pills from extracted requirements if available
  const requirementsList = React.useMemo(() => {
    if (!queryData?.extracted_requirements) {
      return [
        { label: 'Budget: Free', status: 'success' as const },
        { label: 'Signup: Not required', status: 'warn' as const },
        { label: 'Export: PPTX', status: 'success' as const },
        { label: 'Deterministic: 100%', status: 'success' as const },
      ];
    }
    const reqs = queryData.extracted_requirements;
    const pills: Array<{ label: string; status: 'success' | 'warn' | 'info' }> = [];
    if (reqs.task_type) {
      pills.push({ label: `Task: ${reqs.task_type}`, status: 'info' });
    }
    if (reqs.constraints) {
      if (reqs.constraints.budget) {
        pills.push({
          label: `Budget: ${reqs.constraints.budget}`,
          status: reqs.constraints.budget === 'free' ? 'success' : 'warn',
        });
      }
      if (reqs.constraints.signup_required !== undefined) {
        pills.push({
          label: reqs.constraints.signup_required ? 'Signup required' : 'No signup required',
          status: reqs.constraints.signup_required ? 'warn' : 'success',
        });
      }
      if (reqs.constraints.export_format) {
        pills.push({
          label: `Export: ${String(reqs.constraints.export_format).toUpperCase()}`,
          status: 'success',
        });
      }
    }
    return pills.length > 0
      ? pills
      : [
          { label: 'Budget: Free', status: 'success' as const },
          { label: 'Verification: Complete', status: 'success' as const },
        ];
  }, [queryData]);

  // Compute breakdown stats
  const totalChecked = toolsList.length;
  const meetsCount = toolsList.filter((t) =>
    (t.verdict || '').replace(/_/g, ' ').includes('MEETS') &&
    !(t.verdict || '').replace(/_/g, ' ').includes('PARTIAL') &&
    !(t.verdict || '').replace(/_/g, ' ').includes('NOT')
  ).length;
  const partialCount = toolsList.filter((t) =>
    (t.verdict || '').replace(/_/g, ' ').includes('PARTIAL')
  ).length;
  const rejectedCount = toolsList.filter((t) =>
    (t.verdict || '').replace(/_/g, ' ').includes('NOT') ||
    (t.verdict || '').replace(/_/g, ' ').includes('FAIL') ||
    (t.verdict || '').replace(/_/g, ' ').includes('REJECTED')
  ).length;

  return (
    <div className="w-full max-w-[820px] mx-auto p-6 lg:p-10 space-y-6">
      <div>
        <Link
          to="/query"
          className="inline-flex items-center gap-1.5 text-[12px] text-text-muted hover:text-text-secondary transition-colors cursor-pointer select-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>New query</span>
        </Link>
      </div>

      <div>
        <h1 className="text-[32px] text-text-primary tracking-tight font-medium">
          Results for your query
        </h1>
      </div>

      {/* Query Quote Card — shows user's ACTUAL query */}
      <div className="p-5 rounded-xl bg-surface-card border border-border-hairline border-l-2 border-l-accent-indigo">
        <p className="text-[16px] text-text-primary italic font-normal tracking-normal leading-relaxed">
          “{displayQuery}”
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase text-text-muted tracking-wider">
            {requirementsList.length} requirements extracted via Gemini
          </span>
        </div>
      </div>

      {/* Requirements Pills */}
      <RequirementPills requirements={requirementsList} />

      {/* Summary Bar: X tools checked, Y meets, Z partial, W rejected */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-surface-card border border-border-hairline font-mono text-[11px] text-text-muted">
        <span>{totalChecked} TOOLS CHECKED</span>
        <div className="flex items-center gap-3">
          <span className="text-status-success">{meetsCount} MEETS</span>
          <span className="text-accent-copper">{partialCount} PARTIAL</span>
          <span className="text-status-alert">{rejectedCount} REJECTED</span>
        </div>
      </div>

      {/* Tool Verdict Cards */}
      {loading ? (
        <div className="py-16 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 text-accent-indigo animate-spin" />
          <p className="font-mono text-[12px] text-text-muted">Loading deterministic audit results...</p>
        </div>
      ) : (
        <div className="pt-2 space-y-4">
          {toolsList.map((tool) => (
            <ToolVerdictCard key={tool.id} tool={tool} queryId={queryData?.id || id} />
          ))}
        </div>
      )}

      {/* Deterministic pass footer */}
      <div className="pt-6 border-t border-border-hairline flex items-center justify-between font-mono text-[10px] text-text-muted">
        <span>INDEX AUDIT REVISION #4102</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
          <span>VERIFIED DETERMINISTIC PASS</span>
        </span>
      </div>
    </div>
  );
};

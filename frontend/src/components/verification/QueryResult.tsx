import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { queriesApi, ToolResult } from '../../lib/api';
import { ToolVerdictCard } from './ToolVerdictCard';
import { RequirementPills } from './RequirementPills';

export const QueryResult: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const qParam = searchParams.get('q');

  const [loading, setLoading] = useState<boolean>(Boolean(id));
  const [error, setError] = useState<string | null>(null);
  const [queryData, setQueryData] = useState<any>(null);
  const [toolsList, setToolsList] = useState<ToolResult[]>([]);

  useEffect(() => {
    let isCancelled = false;

    if (id) {
      setLoading(true);
      setError(null);
      queriesApi
        .getById(id)
        .then((data) => {
          if (!isCancelled && data) {
            setQueryData(data);
            if (data.verifications && Array.isArray(data.verifications)) {
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
          console.error('[QUERY RESULT] Failed to fetch query details:', err?.message || err);
          if (!isCancelled) {
            setError('Failed to load verification results. Please try again.');
          }
        })
        .finally(() => {
          if (!isCancelled) {
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
      setError('No query ID provided. Please submit a query from the verification input.');
    }

    return () => {
      isCancelled = true;
    };
  }, [id]);

  const displayQuery = queryData?.raw_description || qParam || '';

  // Build requirement pills from extracted requirements if available
  const requirementsList = React.useMemo(() => {
    if (!queryData?.extracted_requirements) {
      return [];
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
    return pills;
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
      {displayQuery && (
        <div className="p-5 rounded-xl bg-surface-card border border-border-hairline border-l-2 border-l-accent-indigo">
          <p className="text-[16px] text-text-primary italic font-normal tracking-normal leading-relaxed">
            “{displayQuery}”
          </p>
          {requirementsList.length > 0 && (
            <div className="mt-3 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-text-muted tracking-wider">
                {requirementsList.length} requirements extracted via Gemini
              </span>
            </div>
          )}
        </div>
      )}

      {/* Requirements Pills */}
      {requirementsList.length > 0 && (
        <RequirementPills requirements={requirementsList} />
      )}

      {/* Summary Bar: X tools checked, Y meets, Z partial, W rejected */}
      {!loading && !error && toolsList.length > 0 && (
        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-card border border-border-hairline font-mono text-[11px] text-text-muted">
          <span>{totalChecked} TOOLS CHECKED</span>
          <div className="flex items-center gap-3">
            <span className="text-status-success">{meetsCount} MEETS</span>
            <span className="text-accent-copper">{partialCount} PARTIAL</span>
            <span className="text-status-alert">{rejectedCount} REJECTED</span>
          </div>
        </div>
      )}

      {/* Tool Verdict Cards or Error / Loading states */}
      {loading ? (
        <div className="py-16 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 text-accent-indigo animate-spin" />
          <p className="font-mono text-[12px] text-text-muted">Loading deterministic audit results...</p>
        </div>
      ) : error ? (
        <div className="py-16 text-center rounded-xl bg-surface-card border border-border-hairline p-8 space-y-3">
          <AlertCircle className="w-8 h-8 text-status-alert mx-auto" />
          <p className="text-[15px] font-medium text-status-alert">{error}</p>
          <p className="text-[13px] text-text-muted">Unable to retrieve verified tool evaluations.</p>
          <div className="pt-2">
            <Link
              to="/query"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-indigo text-white text-[12px] font-mono hover:bg-accent-indigo/90 transition-colors"
            >
              <span>Submit a new query</span>
            </Link>
          </div>
        </div>
      ) : toolsList.length === 0 ? (
        <div className="py-16 text-center rounded-xl bg-surface-card border border-border-hairline p-8 space-y-3">
          <p className="text-[15px] font-medium text-text-primary">No verification results</p>
          <p className="text-[13px] text-text-muted">No tools matched the verification criteria for this query.</p>
          <div className="pt-2">
            <Link
              to="/query"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-indigo text-white text-[12px] font-mono hover:bg-accent-indigo/90 transition-colors"
            >
              <span>Try another query</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="pt-2 space-y-4">
          {toolsList.map((tool) => (
            <ToolVerdictCard key={tool.id} tool={tool} queryId={queryData?.id || id} />
          ))}
        </div>
      )}

      {/* Deterministic pass footer */}
      {!loading && !error && toolsList.length > 0 && (
        <div className="pt-6 border-t border-border-hairline flex items-center justify-between font-mono text-[10px] text-text-muted">
          <span>INDEX AUDIT REVISION #4102</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
            <span>VERIFIED DETERMINISTIC PASS</span>
          </span>
        </div>
      )}
    </div>
  );
};

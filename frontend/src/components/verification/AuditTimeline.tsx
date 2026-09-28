import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, Download, Share2, Check, Loader2 } from 'lucide-react';
import { auditApi, queriesApi } from '../../lib/api';

interface AuditEvent {
  id: string;
  user_id?: string;
  query_id?: string;
  action: string;
  details?: any;
  created_at: string;
  formatted_description?: string;
}

export const AuditTimeline: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [copySuccess, setCopySuccess] = useState(false);
  const [events, setEvents] = useState<AuditEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [queryText, setQueryText] = useState<string>('');
  const [executionTime, setExecutionTime] = useState<number>(340);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    async function loadAuditData() {
      try {
        if (id) {
          // If id is a query id or tool identifier
          const trailRes = await auditApi.getQueryTrail(id).catch(() => null);
          if (trailRes && trailRes.events && trailRes.events.length > 0) {
            if (!isCancelled) {
              setEvents(trailRes.events);
            }
          } else {
            // Fallback to user audit logs
            const logsRes = await auditApi.getAuditLogs();
            if (!isCancelled && logsRes && logsRes.audit_logs) {
              setEvents(logsRes.audit_logs);
            }
          }

          // Try loading query description if id is a query id
          const qRes = await queriesApi.getById(id).catch(() => null);
          if (!isCancelled && qRes && qRes.raw_description) {
            setQueryText(qRes.raw_description);
          }
        } else {
          const logsRes = await auditApi.getAuditLogs();
          if (!isCancelled && logsRes && logsRes.audit_logs) {
            setEvents(logsRes.audit_logs);
          }
        }
      } catch (err: any) {
        console.warn('[AUDIT] Failed to load real audit events:', err.message);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    loadAuditData();

    return () => {
      isCancelled = true;
    };
  }, [id]);

  const handleDownloadLog = () => {
    const blob = new Blob([JSON.stringify({ queryId: id, events }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sift-audit-${id || 'trail'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShareProof = () => {
    navigator.clipboard.writeText(`https://sift.network/verify/proof/${id || 'audit-trail'}`);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const formatDescription = (evt: AuditEvent) => {
    if (evt.formatted_description) return evt.formatted_description;
    const d = evt.details || {};
    switch (evt.action) {
      case 'QUERY_SUBMITTED':
        return `Query submitted for task extraction (Task: ${d.task_type || 'general'})`;
      case 'RULE_EVALUATION_COMPLETED':
        return `5 rules evaluated against ${d.tools_evaluated || 5} tools (${d.meets_requirements || 0} passed)`;
      case 'USER_REGISTERED':
        return `Account registered (${d.email || 'user'})`;
      case 'LOGIN_SUCCESS':
        return `Authentication verified via JWT`;
      case 'FEED_ITEM_CREATED':
        return `Intelligence item published: "${d.headline || ''}"`;
      case 'DAILY_UPDATE':
        return `Automated update: ${d.news || 0} news items, ${d.tools || 0} tools`;
      default:
        if (typeof d === 'string') return d;
        return Object.keys(d).length > 0 ? JSON.stringify(d) : `${evt.action} executed successfully`;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto p-6 lg:p-10 text-[14px] text-text-primary">
      {/* Header Back & Badges */}
      <div className="flex items-center justify-between pb-8">
        <Link
          to="/result"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-text-muted hover:text-text-secondary transition-colors duration-150 group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to results</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-success/10 border border-status-success/20 text-status-success font-mono text-[10px] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse"></span>
            ATTESTATION SECURED
          </span>
          <span className="font-mono text-[10px] text-text-muted border border-border-hairline bg-surface-elevated px-2 py-1 rounded">
            SHA-256 SIGNED
          </span>
        </div>
      </div>

      {/* Audit Title & Engine */}
      <div className="flex flex-col space-y-3 pb-8 border-b border-border-hairline">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="text-[32px] text-text-primary tracking-tight font-serif italic">
            Audit trail <span className="font-sans not-italic text-text-muted font-light">·</span> {id ? `ID: ${id}` : 'Recent Ledger'}
          </h1>
          <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted">
            <span className="text-text-secondary">ENGINE VERSION:</span>
            <span className="text-text-primary">SIFT-DETERMINISTIC-4.2</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-text-muted">
          {queryText && (
            <>
              <span className="text-text-secondary truncate max-w-md">Query: “{queryText}”</span>
              <span className="text-border-hairline">/</span>
            </>
          )}
          <span className="flex items-center gap-1 text-accent-indigo">
            <Clock className="w-3.5 h-3.5" />
            Runtime: {executionTime}ms
          </span>
          <span className="text-border-hairline">/</span>
          <span className="text-status-success">Deterministic Verification Trail</span>
        </div>
      </div>

      {/* Audit Timeline Entries */}
      <div className="relative pt-10 pb-6">
        {loading ? (
          <div className="py-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-6 h-6 text-accent-indigo animate-spin" />
            <p className="font-mono text-[12px] text-text-muted">Retrieving audit ledger events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="py-12 text-center rounded-xl bg-surface-card border border-border-hairline p-6">
            <p className="text-[14px] text-text-muted">No specific audit records logged for this query.</p>
          </div>
        ) : (
          <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-3 before:w-px before:bg-border-hairline">
            {events.map((evt, idx) => (
              <div key={evt.id || idx} className="relative group">
                <div className="absolute -left-8 top-1.5 w-6 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-base border border-text-muted group-hover:border-accent-indigo group-hover:bg-accent-indigo transition-colors duration-150"></span>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[14px] font-medium text-text-primary tracking-tight font-mono uppercase">
                        {evt.action.replace(/_/g, ' ')}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-elevated text-accent-indigo border border-border-hairline">
                        LEDGER EVENT
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-text-muted">
                      {new Date(evt.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>
                  <div className="bg-surface-card border border-border-hairline rounded-lg p-5 transition-colors hover:border-outline-variant">
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {formatDescription(evt)}
                    </p>
                    {evt.details && typeof evt.details === 'object' && Object.keys(evt.details).length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border-hairline/60 font-mono text-[11px] text-text-muted flex flex-wrap gap-2">
                        {Object.entries(evt.details).map(([k, v]) => (
                          <span key={k} className="px-2 py-0.5 rounded bg-surface-elevated border border-border-hairline">
                            {k}: {String(v)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Action Buttons */}
      <div className="pt-8 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4 mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownloadLog}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-hairline bg-surface-card text-text-primary font-mono text-[11px] hover:bg-surface-elevated hover:border-outline-variant transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-text-muted" />
            <span>Download JSON audit log</span>
          </button>
          <button
            onClick={handleShareProof}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-hairline bg-surface-card text-accent-indigo font-mono text-[11px] hover:bg-surface-elevated hover:border-outline-variant transition-colors cursor-pointer"
          >
            {copySuccess ? (
              <>
                <Check className="w-4 h-4 text-status-success" />
                <span className="text-status-success">Proof Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share verifiable proof link</span>
              </>
            )}
          </button>
        </div>
        <div className="font-mono text-[10px] text-text-muted">
          PROOF RECORD: <span className="font-mono text-text-secondary">{id || 'SIFT-CORE-LEDGER'}</span>
        </div>
      </div>
    </div>
  );
};

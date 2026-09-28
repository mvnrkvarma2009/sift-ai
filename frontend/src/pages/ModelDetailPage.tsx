import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { modelsApi, ModelItem } from '../lib/api';
import { ArrowLeft, ExternalLink, Terminal, GitBranch, Loader2 } from 'lucide-react';
import { ModelCard } from '../components/models/ModelCard';

export const ModelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<ModelItem | null>(null);
  const [relatedModels, setRelatedModels] = useState<ModelItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!id) return;
      setLoading(true);
      try {
        const res = await modelsApi.getById(id);
        if (res.model) {
          setModel(res.model);
          // Fetch related open source models
          const listRes = await modelsApi.getModels(
            res.model.type,
            undefined,
            undefined,
            'default',
            4,
            0,
            res.model.source_type || 'open_source'
          );
          setRelatedModels(
            (listRes.models || []).filter((m) => m.id !== res.model.id).slice(0, 3)
          );
        }
      } catch (err) {
        console.error('Failed to load model details:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  if (loading) {
    return (
      <Layout showSidebar>
        <div className="p-16 text-center flex flex-col items-center justify-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-accent-indigo" />
          <span className="font-mono text-[13px] text-text-muted">Loading model profile...</span>
        </div>
      </Layout>
    );
  }

  if (!model) {
    return (
      <Layout showSidebar>
        <div className="p-12 text-center space-y-4">
          <h2 className="text-[20px] font-medium text-text-primary">Model Not Found</h2>
          <p className="text-[14px] text-text-muted">
            The requested foundation model profile could not be loaded.
          </p>
          <Link
            to="/models"
            className="inline-flex items-center gap-2 text-accent-indigo hover:underline font-mono text-[13px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to directory</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const isOpenSource = model.source_type === 'open_source' || model.type === 'open_source';
  const isClosedSource = model.source_type === 'closed_source' || model.type === 'closed_source';

  const skillsText = model.required_skills && model.required_skills.length > 0
    ? model.required_skills.join(', ')
    : '';

  const modelUrl = isOpenSource
    ? (model.hf_url || model.documentation_url || 'https://huggingface.co')
    : (model.docs_url || model.documentation_url || 'https://platform.openai.com/docs/models');

  const linkLabel = isOpenSource ? 'View on HuggingFace' : `View on ${model.provider}`;

  const capitalize = (s?: string) => {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Layout showSidebar>
      <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-8">
        {/* Back Link at top */}
        <div>
          <Link
            to="/models"
            className="inline-flex items-center gap-1.5 text-accent-indigo hover:underline font-mono text-[12px] uppercase transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to models directory</span>
          </Link>
        </div>

        {/* Header Profile */}
        <div className="p-8 rounded-2xl bg-surface-card border border-border-hairline space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              {/* Model name (32px serif) */}
              <h1 className="text-[32px] font-serif text-text-primary tracking-tight">
                {model.name}
              </h1>
              {/* Provider (14px muted) */}
              <p className="text-[14px] text-text-muted mt-1 font-mono">
                {model.provider} · {isOpenSource ? 'Open Source Weights' : 'API / Cloud Model'}
              </p>
            </div>

            {/* Type badge + External docs button */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-[11px] uppercase px-3 py-1 rounded-full border border-border-hairline bg-surface-elevated text-text-secondary">
                {capitalize(model.type || 'Chat')}
              </span>
              <a
                href={modelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1 rounded-full bg-accent-indigo text-white font-mono text-[11px] hover:bg-accent-indigo/90 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{linkLabel}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* "Best for" tags displayed as pills */}
          {model.best_for && Array.isArray(model.best_for) && model.best_for.length > 0 && (
            <div className="flex items-center gap-2 pt-2 border-t border-border-hairline flex-wrap">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider mr-1">
                BEST FOR:
              </span>
              {model.best_for.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-3 py-1 rounded-full border border-border-hairline text-text-secondary bg-surface-elevated font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Required Skills Highlight — ONLY for open source models with skills */}
          {isOpenSource && skillsText && (
            <div className="p-4 rounded-xl bg-surface-elevated/70 border border-accent-indigo/30 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="font-mono text-[10px] uppercase text-text-muted tracking-wider block">
                  REQUIRED SKILLS & RUNTIME
                </span>
                <span className="text-[15px] font-mono text-text-primary font-medium mt-0.5 block">
                  {skillsText}
                </span>
              </div>
              <span className="text-[12px] text-text-muted">
                Self-hostable on compatible hardware
              </span>
            </div>
          )}

          {/* Overview paragraph */}
          <div className="pt-2">
            <h3 className="font-mono text-[11px] uppercase text-text-muted tracking-wider mb-1.5">
              OVERVIEW
            </h3>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              {isOpenSource
                ? `${model.name} is an open-source model released by ${model.provider}. It provides fully downloadable weights for local evaluation, research, and self-hosted production deployments without external cloud subscription lock-in. Ideal for developers and teams requiring data privacy, custom fine-tuning, and direct hardware control.`
                : `${model.name} is a state-of-the-art foundation model from ${model.provider}. It is accessible via official API endpoints for production workloads, reasoning, and enterprise applications.`}
            </p>
          </div>
        </div>

        {/* Two-column deployment specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Runtime & Specs */}
          <div className="p-6 rounded-xl bg-surface-card border border-border-hairline space-y-4">
            <h3 className="text-[16px] font-medium text-text-primary flex items-center gap-2 pb-2 border-b border-border-hairline">
              <Terminal className="w-4 h-4 text-accent-indigo" />
              <span>Deployment & Specifications</span>
            </h3>

            <div className="space-y-3 font-mono text-[12px]">
              {isOpenSource && skillsText && (
                <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                  <span className="text-text-muted uppercase">Required Skills</span>
                  <span className="text-text-primary font-medium">{skillsText}</span>
                </div>
              )}
              <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                <span className="text-text-muted uppercase">Context Window</span>
                <span className="text-text-primary font-medium">{model.context_window || '128K'}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                <span className="text-text-muted uppercase">Modality</span>
                <span className="text-text-primary font-medium capitalize">{model.modality || model.category || 'chat'}</span>
              </div>
              {isOpenSource && (
                <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                  <span className="text-text-muted uppercase">Parameters</span>
                  <span className="text-text-primary font-medium">{model.parameters || '—'}</span>
                </div>
              )}
              <div className="flex items-center justify-between py-1">
                <span className="text-text-muted uppercase">Official Page</span>
                <a
                  href={modelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent-indigo hover:underline flex items-center gap-1"
                >
                  <span>{isOpenSource ? 'HuggingFace' : model.provider}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Licensing & Availability */}
          <div className="p-6 rounded-xl bg-surface-card border border-border-hairline space-y-4">
            <h3 className="text-[16px] font-medium text-text-primary flex items-center gap-2 pb-2 border-b border-border-hairline">
              <GitBranch className="w-4 h-4 text-emerald-400" />
              <span>Licensing & Availability</span>
            </h3>

            <div className="space-y-3 font-mono text-[12px]">
              <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                <span className="text-text-muted uppercase">License</span>
                <span className="text-text-primary font-medium text-emerald-400">{model.license || (isOpenSource ? 'Apache 2.0' : 'Proprietary')}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                <span className="text-text-muted uppercase">Hosting</span>
                <span className="text-text-primary font-medium">{isOpenSource ? 'Self-Hosted / Local hardware' : 'Provider API Cloud'}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border-hairline/60">
                <span className="text-text-muted uppercase">Release Date</span>
                <span className="text-text-primary font-medium">{model.release_date || '2026-09-22'}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-text-muted uppercase">Architecture</span>
                <span className="text-text-primary font-medium">{isOpenSource ? 'Open Weights' : 'API-Only'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related models */}
        {relatedModels.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-border-hairline">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-medium text-text-primary">Related Models</h2>
              <Link to="/models" className="font-mono text-[11px] text-accent-indigo hover:underline">
                View all models →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedModels.map((m) => (
                <ModelCard key={m.id} model={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

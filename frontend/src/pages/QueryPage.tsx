import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Skeleton } from '../components/ui/Skeleton';
import { queriesApi } from '../lib/api';

const TASK_STARTER_PROMPTS: Record<string, string> = {
  coding: 'I need an AI coding assistant that works with TypeScript in VS Code.',
  writing: 'I need an AI writing tool for long-form blog posts.',
  chatting: 'I need a general-purpose AI chatbot for daily Q&A.',
  research: 'I need an AI research tool that cites sources.',
  image: 'I need an AI image generator for concept art.',
  video: 'I need an AI video editing tool for short-form content.',
  presentations: 'I need a free presentation tool with PPTX export.',
  audio: 'I need an AI audio tool for podcast transcription.',
};

export const QueryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  // Read URL params and pre-fill textarea, auto-focus, do NOT auto-submit
  useEffect(() => {
    const qParam = searchParams.get('q');
    const taskParam = searchParams.get('task')?.toLowerCase();

    if (qParam) {
      setQuery(qParam);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 50);
    } else if (taskParam && TASK_STARTER_PROMPTS[taskParam]) {
      setQuery(TASK_STARTER_PROMPTS[taskParam]);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 50);
    }
  }, [searchParams]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsVerifying(true);
    try {
      const res = await queriesApi.submitQuery(query.trim());
      if (res && res.id) {
        navigate(`/result/${res.id}?q=` + encodeURIComponent(query));
        return;
      }
    } catch (err: any) {
      console.warn('[QUERY] API verification error, falling back to instant preview:', err.message);
    }
    // Fallback preview
    setTimeout(() => {
      navigate('/result?q=' + encodeURIComponent(query));
    }, 600);
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
    textareaRef.current?.focus();
  };

  return (
    <Layout showSidebar={true}>
      <div className="max-w-3xl mx-auto p-6 lg:p-12 space-y-8">
        <div>
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
            AI REQUIREMENT EXTRACTION & VERIFICATION
          </span>
          <h1 className="mt-2 text-[32px] font-serif font-normal text-text-primary tracking-tight">
            Verify tools against your requirements
          </h1>
          <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">
            Describe what you need in natural language. Sift uses Gemini to extract structured constraint rules, then executes deterministic assertions against our verified tool ledger.
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div className="bg-surface-card border border-border-hairline rounded-xl p-4 focus-within:border-accent-indigo transition-colors shadow-xs">
            <textarea
              ref={textareaRef}
              rows={4}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. I need an unmetered, zero-cost presentation editor that natively exports editable PPTX decks without requiring mandatory phone number registration..."
              className="w-full bg-transparent text-text-primary text-[15px] leading-relaxed placeholder:text-text-muted focus:outline-none resize-none"
            />
            <div className="flex items-center justify-between pt-3 border-t border-border-hairline mt-3">
              <span className="font-mono text-[10px] text-text-muted">
                PARSER: GEMINI 1.5 FLASH (STRUCTURED AST)
              </span>
              <button
                type="submit"
                disabled={isVerifying || !query.trim()}
                className="bg-accent-indigo text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-accent-indigo/90 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-40"
              >
                {isVerifying ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Extracting & Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Verify tools</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {isVerifying && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-accent-indigo">
              <span className="w-2 h-2 rounded-full bg-accent-indigo animate-ping"></span>
              <span>PARSING NATURAL LANGUAGE CONSTRAINTS...</span>
            </div>
            <Skeleton className="h-28 w-full rounded-xl" />
            <Skeleton className="h-44 w-full rounded-xl" />
          </div>
        )}

        {!isVerifying && (
          <div className="space-y-4 pt-4 border-t border-border-hairline">
            <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              EXAMPLE VERIFICATION PROMPTS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Free presentation tool with PPTX export',
                'AI coding assistant that works with TypeScript in VS Code',
                'Audio tool for podcast transcription and diarization',
                'In-memory vector database with zero-copy Rust bindings',
                'High-throughput LLM inference engine with FP8 quantization',
                'Autonomous web scraper with anti-bot evasion',
              ].map((example, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleExampleClick(example)}
                  className="p-3 bg-surface-card border border-border-hairline rounded-lg text-left text-[13px] text-text-secondary hover:text-text-primary hover:border-outline-variant transition-colors cursor-pointer"
                >
                  “{example}”
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Flame, Sparkles, Gift, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedTool {
  name: string;
  category: string;
  pricing: string;
  badge: string;
  detail: string;
  url?: string;
}

interface Collection {
  title: string;
  icon: any;
  tag: string;
  description: string;
  tools: FeaturedTool[];
}

export const DiscoverPage: React.FC = () => {
  const collections: Collection[] = [
    {
      title: 'Most Trending',
      icon: Flame,
      tag: 'HOTTEST RIGHT NOW',
      description: 'The fastest-growing AI systems with highest developer adoption this month.',
      tools: [
        { name: 'Cursor', category: 'Coding', pricing: 'Free Tier', badge: '95% Trending', detail: 'VS Code fork with deep agentic model integration and cascade edits.' },
        { name: 'ChatGPT', category: 'Chatting', pricing: 'Free Tier', badge: '94% Trending', detail: 'General-purpose reasoning, code interpretation, and canvas workflows.' },
        { name: 'Claude', category: 'Writing', pricing: 'Free Tier', badge: '93% Trending', detail: 'Long-context reasoning (200k tokens) and nuanced writing.' },
        { name: 'Midjourney', category: 'Image', pricing: 'Paid', badge: '92% Trending', detail: 'State-of-the-art artistic coherence and prompt rendering.' },
      ],
    },
    {
      title: 'Best Free Tools',
      icon: Gift,
      tag: '100% ZERO-COST',
      description: 'Generous unmetered free tiers and permissive open-source models without subscriptions.',
      tools: [
        { name: 'Codeium', category: 'Coding', pricing: 'Free', badge: 'Unlimited', detail: 'Single & multi-line code autocomplete across 70+ programming languages.' },
        { name: 'Stable Diffusion', category: 'Image', pricing: 'Free', badge: 'Open Weights', detail: 'Local execution via ComfyUI with zero cloud lock-in.' },
        { name: 'Whisper (OpenAI)', category: 'Audio', pricing: 'Free', badge: 'Open Source', detail: 'High-fidelity speech recognition and subtitle timestamping.' },
        { name: 'Semantic Scholar', category: 'Research', pricing: 'Free', badge: 'Academic Search', detail: '200M+ research papers indexed with automated TLDR summaries.' },
      ],
    },
    {
      title: 'New This Week',
      icon: Sparkles,
      tag: 'FRESH INTELLIGENCE',
      description: 'Recent frontier releases and breakthrough capabilities verified on Sift.',
      tools: [
        { name: 'Windsurf', category: 'Coding', pricing: 'Free Tier', badge: '87% Trending', detail: 'Agentic Cascade flows with speculative file editing.' },
        { name: 'Flux', category: 'Image', pricing: 'Free Tier', badge: 'Apache 2.0', detail: 'Next-generation open weights text-to-image with crisp typography.' },
        { name: 'Sora', category: 'Video', pricing: 'Waitlist', badge: 'World Sim', detail: 'Spatiotemporal video synthesis with consistent physics.' },
        { name: 'Mistral Le Chat', category: 'Chatting', pricing: 'Free Tier', badge: 'Open Frontier', detail: 'Free access to Mistral Large, Pixtral, and Codestral.' },
      ],
    },
    {
      title: "Editor's Picks",
      icon: Award,
      tag: 'PROVEN VALUE',
      description: 'Architect-reviewed tools demonstrating the highest verified reliability in production.',
      tools: [
        { name: 'ElevenLabs', category: 'Audio', pricing: 'Free Tier', badge: '91% Trending', detail: 'Industry-standard voice synthesis, translation, and cloning.' },
        { name: 'Gamma', category: 'Presentations', pricing: 'Free Tier', badge: 'Fluid Decks', detail: 'AI-assisted deck and document generation with PPTX export.' },
        { name: 'Perplexity', category: 'Research', pricing: 'Free Tier', badge: 'Cited Web', detail: 'Real-time conversational search with strict primary source citations.' },
        { name: 'Descript', category: 'Video', pricing: 'Free Tier', badge: 'Audio/Video', detail: 'Edit podcasts and screencasts just by editing the transcript text.' },
      ],
    },
  ];

  return (
    <Layout showSidebar>
      <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full space-y-10">
        <div>
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
            RADAR & CURATED TRACKS
          </span>
          <h1 className="mt-2 text-[32px] font-semibold text-text-primary tracking-tight">
            Discover Verified Collections
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Curated clusters of tools verified against strict functional criteria, pricing tiers, and benchmarked rules.
          </p>
        </div>

        <div className="space-y-12">
          {collections.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-border-hairline gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-surface-card border border-border-hairline flex items-center justify-center text-accent-indigo">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-semibold text-text-primary tracking-tight">
                        {col.title}
                      </h2>
                      <p className="text-[12px] text-text-muted">{col.description}</p>
                    </div>
                  </div>
                  <Link
                    to="/tools"
                    className="font-mono text-[11px] text-accent-indigo hover:underline flex items-center gap-1 uppercase"
                  >
                    View all tools <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {col.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-4 rounded-xl bg-surface-card border border-border-hairline hover:border-outline-variant transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h3 className="text-[16px] font-medium text-text-primary group-hover:text-accent-indigo transition-colors">
                            {tool.name}
                          </h3>
                          <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border border-border-hairline bg-surface-elevated text-text-muted">
                            {tool.pricing}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-text-muted uppercase">
                          {tool.category}
                        </span>
                        <p className="mt-2 text-[12px] text-text-secondary leading-relaxed line-clamp-3">
                          {tool.detail}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-border-hairline flex items-center justify-between font-mono text-[10px]">
                        <span className="text-accent-copper font-medium">{tool.badge}</span>
                        <Link
                          to={`/audit/${encodeURIComponent(tool.name.toLowerCase())}`}
                          className="text-accent-indigo hover:underline flex items-center gap-0.5"
                        >
                          Audit <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

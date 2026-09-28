import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionReveal } from '../common/SectionReveal';
import { useStaggerChildren } from '../../lib/mercuryMotion';

interface ShowcaseTool {
  name: string;
  provider: string;
  verdict: 'MEETS' | 'PARTIAL';
  fact: string;
}

const showcaseTools: ShowcaseTool[] = [
  {
    name: 'Google Stitch',
    provider: 'Google',
    verdict: 'MEETS',
    fact: 'Free while in beta. 350 generations/month.',
  },
  {
    name: 'v0.dev',
    provider: 'Vercel',
    verdict: 'MEETS',
    fact: 'Free $5 monthly credits. React + Next.js.',
  },
  {
    name: 'Bolt.new',
    provider: 'StackBlitz',
    verdict: 'MEETS',
    fact: '1M free tokens/month. Full-stack in browser.',
  },
  {
    name: 'Lovable',
    provider: 'Lovable',
    verdict: 'MEETS',
    fact: 'Free 5 build credits/day. Full-stack apps.',
  },
  {
    name: 'Replit Agent',
    provider: 'Replit',
    verdict: 'MEETS',
    fact: '$20/mo Core. Builds and hosts in one place.',
  },
  {
    name: 'Cursor',
    provider: 'Anysphere',
    verdict: 'MEETS',
    fact: 'Free Hobby tier. VS Code fork with Composer.',
  },
  {
    name: 'ZCode',
    provider: 'Z.ai',
    verdict: 'MEETS',
    fact: 'Free IDE. GLM-5.2 model. 5M tokens/day trial.',
  },
  {
    name: 'Windsurf',
    provider: 'Codeium',
    verdict: 'PARTIAL',
    fact: 'Free 25 credits/month. Cascade agent.',
  },
];

export const VerificationEngine: React.FC = () => {
  const { child: cardVariants } = useStaggerChildren(0.08);

  return (
    <SectionReveal stagger className="w-full">
      <section
        className="w-full px-6 lg:px-12 py-[80px] border-t border-[var(--border)] bg-surface-base"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col">
          {/* Section Header */}
          <motion.div variants={cardVariants} className="flex flex-col">
            <span className="font-mono text-[11px] leading-[14px] uppercase text-text-muted tracking-[0.15em]">
              THE VERIFICATION ENGINE
            </span>
            <h2 className="mt-[20px] font-serif text-[32px] leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] font-normal">
              We don't guess. We check.
            </h2>
            <p className="mt-[16px] text-[16px] leading-[1.6] text-[var(--text-secondary)] font-normal max-w-[640px]">
              Sift reads what you want to build, pulls out what you actually need, then checks every tool against those needs. Every decision has a reason.
            </p>
          </motion.div>

          {/* Two-Column Grid: 30% / 70% on desktop (>=1024px), stacked on tablet/mobile, 32px gap */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-[32px] items-stretch">
            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* COMPACT INPUT CARD (Left, 30% width)                            */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              variants={cardVariants}
              className="w-full flex flex-col h-full"
            >
              <div className="bg-[var(--surface-card)] border border-[var(--border)] border-l-2 border-l-accent-indigo rounded-xl p-[20px] flex flex-col justify-between h-full shadow-sm">
                <div className="flex flex-col">
                  {/* Label */}
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    SIFT UNDERSTOOD
                  </span>

                  {/* Quote in hairline-bordered box with 2px indigo left border */}
                  <div className="mt-3 p-3 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] border-l-2 border-l-accent-indigo">
                    <p className="text-[15px] italic leading-[1.5] text-[var(--text-primary)] font-sans">
                      "I want to build a full-stack app with React and a database. Free tier. No credit card."
                    </p>
                  </div>

                  {/* Three Pills */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <span className="px-2.5 py-1 rounded-full text-[12px] font-sans border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)]">
                      Full-stack
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[12px] font-sans border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)]">
                      React + Database
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[12px] font-sans border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)]">
                      Free tier
                    </span>
                  </div>

                  {/* Compact Process Row */}
                  <div className="flex items-center flex-wrap gap-3 mt-4 pt-3 border-t border-[var(--border)]">
                    <div className="flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="font-mono text-[11px] text-teal-400 font-medium">Read</span>
                    </div>
                    <span className="text-text-muted/30 text-[11px]">→</span>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="font-mono text-[11px] text-purple-400 font-medium">Extract</span>
                    </div>
                    <span className="text-text-muted/30 text-[11px]">→</span>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-[#E8B87A] shrink-0" />
                      <span className="font-mono text-[11px] text-[#E8B87A] font-medium">Verify</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Stat Block */}
                <div className="mt-5 pt-3 border-t border-[var(--border)] flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    TOOLS FOUND
                  </span>
                  <span className="text-[32px] font-semibold text-accent-indigo leading-tight mt-0.5">
                    8
                  </span>
                  <span className="text-[12px] text-text-muted mt-0.5">
                    matching your needs
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* EXPANDED OUTPUT CARD — 8 TOOL SHOWCASE (Right, 70% width)       */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              variants={cardVariants}
              className="w-full flex flex-col h-full"
            >
              <div className="bg-[var(--surface-card)] border border-[var(--border)] border-l-2 border-l-teal-500 rounded-xl p-[24px] flex flex-col justify-between h-full shadow-sm">
                <div>
                  {/* Header Label */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                      SIFT VERIFIED 8 TOOLS
                    </span>
                    <span className="font-mono text-[11px] text-teal-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block animate-pulse" />
                      DETERMINISTIC RULES APPLIED
                    </span>
                  </div>

                  {/* 2x4 Grid of 8 Tools (2 columns on tablet/desktop, 1 column on mobile) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {showcaseTools.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-[14px] rounded-[10px] border border-[var(--border)] bg-[var(--surface-elevated)] flex flex-col justify-between transition-colors duration-200"
                      >
                        {/* Top Row: Tool Name + Provider + Verdict Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-[16px] font-medium text-[var(--text-primary)] whitespace-nowrap">
                              {tool.name}
                            </span>
                            <span className="text-text-muted text-[12px] whitespace-nowrap">
                              · {tool.provider}
                            </span>
                          </div>
                          {/* Verdict Badge: filled pill, 11px monospace uppercase */}
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase shrink-0 ${
                              tool.verdict === 'MEETS'
                                ? 'bg-teal-500/12 text-teal-400'
                                : 'bg-[#E8B87A]/12 text-[#E8B87A]'
                            }`}
                          >
                            {tool.verdict}
                          </span>
                        </div>

                        {/* Fact Line: 13px muted */}
                        <p className="mt-2 text-[13px] text-text-muted leading-snug">
                          {tool.fact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 mt-4 border-t border-[var(--border)] flex items-center justify-between text-[12px]">
                  <span className="text-text-muted font-sans">
                    42 more tools also evaluated
                  </span>
                  <Link
                    to="/tools"
                    className="font-medium text-accent-indigo hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>See the full list →</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};

export default VerificationEngine;

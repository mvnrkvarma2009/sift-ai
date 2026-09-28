import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { SiftLogo } from '../brand/SiftLogo';
import { SectionReveal } from '../common/SectionReveal';

const nameLetters = "Nagendra Varma".split('');

export function FooterCredits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    // Render everything statically with no animation
    return (
      <div className="flex flex-col items-center gap-4 pt-8">
        <p className="text-sm">
          <span className="text-text-muted">Made by </span>
          <span className="text-accent-indigo font-medium">Nagendra Varma</span>
        </p>
        <p className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
          SIFT · DAILY INTELLIGENCE FOR BUILDERS · 2026
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-text-muted">
          <a href="https://github.com/mvnrkvarma2009" target="_blank" rel="noopener noreferrer" className="hover:text-accent-indigo transition-colors">
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/nagendra-varma-mudunuri-4366103a5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-indigo transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://www.instagram.com/m.nagendra_varma?stkn=MWF5Zm05dDZlb25rdw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-indigo transition-colors"
          >
            Instagram
          </a>
          <span>·</span>
          <a href="mailto:nagendravarma0307@gmail.com" className="hover:text-accent-indigo transition-colors">
            nagendravarma0307@gmail.com
          </a>
        </div>
        <p className="mt-[24px] text-[11px] font-mono text-text-muted text-center">
          Released under the{' '}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-indigo transition-colors"
          >
            MIT License
          </a>{' '}
          · 2026
        </p>
      </div>
    );
  }

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 pt-8">
      {/* Line 1 - Signature */}
      <div className="flex items-center gap-2">
        <motion.span
          className="text-sm text-text-muted"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Made by
        </motion.span>

        <span className="relative inline-flex items-baseline">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              className="text-sm font-medium text-accent-indigo inline-block"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.045,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}

          {/* Steady glow layer after last letter settles */}
          <motion.span
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.7 }}
            style={{
              textShadow: '0 0 20px rgba(82, 98, 255, 0.5)',
              color: 'transparent',
            }}
            aria-hidden="true"
          >
            Nagendra Varma
          </motion.span>

          {/* Underline that extends from left to right */}
          <motion.div
            className="absolute left-0 bottom-[-4px] h-px bg-accent-indigo/40"
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.9,
            }}
          />
        </span>
      </div>

      {/* Line 2 - Tagline */}
      <motion.p
        className="text-[11px] font-mono uppercase tracking-widest text-text-muted"
        initial={{ opacity: 0, y: 4 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 2.4 }}
      >
        SIFT · DAILY INTELLIGENCE FOR BUILDERS · 2026
      </motion.p>

      {/* Line 3 - Links */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-text-muted"
        initial={{ opacity: 0, y: 4 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 2.4 }}
      >
        <a href="https://github.com/mvnrkvarma2009" target="_blank" rel="noopener noreferrer" className="hover:text-accent-indigo transition-colors">
          GitHub
        </a>
        <span>·</span>
        <a
          href="https://www.linkedin.com/in/nagendra-varma-mudunuri-4366103a5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-indigo transition-colors"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a
          href="https://www.instagram.com/m.nagendra_varma?stkn=MWF5Zm05dDZlb25rdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-indigo transition-colors"
        >
          Instagram
        </a>
        <span>·</span>
        <a href="mailto:nagendravarma0307@gmail.com" className="hover:text-accent-indigo transition-colors">
          nagendravarma0307@gmail.com
        </a>
      </motion.div>

      {/* Line 4 - MIT License */}
      <motion.p
        className="mt-[24px] text-[11px] font-mono text-text-muted text-center"
        initial={{ opacity: 0, y: 4 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 2.6 }}
      >
        Released under the{' '}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-indigo transition-colors"
        >
          MIT License
        </a>{' '}
        · 2026
      </motion.p>
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <SectionReveal className="w-full">
      <footer className="w-full bg-surface-card border-t border-border-hairline pt-[64px] pb-[48px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border-hairline">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <SiftLogo size={24} />
                <span className="text-[18px] text-text-primary font-medium">Sift</span>
              </div>
              <p className="text-[12px] text-text-muted leading-relaxed">
                Deterministic intelligence verification platform for high-signal technical research.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">
                PLATFORM
              </p>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <Link
                    to="/dashboard"
                    className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    Signal Feed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tools"
                    className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    Tool Audits
                  </Link>
                </li>
                <li>
                  <Link
                    to="/discover"
                    className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    Radar Explorer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">
                RESOURCES
              </p>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <Link
                    to="/audit/tome"
                    className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  >
                    Methodology
                  </Link>
                </li>
                <li>
                  <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    API Reference
                  </span>
                </li>
                <li>
                  <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    System Changelog
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-4">
                GOVERNANCE
              </p>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </li>
                <li>
                  <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    Verification Security
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
              © 2026 SIFT RESEARCH ARCHITECTURE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6 font-mono text-[10px] text-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-status-success"></span>
                TERMINAL VERIFIED
              </span>
              <span>LATENCY 12MS</span>
            </div>
          </div>

          {/* Signature Reveal Credits Block */}
          <div className="mt-10 pt-6 border-t border-border-hairline">
            <FooterCredits />
          </div>
        </div>
      </footer>
    </SectionReveal>
  );
};

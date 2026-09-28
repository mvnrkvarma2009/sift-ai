import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../common/SectionReveal';
import { useStaggerChildren } from '../../lib/mercuryMotion';

export const HowItWorks: React.FC = () => {
  const { child: colVariants } = useStaggerChildren(0.08);

  return (
    <SectionReveal stagger className="w-full">
      <section id="how-it-works" className="w-full px-6 lg:px-12 pt-[96px] pb-[96px] border-t border-border-hairline bg-surface-base">
        <div className="max-w-[1200px] mx-auto flex flex-col">
          <span className="font-mono text-[11px] leading-[14px] uppercase text-text-muted tracking-[0.15em]">
            HOW IT WORKS
          </span>
          <h2 className="mt-[24px] font-serif text-[40px] leading-[1.15] tracking-[-0.02em] text-text-primary font-normal">
            Three things. Every morning.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Col 01 */}
            <motion.div variants={colVariants} className="p-[20px] rounded-xl border border-border-hairline bg-surface-card flex flex-col justify-start">
              <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                01
              </span>
              <h3 className="mt-6 text-[20px] leading-[1.4] text-text-primary font-medium">
                Read the feed
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
                Every AI release, funding round, and tool launch — curated, summarized, and ranked.
              </p>
            </motion.div>
            {/* Col 02 */}
            <motion.div variants={colVariants} className="p-[20px] rounded-xl border border-border-hairline bg-surface-card flex flex-col justify-start">
              <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                02
              </span>
              <h3 className="mt-6 text-[20px] leading-[1.4] text-text-primary font-medium">
                Search the tools
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
                Type what you want to do. Sift extracts your requirements and checks them against every tool we track.
              </p>
            </motion.div>
            {/* Col 03 */}
            <motion.div variants={colVariants} className="p-[20px] rounded-xl border border-border-hairline bg-surface-card flex flex-col justify-start">
              <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                03
              </span>
              <h3 className="mt-6 text-[20px] leading-[1.4] text-text-primary font-medium">
                Verify with rules
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
                Gemini extracts. Rules decide. Every verdict comes with a full audit trail you can read.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../common/SectionReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { toolsApi } from '../../lib/api';
import { useStaggerChildren } from '../../lib/mercuryMotion';

export const StatsStrip: React.FC = () => {
  const [toolsCount, setToolsCount] = useState<number>(1000);
  const { child: statVariants } = useStaggerChildren(0.08);

  useEffect(() => {
    let mounted = true;
    toolsApi.getStats()
      .then((data) => {
        if (mounted && data?.total) {
          setToolsCount(data.total);
        }
      })
      .catch(() => {
        // Fallback already set to 1000
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SectionReveal stagger className="w-full">
      <section className="w-full px-6 lg:px-12 pt-[64px] pb-[64px] border-y border-border-hairline bg-surface-card">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left md:text-center">
            <motion.div variants={statVariants} className="flex flex-col md:items-center">
              <span className="font-serif text-[56px] leading-[1.1] text-text-primary tracking-tight font-normal">
                <AnimatedCounter value={toolsCount} suffix="+" />
              </span>
              <span className="mt-3 font-mono text-[13px] uppercase text-text-muted tracking-[0.15em]">
                TOOLS VERIFIED
              </span>
            </motion.div>
            <motion.div variants={statVariants} className="flex flex-col md:items-center border-t md:border-t-0 md:border-l md:border-r border-border-hairline pt-8 md:pt-0">
              <span className="font-serif text-[56px] leading-[1.1] text-text-primary tracking-tight font-normal">
                <AnimatedCounter value={10000} suffix="+" />
              </span>
              <span className="mt-3 font-mono text-[13px] uppercase text-text-muted tracking-[0.15em]">
                QUERIES PROCESSED
              </span>
            </motion.div>
            <motion.div variants={statVariants} className="flex flex-col md:items-center border-t md:border-t-0 border-border-hairline pt-8 md:pt-0">
              <span className="font-serif text-[56px] leading-[1.1] text-text-primary tracking-tight font-normal">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="mt-3 font-mono text-[13px] uppercase text-text-muted tracking-[0.15em]">
                DETERMINISTIC VERDICTS
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};

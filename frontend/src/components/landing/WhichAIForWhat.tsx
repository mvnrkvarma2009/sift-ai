import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useStaggerChildren } from '../../lib/mercuryMotion';
import { SectionReveal } from '../common/SectionReveal';
import {
  Code,
  PenLine,
  MessageSquare,
  Search,
  Image,
  Video,
  Presentation,
  AudioLines,
  BarChart,
  Megaphone,
  Palette,
  Mic,
  ArrowRight,
} from 'lucide-react';

interface CategoryCard {
  id: string;
  name: string;
  best: string;
  icon: React.ComponentType<{ className?: string }>;
  taskParam: string;
}

const CATEGORIES: CategoryCard[] = [
  { id: 'coding', name: 'Coding', best: 'Best: Cursor', icon: Code, taskParam: 'coding' },
  { id: 'writing', name: 'Writing', best: 'Best: Claude', icon: PenLine, taskParam: 'writing' },
  { id: 'chatting', name: 'Chatting', best: 'Best: ChatGPT', icon: MessageSquare, taskParam: 'chatting' },
  { id: 'research', name: 'Research', best: 'Best: Perplexity', icon: Search, taskParam: 'research' },
  { id: 'image', name: 'Image', best: 'Best: Midjourney', icon: Image, taskParam: 'image' },
  { id: 'video', name: 'Video', best: 'Best: Runway', icon: Video, taskParam: 'video' },
  { id: 'presentations', name: 'Presentations', best: 'Best: Gamma', icon: Presentation, taskParam: 'presentations' },
  { id: 'audio', name: 'Audio', best: 'Best: Suno', icon: AudioLines, taskParam: 'audio' },
  { id: 'data', name: 'Data', best: 'Best: Julius AI', icon: BarChart, taskParam: 'data' },
  { id: 'marketing', name: 'Marketing', best: 'Best: Surfer SEO', icon: Megaphone, taskParam: 'marketing' },
  { id: 'design', name: 'Design', best: 'Best: Figma AI', icon: Palette, taskParam: 'design' },
  { id: 'voice', name: 'Voice', best: 'Best: ElevenLabs', icon: Mic, taskParam: 'voice' },
];

export const WhichAIForWhat: React.FC = () => {
  const [task, setTask] = useState('');
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleCategoryClick = (taskParam: string) => {
    navigate(`/query?task=${taskParam}`);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;
    navigate(`/query?q=${encodeURIComponent(trimmed)}`);
  };

  const { parent: gridContainerVariants, child: cardVariants } = useStaggerChildren(0.05, 0.4);

  const iconVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }
    : {
        hidden: { opacity: 0, y: 6 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
        },
      };

  // Variants for scroll animation
  const headerVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const delayedFadeVariants = (delay: number) => ({
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.5, delay: shouldReduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  });

  return (
    <SectionReveal stagger className="w-full">
      <section className="w-full py-[64px] lg:py-[96px] bg-surface-base border-t border-b border-border-hairline">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          {/* SECTION HEADER */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center max-w-[680px]"
          >
            <span className="font-mono text-[11px] leading-[14px] uppercase text-text-muted tracking-[0.15em]">
              WHICH AI FOR WHAT
            </span>
            <h2 className="mt-[24px] font-serif text-[36px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-text-primary font-normal">
              Tell Sift what you want to do.
            </h2>
            <p className="mt-[16px] text-[15px] sm:text-[16px] leading-[1.6] text-text-secondary font-normal max-w-[560px]">
              Pick a category below, or type your own task. Sift extracts your requirements and verifies which AI tool actually fits.
            </p>
          </motion.div>

          {/* CATEGORY GRID */}
          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-[64px] w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  variants={cardVariants}
                  whileHover={
                    shouldReduceMotion
                      ? { borderColor: 'var(--accent)' }
                      : { y: -2, borderColor: 'var(--accent)' }
                  }
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onClick={() => handleCategoryClick(cat.taskParam)}
                  className="p-3.5 sm:p-5 rounded-[12px] border border-border-hairline bg-surface-card hover:bg-surface-elevated transition-colors text-left cursor-pointer group flex flex-col justify-between min-h-[105px] sm:min-h-[110px]"
                >
                  <div className="flex items-center justify-between w-full">
                    <motion.span variants={iconVariants} className="inline-flex">
                      <Icon className="w-5 h-5 text-text-muted group-hover:text-accent-indigo transition-colors" />
                    </motion.span>
                    <span className="font-mono text-[10px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                      EXPLORE →
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-[15px] font-medium text-text-primary leading-snug group-hover:text-text-primary">
                      {cat.name}
                    </h3>
                    <p className="text-[12px] text-text-muted mt-0.5">{cat.best}</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

        {/* CUSTOM INPUT */}
        <motion.div
          variants={delayedFadeVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 w-full max-w-[760px]"
        >
          <div className="rounded-[12px] border border-border-hairline p-6 bg-surface-card text-left transition-all duration-200 focus-within:border-accent-indigo focus-within:ring-3 focus-within:ring-accent-indigo/20">
            <span className="block font-mono text-[11px] uppercase tracking-widest text-text-muted">
              OR TYPE YOUR OWN TASK
            </span>
            <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-3">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="I need a free tool to transcribe my podcast episodes into text."
                className="w-full bg-transparent text-[15px] sm:text-[16px] text-text-primary placeholder:text-text-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit task"
                className="w-10 h-10 rounded-[8px] bg-accent-indigo flex items-center justify-center text-white hover:bg-accent-indigo/90 transition-colors shrink-0 shadow-sm cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* CTA BELOW */}
        <motion.div
          variants={delayedFadeVariants(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => navigate('/query')}
            className="inline-flex items-center gap-1.5 text-accent-indigo font-medium text-[14px] hover:underline cursor-pointer group"
          >
            <span>Try a real query</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  </SectionReveal>
  );
};

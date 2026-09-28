import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { useLenis } from '../common/SmoothScroll';

const easeSnap = [0.16, 1, 0.3, 1] as const;
const stepSpring = { type: 'spring', stiffness: 200, damping: 22, mass: 0.6 } as const;

export function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;

  // FIX 1 — Lenis Scroll Progress Sync
  const lenis = useLenis();
  const rawProgress = useMotionValue(0);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      rawProgress.set(p);
    };

    onScroll();

    if (lenis) {
      lenis.on('scroll', onScroll);
      return () => {
        lenis.off('scroll', onScroll);
      };
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [lenis, rawProgress]);

  // FIX 1 & FIX 5 — Spring Smoothing on Scroll Progress (bypassed if prefers-reduced-motion)
  const springProgress = useSpring(rawProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
    restDelta: 0.0005,
  });

  const smoothedProgress = shouldReduceMotion ? rawProgress : springProgress;

  // FIX 1 — Stable MotionValues driven by smoothedProgress
  const slide1Opacity = useTransform(smoothedProgress, [0, 0.28, 0.36], [1, 1, 0], { clamp: true });
  const slide2Opacity = useTransform(smoothedProgress, [0.32, 0.40, 0.60, 0.68], [0, 1, 1, 0], { clamp: true });
  const slide3Opacity = useTransform(smoothedProgress, [0.64, 0.72, 1], [0, 1, 1], { clamp: true });

  // FIX 2 — Track activeIndex (0 | 1 | 2) without re-rendering on every scroll frame
  const [activeIndex, setActiveIndex] = useState<0 | 1 | 2>(0);
  useMotionValueEvent(smoothedProgress, 'change', (p) => {
    const next = p < 0.36 ? 0 : p < 0.68 ? 1 : 2;
    if (next !== activeIndex) setActiveIndex(next);
  });

  // Theme detection
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = mounted ? (resolvedTheme || theme) === 'dark' : true;

  // Viewport resize tracking
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation helper for step indicator clicks
  const scrollToSlide = (index: 0 | 1 | 2) => {
    setActiveIndex(index);
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const sectionHeight = sectionRef.current.offsetHeight;
    const scrollableDistance = Math.max(0, sectionHeight - window.innerHeight);
    let targetTop = scrollTop;
    if (index === 0) {
      targetTop = scrollTop + 40;
    } else if (index === 1) {
      targetTop = scrollTop + scrollableDistance * 0.50;
    } else {
      targetTop = scrollTop + scrollableDistance * 0.85;
    }

    if (lenis) {
      lenis.scrollTo(targetTop, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  // Slide 1 News Items (5 rows)
  const newsItems = [
    {
      tag: 'AI',
      tagColor: 'text-[#14B8A6]',
      time: '2h ago',
      headline: 'OpenAI ships GPT-6 Sol and GPT-6 Luna together',
    },
    {
      tag: 'STARTUP',
      tagColor: 'text-[#F59E0B]',
      time: '4h ago',
      headline: 'Qwen 3.8 Max tops LMSYS open-weight board',
    },
    {
      tag: 'TECH',
      tagColor: 'text-[#6366F1]',
      time: '6h ago',
      headline: 'Xiaomi MiMo-V2.6-Pro enters top-5 on LMSYS',
    },
    {
      tag: 'FUNDING',
      tagColor: 'text-[#F59E0B]',
      time: '8h ago',
      headline: 'Bengaluru AI infra startup raises $120M Series B',
    },
    {
      tag: 'AI',
      tagColor: 'text-[#14B8A6]',
      time: '10h ago',
      headline: 'Anthropic ships Claude Opus 5.5 at 40% lower cost',
    },
  ];

  // Slide 2 Verdict Rows (2 rows to prevent overflow on all viewports)
  const verdictRows = [
    {
      name: 'Cursor',
      provider: 'Anysphere',
      reason: 'Free tier · TypeScript · VS Code',
      secondary: '2,000 completions/month',
      verdict: 'MEETS',
      type: 'teal',
    },
    {
      name: 'Codeium',
      provider: 'Codeium',
      reason: 'Free forever · TypeScript · VS Code',
      secondary: 'Unlimited completions',
      verdict: 'MEETS',
      type: 'teal',
    },
  ];

  // FIX 2 — Row Stagger Variants (hidden / show with 0.06 stagger)
  const staggerRowContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const staggerRowItem = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 8,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // RENDER SLIDE 1 (Tight stacking, hairlines, 1:1 pixel rendering)
  const renderSlide1 = (isMobileCard?: boolean) => {
    const displayedItems = isMobileCard ? newsItems.slice(0, 3) : newsItems.slice(0, 4);
    const isActive = activeIndex === 0;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isMobileCard ? '0px' : '28px 40px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        className="w-full select-none"
      >
        {/* ZONE A — Header */}
        <div className="flex flex-col shrink-0">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, delay: 0, ease: easeSnap }}
            className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold leading-[1.3] text-[var(--text-muted)]"
          >
            <span>TODAY · THU 25 SEP</span>
            <span>EDITION 084</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.30, delay: 0.06, ease: easeSnap }}
            className="font-sans text-[20px] sm:text-[22px] font-semibold text-[var(--text-primary)] mt-1 leading-[1.2]"
          >
            Five things that matter today.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.25, delay: 0.12, ease: easeSnap }}
            className="text-[12px] sm:text-[13px] italic text-[var(--text-muted)] mt-0.5 font-sans leading-[1.4]"
          >
            Filtered from 1,000+ sources.
          </motion.p>
        </div>

        {/* ZONE B — 4 News Rows with FIX 2 Stagger */}
        <motion.div
          variants={staggerRowContainer}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '8px',
            minHeight: 0,
            overflow: 'hidden',
            margin: '8px 0',
          }}
          className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)] py-1"
        >
          {displayedItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerRowItem}
              style={{
                flex: '0 0 auto',
                minHeight: 0,
              }}
              className="py-[5px] flex items-center justify-between gap-3 text-[12px] sm:text-[13px] leading-snug group"
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <span className={`font-mono text-[9px] sm:text-[10px] uppercase font-bold shrink-0 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <span className="font-sans font-medium text-[var(--text-primary)] truncate group-hover:text-[var(--accent)] transition-colors">
                  {item.headline}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)] shrink-0">
                {item.time}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ZONE C — Footer */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.25, delay: 0.36, ease: easeSnap }}
          className="flex justify-between items-center text-[11px] sm:text-[12px] font-sans font-medium text-[var(--text-muted)] shrink-0 leading-[1.4] pt-1"
        >
          <span>5 of 5 read</span>
          <span className="text-[var(--text-secondary)]">Next edition 6 AM EST</span>
        </motion.div>
      </div>
    );
  };

  // RENDER SLIDE 2 (Verdict List with Pill Tag)
  const renderSlide2 = (isMobileCard?: boolean) => {
    const isActive = activeIndex === 1;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isMobileCard ? '0px' : '28px 40px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        className="w-full select-none"
      >
        {/* ZONE A — Header */}
        <div className="flex flex-col shrink-0">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, delay: 0, ease: easeSnap }}
            className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold leading-[1.3]"
          >
            <span>TASK VERIFICATION</span>
            <span className="text-[var(--accent)] font-semibold">RULE ENGINE · LIVE</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.30, delay: 0.06, ease: easeSnap }}
            className="font-sans text-[20px] sm:text-[22px] font-semibold text-[var(--text-primary)] mt-1 leading-[1.2]"
          >
            Free coding assistant with TypeScript support.
          </motion.h2>

          {/* Extracted constraints pills */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.25, delay: 0.12, ease: easeSnap }}
            className="flex items-center gap-1.5 mt-2 flex-wrap"
          >
            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20 font-medium">
              free tier
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)] font-medium">
              TypeScript
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)] font-medium">
              VS Code
            </span>
          </motion.div>
        </div>

        {/* ZONE B — 2 Verdict Cards with FIX 2 Stagger */}
        <motion.div
          variants={staggerRowContainer}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '8px',
            minHeight: 0,
            overflow: 'hidden',
            margin: '8px 0',
          }}
        >
          {verdictRows.map((tool) => (
            <motion.div
              key={tool.name}
              variants={staggerRowItem}
              style={{
                flex: '0 0 auto',
                minHeight: 0,
              }}
              className="p-[10px_14px] rounded-[10px] bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between gap-3 shadow-sm hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-semibold text-[14px] sm:text-[15px] text-[var(--text-primary)] leading-[1.2]">
                    {tool.name}
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-[var(--text-muted)] font-sans">
                    {tool.provider}
                  </span>
                </div>
                <span className="text-[11px] sm:text-[12px] text-[var(--text-secondary)] font-sans leading-[1.4] mt-0.5">
                  {tool.reason}
                </span>
              </div>

              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="px-2 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider text-[#14B8A6] bg-[#14B8A6]/10 border border-[#14B8A6]/20">
                  MEETS
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)]">
                  {tool.secondary}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ZONE C — Footer */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.30, delay: 0.60, ease: easeSnap }}
          className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[11px] sm:text-[12px] shrink-0 leading-[1.4]"
        >
          <span className="text-[var(--text-muted)] font-sans font-medium">
            45 more tools checked.
          </span>
          <Link
            to="/audit/cursor"
            className="font-sans font-medium text-[var(--accent)] hover:underline flex items-center gap-1"
          >
            <span>See full audit →</span>
          </Link>
        </motion.div>
      </div>
    );
  };

  // RENDER SLIDE 3 (Audit Trail with Replayable Proof)
  const renderSlide3 = (isMobileCard?: boolean) => {
    const isActive = activeIndex === 2;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isMobileCard ? '0px' : '28px 40px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          justifyContent: 'space-between',
        }}
        className="w-full select-none"
      >
        {/* Header Bar */}
        <div className="flex flex-col shrink-0">
          <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono leading-[1.3]">
            <span className="text-[var(--text-muted)] tracking-wider font-semibold uppercase">
              AUDIT TRAIL · CURSOR
            </span>
            <span className="text-[#059669] dark:text-[#10B981] font-semibold flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#10B981]" />
              SHA-256 SIGNED
            </span>
          </div>

          <h2 className="font-sans text-[18px] font-semibold text-[var(--text-primary)] mt-1.5 leading-[1.2]">
            Every Sift answer comes with proof.
          </h2>
          <p className="text-[12px] italic text-[var(--text-muted)] mt-0.5 font-sans leading-[1.4]">
            See exactly how we reached this verdict.
          </p>
        </div>

        {/* 3 Numbered Steps with FIX 2 Stagger */}
        <motion.div
          variants={staggerRowContainer}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
          style={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '12px',
            minHeight: 0,
            overflow: 'hidden',
            margin: '8px 0',
          }}
        >
          {/* Step 01 */}
          <motion.div variants={staggerRowItem} className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-[12px] font-bold text-[var(--accent)]">
                01
              </span>
              <span className="font-sans text-[13px] font-semibold text-[var(--text-primary)]">
                You asked
              </span>
            </div>
            <p className="text-[12px] text-[var(--text-secondary)] font-sans italic pl-6">
              "I need a free coding assistant for TypeScript"
            </p>
          </motion.div>

          {/* Step 02 */}
          <motion.div variants={staggerRowItem} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-[12px] font-bold text-[var(--accent)]">
                02
              </span>
              <span className="font-sans text-[13px] font-semibold text-[var(--text-primary)]">
                We extracted 3 requirements
              </span>
            </div>
            <div className="flex items-center gap-2 pl-6 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] font-medium">
                Coding
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] font-medium">
                Free
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] font-medium">
                TypeScript
              </span>
            </div>
          </motion.div>

          {/* Step 03 */}
          <motion.div variants={staggerRowItem} className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-[12px] font-bold text-[var(--accent)]">
                03
              </span>
              <span className="font-sans text-[13px] font-semibold text-[var(--text-primary)]">
                Rules verified 47 tools
              </span>
            </div>
            <p className="text-[12px] text-[var(--text-secondary)] font-sans pl-6">
              Cursor passed all checks. 46 others filtered out.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[11px] pt-2 border-t border-[var(--border)] shrink-0">
          <span className="font-sans text-[var(--text-muted)]">
            Built by{' '}
            <span className="text-[var(--accent)] font-medium cursor-pointer hover:underline">
              Nagendra Varma
            </span>
          </span>
          <span className="font-mono text-[var(--text-muted)]">
            Made in 2026
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      style={{ height: isMobile ? '200vh' : '300vh' }}
      className="relative w-full bg-[var(--background)]"
    >
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: '72px',
          height: 'calc(100vh - 72px)',
          maxHeight: 'calc(100vh - 72px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '10px 0',
        }}
      >
        {/* Mobile (<768px): Full-width card with hairline border */}
        <div className="w-full max-w-[480px] mx-auto px-2 relative z-10 block md:hidden">
          <div className="w-full border border-[var(--border)] rounded-[14px] p-5 shadow-xl bg-[var(--surface)] relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {activeIndex === 0 && renderSlide1(true)}
            {activeIndex === 1 && renderSlide2(true)}
            {activeIndex === 2 && renderSlide3(true)}
          </div>
        </div>

        {/* Desktop & Tablet: Wrap laptop + headline + step indicator in a single flex-col */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
          className="hidden md:flex flex-col items-center justify-center w-full"
        >
          {/* FRONT-FACING LAPTOP FRAME — Motion A Entrance */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 32, scale: 0.97, filter: 'blur(6px)' }
            }
            whileInView={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
            }
            style={{
              width: 'min(980px, 76vw, calc((100vh - 210px) * 1.6))',
              aspectRatio: '16 / 10',
              maxHeight: 'calc(100vh - 210px)',
              marginInline: 'auto',
              marginBottom: '6px',
              flexShrink: 0,
            }}
            className="laptop-mockup-wrapper relative flex flex-col items-center justify-center overflow-visible shrink-0 select-none"
          >
            {/* INNER LID / LAPTOP WRAPPER — Motion B Subtle Idle Float */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -2, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
              }
              className="relative flex flex-col items-center w-full"
            >
              {/* LAYER 1 — LID */}
              <div
                style={{
                  width: '100%',
                  marginInline: 'auto',
                  padding: '3px',
                  borderRadius: '12px 12px 6px 6px',
                  background: 'var(--laptop-lid-bg)',
                  border: '1px solid var(--laptop-lid-border)',
                  boxShadow: 'var(--laptop-shadow)',
                  position: 'relative',
                }}
                className="relative w-full"
              >
                {/* Top highlight */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '12%',
                    right: '12%',
                    height: '1px',
                    background: 'var(--laptop-lid-highlight)',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                />

                {/* LAYER 2 — BEZEL */}
                <div
                  style={{
                    padding: '5px 5px 12px 5px',
                    background: 'var(--laptop-bezel-bg)',
                    borderRadius: '10px 10px 4px 4px',
                    position: 'relative',
                  }}
                  className="relative w-full"
                >
                  {/* CAMERA NOTCH HOUSING */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '38px',
                      height: '5px',
                      background: 'var(--laptop-notch-bg)',
                      borderRadius: '0 0 4px 4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                      zIndex: 30,
                    }}
                  >
                    <div
                      style={{
                        width: '3px',
                        height: '3px',
                        borderRadius: '9999px',
                        background: 'var(--laptop-camera-dot-bg)',
                        boxShadow: 'var(--laptop-camera-dot-shadow)',
                      }}
                    />
                  </div>

                  {/* LAYER 3 — SCREEN (existing slide container) */}
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 10',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'var(--background)',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      textRendering: 'optimizeLegibility',
                      fontSize: '0.9em',
                    }}
                    className="relative w-full overflow-hidden"
                  >
                    {/* Glass reflection overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        zIndex: 20,
                        background:
                          'linear-gradient(125deg, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0) 40%)',
                        opacity: isDark ? 1 : 0.4,
                      }}
                    />

                    {/* Screen Content Container with brightness blink on slide activation */}
                    <motion.div
                      key={`screen-blink-${activeIndex}`}
                      initial={{ filter: shouldReduceMotion ? 'brightness(1)' : 'brightness(0.92)' }}
                      animate={{ filter: 'brightness(1)' }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
                      className="absolute inset-0 w-full h-full text-[0.9em]"
                      style={{ fontSize: '0.9em' }}
                    >
                      {/* SLIDE 1 — THE FEED */}
                      <motion.div
                        style={{
                          opacity: slide1Opacity,
                          willChange: 'opacity',
                          pointerEvents: activeIndex === 0 ? 'auto' : 'none',
                        }}
                        className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)] select-none"
                      >
                        {renderSlide1()}
                      </motion.div>

                      {/* SLIDE 2 — THE ANSWER */}
                      <motion.div
                        style={{
                          opacity: slide2Opacity,
                          willChange: 'opacity',
                          pointerEvents: activeIndex === 1 ? 'auto' : 'none',
                        }}
                        className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)] select-none"
                      >
                        {renderSlide2()}
                      </motion.div>

                      {/* SLIDE 3 — THE AUDIT TRAIL */}
                      <motion.div
                        style={{
                          opacity: slide3Opacity,
                          willChange: 'opacity',
                          pointerEvents: activeIndex === 2 ? 'auto' : 'none',
                        }}
                        className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)] select-none"
                      >
                        {renderSlide3()}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* LAYER 4 — BASE (keyboard deck edge) */}
              <div
                style={{
                  width: '98%',
                  height: '10px',
                  marginInline: 'auto',
                  display: 'block',
                  borderRadius: '0 0 12px 12px',
                  background: 'var(--laptop-base-bg)',
                  border: '1px solid var(--laptop-base-border)',
                  borderTop: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="relative mx-auto block"
              >
                {/* Edge highlight */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '6%',
                    right: '6%',
                    height: '1px',
                    background: 'var(--laptop-edge-highlight)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Center thumb scoop */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '56px',
                    height: '4px',
                    borderRadius: '0 0 4px 4px',
                    background: 'var(--laptop-trackpad-bg)',
                    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.4)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Ambient Grounding Shadow Blur */}
              <div
                style={{
                  width: '96%',
                  height: '38px',
                  marginInline: 'auto',
                  marginTop: '-4px',
                  background: 'var(--laptop-ambient-shadow)',
                  filter: 'blur(14px)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Headline + Step Indicator Group */}
          <div
            style={{ flexShrink: 0 }}
            className="flex flex-col items-center justify-center w-full shrink-0 select-none"
          >
            {/* ROW 2: Headline Slot with letter spacing animation on slide change */}
            <div
              style={{ marginBottom: '6px', flexShrink: 0 }}
              className="h-[30px] flex items-center justify-center relative w-full overflow-hidden shrink-0"
            >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 6, letterSpacing: '0.04em' }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  letterSpacing: '0em',
                  transition: shouldReduceMotion
                    ? { duration: 0.1 }
                    : {
                        opacity: { duration: 0.4, delay: 0.1 },
                        y: { duration: 0.4, delay: 0.1, ease: easeSnap },
                        letterSpacing: { duration: 0.4, delay: 0.1, ease: easeSnap },
                      },
                }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0, transition: { duration: 0.1 } }
                    : {
                        opacity: 0,
                        y: -6,
                        transition: { duration: 0.2, ease: 'easeIn' },
                      }
                }
                className="text-center text-[var(--text-primary)] text-[19px] sm:text-[23px] font-serif italic"
              >
                {activeIndex === 0 && 'Read the signal. Skip the noise.'}
                {activeIndex === 1 && 'Every recommendation has a reason.'}
                {activeIndex === 2 && 'Every answer comes with proof.'}
              </motion.p>
            </AnimatePresence>
          </div>

            {/* ROW 3: Step Indicator with spring physics */}
            <div
              style={{ flexShrink: 0 }}
              className="h-[28px] flex flex-col items-center justify-center shrink-0"
            >
              <div className="flex items-center gap-2">
                {([0, 1, 2] as const).map((idx) => {
                  const active = activeIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      style={{
                        width: active ? 32 : 24,
                        transition: shouldReduceMotion
                          ? 'width 0.1s ease'
                          : 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      className="relative h-[2px] rounded-[999px] cursor-pointer border-0 p-0 focus:outline-none bg-[var(--text-muted)] opacity-40 overflow-hidden"
                    >
                      {active && (
                        <motion.div
                          layoutId="activeStepSegment"
                          className="absolute inset-0 rounded-[999px] bg-[var(--accent)]"
                          style={{ opacity: 1 }}
                          transition={
                            shouldReduceMotion
                              ? { duration: 0.1 }
                              : stepSpring
                          }
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-3 mt-1 font-mono text-[11px] uppercase tracking-widest">
                {([
                  { idx: 0, label: 'READ' },
                  { idx: 1, label: 'VERIFY' },
                  { idx: 2, label: 'AUDIT' },
                ] as const).map(({ idx, label }, i) => (
                  <React.Fragment key={idx}>
                    {i > 0 && <span className="text-[var(--text-muted)] opacity-40">·</span>}
                    <button
                      type="button"
                      onClick={() => scrollToSlide(idx)}
                      style={{
                        transition: 'color 200ms ease-out, opacity 200ms ease-out',
                      }}
                      className={`cursor-pointer border-0 bg-transparent p-0 ${
                        activeIndex === idx
                          ? 'text-[var(--accent)] font-semibold opacity-100'
                          : 'text-[var(--text-muted)] opacity-50 hover:opacity-80'
                      }`}
                    >
                      {label}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;

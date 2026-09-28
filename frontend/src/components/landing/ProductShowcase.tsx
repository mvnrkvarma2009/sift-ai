import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';

const easeSnap = [0.16, 1, 0.3, 1] as const;
const stepSpring = { type: 'spring', stiffness: 200, damping: 22, mass: 0.6 } as const;

export function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth <= 1024;
  const [activeSlideIndex, setActiveSlideIndex] = useState<1 | 2 | 3>(1);

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

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const rawLaptopY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [12, 0, 0, 0], { clamp: true });
  const laptopY = shouldReduceMotion ? 0 : rawLaptopY;

  // PHASE 3 — SLIDE CROSS-FADE
  const slide1Opacity = useTransform(scrollYProgress, [0, 0.28, 0.36], [1, 1, 0], { clamp: true });
  const slide2Opacity = useTransform(scrollYProgress, [0.32, 0.40, 0.60, 0.68], [0, 1, 1, 0], { clamp: true });
  const slide3Opacity = useTransform(scrollYProgress, [0.64, 0.72, 1], [0, 1, 1], { clamp: true });

  const slide1Visibility = useTransform(slide1Opacity, (o) => (o > 0.01 ? 'visible' : 'hidden'));
  const slide2Visibility = useTransform(slide2Opacity, (o) => (o > 0.01 ? 'visible' : 'hidden'));
  const slide3Visibility = useTransform(slide3Opacity, (o) => (o > 0.01 ? 'visible' : 'hidden'));

  // Track active slide index
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.35) setActiveSlideIndex(1);
    else if (latest < 0.67) setActiveSlideIndex(2);
    else setActiveSlideIndex(3);
  });

  // Navigation helper for step indicator clicks
  const scrollToSlide = (index: 1 | 2 | 3) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const sectionHeight = sectionRef.current.offsetHeight;
    if (index === 1) {
      window.scrollTo({ top: scrollTop + 60, behavior: 'smooth' });
    } else if (index === 2) {
      window.scrollTo({ top: scrollTop + sectionHeight * 0.48, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: scrollTop + sectionHeight * 0.82, behavior: 'smooth' });
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

  // RENDER SLIDE 1 (Tight stacking, hairlines, 1:1 pixel rendering)
  const renderSlide1 = (isMobileCard?: boolean) => {
    const displayedItems = isMobileCard ? newsItems.slice(0, 3) : newsItems.slice(0, 4);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isMobileCard ? '0px' : '16px 20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        className="w-full select-none"
      >
        {/* ZONE A — Header */}
        <div className="flex flex-col shrink-0">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            animate={activeSlideIndex === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, delay: 0, ease: easeSnap }}
            className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold leading-[1.3] text-[var(--text-muted)]"
          >
            <span>TODAY · THU 25 SEP</span>
            <span>EDITION 084</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            animate={activeSlideIndex === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.30, delay: 0.06, ease: easeSnap }}
            className="font-sans text-[20px] sm:text-[22px] font-semibold text-[var(--text-primary)] mt-1 leading-[1.2]"
          >
            Five things that matter today.
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            animate={activeSlideIndex === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.25, delay: 0.12, ease: easeSnap }}
            className="text-[12px] sm:text-[13px] italic text-[var(--text-muted)] mt-0.5 font-sans leading-[1.4]"
          >
            Filtered from 1,000+ sources.
          </motion.p>
        </div>

        {/* ZONE B — 4 News Rows */}
        <div
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
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              animate={activeSlideIndex === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.3,
                delay: shouldReduceMotion ? 0 : 0.12 + idx * 0.04,
                ease: easeSnap,
              }}
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
        </div>

        {/* ZONE C — Footer */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={activeSlideIndex === 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
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
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isMobileCard ? '0px' : '16px 20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        className="w-full select-none"
      >
        {/* ZONE A — Header */}
        <div className="flex flex-col shrink-0">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            animate={activeSlideIndex === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, delay: 0, ease: easeSnap }}
            className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold leading-[1.3]"
          >
            <span>TASK VERIFICATION</span>
            <span className="text-[var(--accent)] font-semibold">RULE ENGINE · LIVE</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            animate={activeSlideIndex === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.30, delay: 0.06, ease: easeSnap }}
            className="font-sans text-[20px] sm:text-[22px] font-semibold text-[var(--text-primary)] mt-1 leading-[1.2]"
          >
            Free coding assistant with TypeScript support.
          </motion.h2>

          {/* Extracted constraints pills */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            animate={activeSlideIndex === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
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

        {/* ZONE B — 2 Verdict Cards */}
        <div
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
          {verdictRows.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={activeSlideIndex === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{
                duration: shouldReduceMotion ? 0.1 : 0.35,
                delay: shouldReduceMotion ? 0 : 0.15 + idx * 0.06,
                ease: easeSnap,
              }}
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
        </div>

        {/* ZONE C — Footer */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={activeSlideIndex === 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
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

  // RENDER SLIDE 3 (Audit Trail with Replayable Deterministic Timeline)
  const renderSlide3 = (isMobileCard?: boolean) => {
    const auditEvents = [
      {
        time: '10:32:04',
        dotColor: 'bg-[#6366F1]',
        title: 'Requirements extracted',
        description: 'Gemini parsed 3 constraints from your query.',
      },
      {
        time: '10:32:05',
        dotColor: 'bg-[#6366F1]',
        title: 'Rules executed',
        description: '5 deterministic rules ran against 50 tools.',
      },
      {
        time: '10:32:05',
        dotColor: 'bg-[#14B8A6]',
        title: 'Verdict attested',
        description: 'Result signed and stored. Replayable on demand.',
      },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isMobileCard ? '0px' : '16px 20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        className="w-full select-none"
      >
        {/* ZONE A (top) */}
        <div className="flex flex-col shrink-0">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            animate={activeSlideIndex === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: easeSnap, delay: 0 }}
            className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-wider leading-[1.3] pb-1 border-b border-[var(--border)]"
          >
            <span className="text-[var(--text-muted)] font-semibold">AUDIT TRAIL</span>
            <span className="text-[#6366F1] font-semibold">REPLAYABLE</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            animate={activeSlideIndex === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.30, ease: easeSnap, delay: 0.06 }}
            className="text-[18px] sm:text-[20px] font-sans font-semibold text-[var(--text-primary)] mt-1.5 leading-[1.2] tracking-tight"
          >
            Every verdict, on the record.
          </motion.h2>
        </div>

        {/* ZONE B (vertical timeline, 3 events) */}
        <div
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
          {auditEvents.map((evt, idx) => {
            const isLast = idx === auditEvents.length - 1;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                animate={activeSlideIndex === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.35,
                  ease: easeSnap,
                  delay: shouldReduceMotion ? 0 : 0.15 + idx * 0.08,
                }}
                style={{ flex: '0 0 auto', minHeight: 0 }}
                className="flex items-start gap-2.5 relative"
              >
                {/* Left: timestamp mono 11px muted */}
                <span className="font-mono text-[10px] sm:text-[11px] text-[var(--text-muted)] w-[52px] sm:w-[58px] shrink-0 pt-0.5">
                  {evt.time}
                </span>

                {/* Dot & vertical connector */}
                <div className="relative flex flex-col items-center shrink-0 self-stretch">
                  <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${evt.dotColor}`} />
                  {!isLast && <div className="w-[1px] bg-[var(--border)] flex-1 my-0.5" />}
                </div>

                {/* Middle: title 14px Inter 600 primary + description 12px Inter secondary */}
                <div className="flex flex-col min-w-0 pb-1">
                  <span className="text-[13px] sm:text-[14px] font-sans font-semibold text-[var(--text-primary)] leading-[1.3]">
                    {evt.title}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-sans text-[var(--text-secondary)] leading-[1.4] mt-0.5">
                    {evt.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ZONE C (bottom) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={activeSlideIndex === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.30, delay: 0.42, ease: easeSnap }}
          className="border-t border-[var(--border)] pt-2 flex items-center justify-between shrink-0 leading-[1.4]"
        >
          <span className="text-[11px] sm:text-[12px] italic text-[var(--text-muted)] font-sans">
            Every step is logged.
          </span>
          <span className="text-[11px] sm:text-[12px] font-sans font-medium text-[#6366F1] hover:underline cursor-pointer">
            Export audit →
          </span>
        </motion.div>
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
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '8px 0',
        }}
      >
        {/* Mobile (<768px): Full-width card with hairline border */}
        <div className="w-full max-w-[480px] mx-auto px-2 relative z-10 block md:hidden">
          <div className="w-full border border-[var(--border)] rounded-[14px] p-5 shadow-xl bg-[var(--surface)] relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {activeSlideIndex === 1 && renderSlide1(true)}
            {activeSlideIndex === 2 && renderSlide2(true)}
            {activeSlideIndex === 3 && renderSlide3(true)}
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
          {/* FRONT-FACING DARK LAPTOP FRAME */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 32, scale: 0.965, filter: 'blur(6px)' }
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
                : { duration: 0.9, ease: easeSnap }
            }
            style={{
              width: 'min(900px, 70vw, calc((100vh - 190px) * 1.55))',
              maxHeight: 'calc(100vh - 180px)',
              aspectRatio: '16 / 10',
              marginInline: 'auto',
              marginBottom: '14px',
              flexShrink: 0,
            }}
            className="laptop-mockup-wrapper relative flex flex-col items-center justify-center overflow-visible shrink-0 select-none"
          >
            {/* PHASE 2: PINNED SCROLL DRIFT */}
            <motion.div
              style={{
                y: laptopY,
                width: '100%',
              }}
              className="relative flex flex-col items-center w-full"
            >
              {/* LAYER 1 — LID (silhouette wrapper, dark in BOTH themes) */}
              <div
                style={{
                  width: '100%',
                  marginInline: 'auto',
                  padding: '3px',
                  borderRadius: '12px 12px 6px 6px',
                  background: 'linear-gradient(180deg, #23232D 0%, #1A1A22 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  boxShadow:
                    '0 40px 80px -24px rgba(0, 0, 0, 0.55), 0 16px 32px -16px rgba(0, 0, 0, 0.35)',
                  position: 'relative',
                }}
                className="relative w-full"
              >
                {/* Top highlight (::before) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '12%',
                    right: '12%',
                    height: '1px',
                    background:
                      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.10) 50%, transparent)',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                />

                {/* LAYER 2 — BEZEL (dark in BOTH themes) */}
                <div
                  style={{
                    padding: '5px 5px 12px 5px',
                    background: '#0A0A0F',
                    borderRadius: '10px 10px 4px 4px',
                    position: 'relative',
                  }}
                  className="relative w-full"
                >
                  {/* CAMERA: single 3px dot centered in top bezel (no notch bar) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '3px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '3px',
                      height: '3px',
                      borderRadius: '9999px',
                      background: '#05050A',
                      boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.12)',
                      pointerEvents: 'none',
                      zIndex: 30,
                    }}
                  />

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
                      key={`screen-blink-${activeSlideIndex}`}
                      initial={{ filter: shouldReduceMotion ? 'brightness(1)' : 'brightness(0.92)' }}
                      animate={{ filter: 'brightness(1)' }}
                      transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
                      className="absolute inset-0 w-full h-full text-[0.9em]"
                      style={{ fontSize: '0.9em' }}
                    >
                      {/* SLIDE 1 — THE FEED */}
                      <motion.div
                        style={{
                          opacity: slide1Opacity,
                          visibility: slide1Visibility,
                          pointerEvents: activeSlideIndex === 1 ? 'auto' : 'none',
                        }}
                        className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)] select-none"
                      >
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: shouldReduceMotion ? 0.2 : 0.5,
                            delay: shouldReduceMotion ? 0 : 0.24,
                            ease: easeSnap,
                          }}
                          className="w-full h-full"
                        >
                          {renderSlide1()}
                        </motion.div>
                      </motion.div>

                      {/* SLIDE 2 — THE ANSWER */}
                      <motion.div
                        style={{
                          opacity: slide2Opacity,
                          visibility: slide2Visibility,
                          pointerEvents: activeSlideIndex === 2 ? 'auto' : 'none',
                        }}
                        className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)] select-none"
                      >
                        {renderSlide2()}
                      </motion.div>

                      {/* SLIDE 3 — THE AUDIT TRAIL */}
                      <motion.div
                        style={{
                          opacity: slide3Opacity,
                          visibility: slide3Visibility,
                          pointerEvents: activeSlideIndex === 3 ? 'auto' : 'none',
                        }}
                        className="absolute inset-0 h-full w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)] select-none"
                      >
                        {renderSlide3()}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* LAYER 4 — BASE (keyboard deck edge, dark in BOTH themes) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : 0.4,
                  delay: shouldReduceMotion ? 0 : 0.40,
                  ease: 'easeOut',
                }}
                style={{
                  width: '94%',
                  height: '10px',
                  marginTop: '1px',
                  marginInline: 'auto',
                  display: 'block',
                  borderRadius: '0 0 12px 12px',
                  background: 'linear-gradient(180deg, #1A1A22 0%, #101016 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="relative mx-auto block"
              >
                {/* Edge highlight: 1px line at top 1px, left 8%, right 8% */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1px',
                    left: '8%',
                    right: '8%',
                    height: '1px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Trackpad hint: top 3px, left 50%, translateX(-50%), width 22%, height 4px, border-radius 2px */}
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '22%',
                    height: '4px',
                    borderRadius: '2px',
                    background: isDark ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.08)',
                    pointerEvents: 'none',
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Headline + Step Indicator Group */}
          <div
            style={{ flexShrink: 0 }}
            className="flex flex-col items-center justify-center w-full shrink-0 select-none"
          >
            {/* ROW 2: Headline Slot with letter spacing animation on slide change */}
            <div
              style={{ marginBottom: '10px', flexShrink: 0 }}
              className="h-[36px] flex items-center justify-center relative w-full overflow-hidden shrink-0"
            >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSlideIndex}
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
                {activeSlideIndex === 1 && 'Read the signal. Skip the noise.'}
                {activeSlideIndex === 2 && 'Every recommendation has a reason.'}
                {activeSlideIndex === 3 && 'Every decision has a paper trail.'}
              </motion.p>
            </AnimatePresence>
          </div>

            {/* ROW 3: Step Indicator with spring physics */}
            <div
              style={{ flexShrink: 0 }}
              className="h-[32px] flex flex-col items-center justify-center shrink-0"
            >
              <div className="flex items-center gap-2">
                {([1, 2, 3] as const).map((idx) => {
                  const active = activeSlideIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToSlide(idx)}
                      aria-label={`Slide ${idx}`}
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
                  { idx: 1, label: 'READ' },
                  { idx: 2, label: 'VERIFY' },
                  { idx: 3, label: 'ALERT' },
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
                        activeSlideIndex === idx
                          ? 'text-[var(--text-primary)] font-semibold opacity-100'
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

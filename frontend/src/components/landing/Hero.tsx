import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const HERO_IMAGE_SRC = '/images/hero-coastline.jpg';
const FALLBACK_IMAGE_SRC =
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=2400&q=90';

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE_SRC);
  const heroRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
  });

  // Left column transforms
  const textDriftYTransform = useTransform(smoothProgress, [0, 1], [0, -32]);
  const textOpacityTransform = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  // Right column image transforms
  const imageDriftYTransform = useTransform(smoothProgress, [0, 1], [0, 40]);
  const imageScaleTransform = useTransform(smoothProgress, [0, 1], [1, 0.98]);

  const leftColumnStyle = shouldReduceMotion
    ? {}
    : { y: textDriftYTransform, opacity: textOpacityTransform };

  const rightColumnMotionStyle = shouldReduceMotion
    ? {}
    : { y: imageDriftYTransform, scale: imageScaleTransform };

  // Headline word-by-word reveal variants (word-by-word, delay 250ms, 60ms stagger)
  const headlineContainerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.25,
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const headlineWordVariants = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  // Hero CTA buttons staggered entrance variants (delay 700ms, stagger 80ms)
  const heroButtonContainerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.7,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const heroButtonVariants = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="w-full min-h-0 lg:min-h-[calc(100vh-72px)] flex items-center py-[60px]">
      <div
        ref={heroRef}
        className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-[32px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[48px] items-center"
      >
        {/* Left Column (50% desktop, stacked on mobile) */}
        <motion.div
          style={leftColumnStyle}
          className="flex flex-col justify-center items-start w-full"
        >
          {/* Mono label: delay 150ms, y 8 -> 0, opacity 0 -> 1 */}
          <motion.span
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }
            }
            className="font-mono text-[11px] leading-[14px] uppercase text-text-muted tracking-[0.2em]"
          >
            DAILY INTELLIGENCE FOR BUILDERS
          </motion.span>

          {/* Headline: Instrument Serif, 56px desktop / 36px mobile, "signal" in indigo */}
          <motion.h1
            className="mt-[16px] font-serif text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-text-primary font-normal"
            variants={headlineContainerVariants}
            initial="initial"
            animate="animate"
          >
            {"The signal, not the noise.".split(' ').map((word, idx) => {
              const isSignal = word.toLowerCase().includes('signal');
              return (
                <motion.span
                  key={idx}
                  variants={headlineWordVariants}
                  className={`inline-block mr-[0.25em] last:mr-0 ${
                    isSignal ? 'text-accent-indigo' : ''
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subtitle: Inter 400, 17px, line-height 1.6, text-secondary, delay 550ms */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] as const }
            }
            className="mt-[20px] text-[15px] sm:text-[17px] leading-[1.6] text-text-secondary font-normal max-w-[440px]"
          >
            Every AI release, funding round, and tool launch — read in five minutes. 1,000+ tools verified against your requirements with transparent, deterministic rules.
          </motion.p>

          {/* Two buttons: stacked on mobile, inline on desktop */}
          <motion.div
            variants={heroButtonContainerVariants}
            initial="initial"
            animate="animate"
            className="mt-[28px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.div variants={heroButtonVariants} className="w-full sm:w-auto">
              <Link
                to="/dashboard"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-accent-indigo text-white text-[14px] font-medium px-[18px] py-[10px] sm:py-[8px] rounded-full hover:bg-accent-indigo/90 transition-colors cursor-pointer text-center"
              >
                Open today's feed
              </Link>
            </motion.div>
            <motion.div variants={heroButtonVariants} className="w-full sm:w-auto">
              <a
                href="#how-it-works"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-border-hairline bg-transparent text-text-primary text-[14px] font-medium px-[18px] py-[10px] sm:py-[8px] rounded-full hover:bg-surface-card hover:border-outline-variant transition-colors text-center"
              >
                See how it works
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: plain image, no filters, no overlays, rounded 16px, hairline border */}
        <motion.div
          style={rightColumnMotionStyle}
          className="w-full flex items-center justify-center"
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 1.02, y: 20 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] as const }
            }
            className="w-full flex items-center justify-center"
          >
            <div className="w-full h-[min(40vh,320px)] lg:h-[min(60vh,440px)] max-h-[60vh] relative overflow-hidden rounded-[16px] border border-border-hairline bg-surface-card">
              <img
                src={imgSrc}
                alt="Aerial view of a calm coastline at dawn"
                loading="eager"
                onError={() => {
                  if (imgSrc !== FALLBACK_IMAGE_SRC) {
                    setImgSrc(FALLBACK_IMAGE_SRC);
                  }
                }}
                className="w-full h-full object-cover object-center rounded-[16px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

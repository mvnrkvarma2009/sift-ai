import React from 'react';
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  MotionValue,
  Variants,
  UseScrollOptions,
} from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

export { usePrefersReducedMotion };

export function useScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  offset: UseScrollOptions['offset'] = ['start end', 'end start']
): MotionValue<number> {
  const reducedMotion = usePrefersReducedMotion();
  const staticZero = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.6,
  });

  return reducedMotion ? staticZero : smoothProgress;
}

export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  distance = 40,
  opacityRange: [number, number] = [1, 0]
): { y: MotionValue<number>; opacity: MotionValue<number> } {
  const reducedMotion = usePrefersReducedMotion();
  const staticY = useMotionValue(0);
  const staticOpacity = useMotionValue(1);

  const progress = useScrollProgress(ref, ['start end', 'end start']);

  const y = useTransform(progress, [0, 1], [0, -distance]);
  const opacity = useTransform(progress, [0, 1], opacityRange);

  return {
    y: reducedMotion ? staticY : y,
    opacity: reducedMotion ? staticOpacity : opacity,
  };
}

export function useStaggerChildren(
  staggerDelay = 0.06,
  duration = 0.5
): { parent: Variants; child: Variants; container: Variants } {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    const parent: Variants = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0,
          duration: 0,
        },
      },
    };
    const child: Variants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 0 },
      },
    };
    return { parent, child, container: parent };
  }

  const parent: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        duration,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: 'blur(4px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return { parent, child, container: parent };
}

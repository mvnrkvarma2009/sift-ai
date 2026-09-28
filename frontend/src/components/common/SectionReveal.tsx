import React from 'react';
import { motion, Variants } from 'framer-motion';
import { usePrefersReducedMotion, useStaggerChildren } from '../../lib/mercuryMotion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  delay = 0,
  stagger = false,
}) => {
  const shouldReduceMotion = usePrefersReducedMotion();
  const { parent: parentVariants } = useStaggerChildren(0.06, 0.5);

  const blockVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: '0px 0px -80px 0px' }}
      variants={stagger ? parentVariants : blockVariants}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../lib/mercuryMotion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  distance?: number;
  fadeOut?: boolean;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  distance = 40,
  fadeOut = false,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { y, opacity } = useParallax(ref, distance);

  return (
    <motion.div
      ref={ref}
      style={fadeOut ? { y, opacity } : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;

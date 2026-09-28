import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 1.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(shouldReduceMotion ? value : 0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(shouldReduceMotion ? value.toLocaleString() : '0');

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(value.toLocaleString());
      return;
    }
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const unsub = spring.on('change', (latest) => {
      setDisplay(Math.round(latest).toLocaleString());
    });
    return () => unsub();
  }, [spring, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;

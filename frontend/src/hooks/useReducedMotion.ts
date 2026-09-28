import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}

export function useReducedMotion(): boolean {
  const framerReduced = useFramerReducedMotion();
  const mediaReduced = usePrefersReducedMotion();
  return Boolean(framerReduced ?? mediaReduced);
}

export default useReducedMotion;

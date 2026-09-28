import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';

export const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const l = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId: number;
    function raf(time: number) {
      l.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    setLenis(l);

    return () => {
      cancelAnimationFrame(rafId);
      l.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export default SmoothScroll;


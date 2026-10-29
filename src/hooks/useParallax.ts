import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from 'motion/react';
import { getDeviceParallaxScale, calculateCardTilt } from '../utils/parallax.ts';

/**
 * Hook for creating smooth, responsive scroll-based parallax values
 * that automatically adapt to viewport size (desktop vs mobile) and
 * accessibility preferences (prefers-reduced-motion).
 */
export function useResponsiveParallax(
  desktopRange: [number, number],
  containerRef?: React.RefObject<HTMLElement | null>
): {
  ref: React.RefObject<any>;
  y: MotionValue<number>;
  scaleFactor: number;
  isMobile: boolean;
} {
  const localRef = useRef<HTMLElement | null>(null);
  const targetRef = containerRef || localRef;

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scaleFactor = getDeviceParallaxScale({
    isMobile,
    prefersReducedMotion: Boolean(prefersReduced)
  });

  const { scrollYProgress } = useScroll({
    target: targetRef as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  });

  const startOffset = Math.round(desktopRange[0] * scaleFactor);
  const endOffset = Math.round(desktopRange[1] * scaleFactor);

  const rawY = useTransform(scrollYProgress, [0, 1], [startOffset, endOffset]);
  const smoothY = useSpring(rawY, {
    stiffness: 140,
    damping: 24,
    mass: 0.25
  });

  return {
    ref: targetRef,
    y: smoothY,
    scaleFactor,
    isMobile
  };
}

/**
 * Hook for smooth 3D tilt interactive parallax on desktop cards.
 * Automatically no-ops on mobile / touch or reduced-motion mode.
 */
export function useCardTilt(maxDeg: number = 6) {
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({
    rotateX: 0,
    rotateY: 0
  });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || (typeof window !== 'undefined' && window.innerWidth < 1024)) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const calculated = calculateCardTilt(e.clientX, e.clientY, rect, maxDeg);
    setTilt(calculated);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return {
    rotateX: tilt.rotateX,
    rotateY: tilt.rotateY,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}

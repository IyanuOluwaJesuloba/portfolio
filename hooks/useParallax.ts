'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface UseParallaxReturn {
  y: MotionValue<number | string>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

/**
 * Custom hook for parallax scroll effects with multiple transform options
 * Provides performance-optimized scroll-based animations
 */
export function useParallax(intensity: number = 0.5): UseParallaxReturn {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${50 * intensity}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return { y, opacity, scale };
}

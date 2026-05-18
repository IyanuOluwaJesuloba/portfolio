'use client';

import { useEffect, useState } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: Breakpoint | null;
}

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Custom hook for responsive design with better control
 * Provides accurate breakpoint detection for conditional rendering
 */
export function useResponsive(): UseResponsiveReturn {
  const [width, setWidth] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const debouncedResize = (() => {
      let timeout: NodeJS.Timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(handleResize, 150);
      };
    })();

    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  if (!isMounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      breakpoint: null,
    };
  }

  const isMobile = width < breakpoints.md;
  const isTablet = width >= breakpoints.md && width < breakpoints.lg;
  const isDesktop = width >= breakpoints.lg;

  let currentBreakpoint: Breakpoint | null = null;
  for (const [bp, value] of Object.entries(breakpoints)) {
    if (width >= value) {
      currentBreakpoint = bp as Breakpoint;
    }
  }

  return {
    isMobile,
    isTablet,
    isDesktop,
    breakpoint: currentBreakpoint,
  };
}

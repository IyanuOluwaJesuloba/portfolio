'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { sectionVariants } from '@/lib/animations';

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  variants?: Variants;
  showBackgroundGradient?: boolean;
  backgroundGradient?: string;
  noAnimation?: boolean;
}

/**
 * Reusable animated section component
 * Provides consistent animation and styling across all sections
 * Reduces code duplication and improves maintainability
 */
export function AnimatedSection({
  id,
  children,
  className = '',
  variants = sectionVariants,
  showBackgroundGradient = true,
  backgroundGradient = '',
  noAnimation = false,
}: AnimatedSectionProps) {
  const Component = noAnimation ? 'section' : motion.section;

  const props = noAnimation
    ? {
        id,
        className: `relative overflow-hidden w-full ${className}`,
      }
    : {
        id,
        className: `relative overflow-hidden w-full ${className}`,
        variants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
      };

  return (
    <Component {...props}>
      {showBackgroundGradient && backgroundGradient && (
        <div className={`pointer-events-none absolute inset-0 ${backgroundGradient}`} />
      )}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}

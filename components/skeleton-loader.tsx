'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Skeleton loader component for better UX during content loading
 * Provides smooth fade-in animations for better perceived performance
 */
export interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  circle?: boolean;
  count?: number;
}

export function SkeletonLoader({
  width = '100%',
  height = 'h-4',
  className = '',
  circle = false,
  count = 1,
}: SkeletonLoaderProps) {
  const skeletons = Array.from({ length: count });

  const skeletonVariants = {
    animate: {
      backgroundPosition: ['200% 0%', '-200% 0%'],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      },
    },
  };

  return (
    <div className="space-y-4">
      {skeletons.map((_, index) => (
        <motion.div
          key={index}
          variants={skeletonVariants}
          animate="animate"
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : undefined,
          }}
          className={`
            ${circle ? 'rounded-full' : 'rounded-lg'}
            ${height}
            ${className}
            bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600
            bg-[length:200%_100%]
          `}
        />
      ))}
    </div>
  );
}

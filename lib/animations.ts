// Premium animation variants and constants for the portfolio website
// Using easing functions optimized for professional UX
// OPTIMIZED: Reduced animation durations and delays for faster content visibility

import { Variants, Transition } from 'framer-motion';

// ============================================================================
// Transition Presets - Professional timing curves (OPTIMIZED for performance)
// ============================================================================

export const transitions = {
  smooth: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  snappy: { duration: 0.12, ease: [0.34, 1.56, 0.64, 1] },
  molasses: { duration: 0.25, ease: [0.08, 0.82, 0.84, 1] },
  spring: { type: 'spring', stiffness: 150, damping: 20, mass: 0.4 },
} as const;

// ============================================================================
// Basic Animations
// ============================================================================

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: transitions.smooth,
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: transitions.smooth,
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: transitions.smooth,
};

export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: transitions.smooth,
};

// ============================================================================
// Container & Stagger Animations (OPTIMIZED: reduced delays)
// ============================================================================

export const staggerContainer: Variants = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
  transition: { duration: 0.2 },
};

export const staggerParent = {
  animate: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.01,
    },
  },
};

// ============================================================================
// Section Animations - Used for major content sections (OPTIMIZED)
// ============================================================================

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const sectionWithBlur: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================================================
// Heading Animations (OPTIMIZED)
// ============================================================================

export const headingVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const headingWithScale: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================================================
// Card & Component Animations (OPTIMIZED)
// ============================================================================

export const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -4,
    transition: { duration: 0.15 },
  },
};

export const cardVariantsElevated: Variants = {
  initial: { opacity: 0, y: 20, rotateX: 5 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: transitions.smooth,
  },
  hover: {
    y: -6,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: { duration: 0.15 },
  },
};

// ============================================================================
// Button & Interactive Animations (OPTIMIZED)
// ============================================================================

export const buttonHoverVariants: Variants = {
  hover: { scale: 1.03, transition: { duration: 0.15 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const buttonPulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Float & Hover Animations (OPTIMIZED: reduced ranges and durations)
// ============================================================================

export const floatingAnimation: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatingAnimationSlow: Variants = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Text & Typography Animations (OPTIMIZED)
// ============================================================================

export const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.02,
      duration: 0.2,
    },
  }),
};

export const lineReveal: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Background & Gradient Animations (OPTIMIZED: reduced complexity)
// ============================================================================

export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const pulseAnimation: Variants = {
  animate: {
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Exit Animations
// ============================================================================

export const exitFadeOut: Variants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const exitSlideOut: Variants = {
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

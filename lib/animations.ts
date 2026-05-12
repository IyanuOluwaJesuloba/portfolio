// Premium animation variants and constants for the portfolio website
// Using easing functions optimized for professional UX

import { Variants, Transition } from 'framer-motion';

// ============================================================================
// Transition Presets - Professional timing curves
// ============================================================================

export const transitions = {
  smooth: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  snappy: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  molasses: { duration: 1, ease: [0.08, 0.82, 0.84, 1] },
  spring: { type: 'spring', stiffness: 100, damping: 15, mass: 0.5 },
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
// Container & Stagger Animations
// ============================================================================

export const staggerContainer: Variants = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4 },
};

export const staggerParent = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ============================================================================
// Section Animations - Used for major content sections
// ============================================================================

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const sectionWithBlur: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================================================
// Heading Animations
// ============================================================================

export const headingVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const headingWithScale: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================================================
// Card & Component Animations
// ============================================================================

export const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

export const cardVariantsElevated: Variants = {
  initial: { opacity: 0, y: 40, rotateX: 10 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: transitions.smooth,
  },
  hover: {
    y: -12,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: { duration: 0.3 },
  },
};

// ============================================================================
// Button & Interactive Animations
// ============================================================================

export const buttonHoverVariants: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.98, transition: { duration: 0.2 } },
};

export const buttonPulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Float & Hover Animations
// ============================================================================

export const floatingAnimation: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatingAnimationSlow: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Text & Typography Animations
// ============================================================================

export const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.05,
      duration: 0.4,
    },
  }),
};

export const lineReveal: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Background & Gradient Animations
// ============================================================================

export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const pulseAnimation: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
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

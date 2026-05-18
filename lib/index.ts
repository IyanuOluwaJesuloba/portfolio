/**
 * Centralized export for all library utilities
 * Improves organization and makes imports cleaner throughout the codebase
 */

export { cn } from './utils';
export {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  rotateIn,
  staggerContainer,
  staggerItem,
  staggerParent,
  sectionVariants,
  sectionWithBlur,
  headingVariants,
  headingWithScale,
  cardVariants,
  cardVariantsElevated,
  buttonHoverVariants,
  buttonPulse,
  floatingAnimation,
  floatingAnimationSlow,
  textVariants,
  lineReveal,
  gradientShift,
  pulseAnimation,
  exitFadeOut,
  exitSlideOut,
  transitions,
} from './animations';
export { generateSEOMetadata, getStructuredData } from './seo';
export type { SEOConfig } from './seo';
export {
  portfolioProjects,
  openSourceContributions,
  type PortfolioProject,
  type PortfolioProjectCategory,
  type OpenSourceContribution,
} from './portfolio-data';

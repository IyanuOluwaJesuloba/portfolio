/**
 * Centralized export for all library utilities
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
export { PORTFOLIO_CONFIG } from './constants';
export { generateSEOMetadata, getStructuredData } from './seo';
export type { SEOConfig } from './seo';
export {
  portfolioProjects,
  openSourceContributions,
  type PortfolioProject,
  type ProjectMetric,
  type PortfolioProjectCategory,
  type OpenSourceContribution,
} from './portfolio-data';

/**
 * Portfolio Configuration Constants
 * Centralized place for configuration values used across the application
 */

export const PORTFOLIO_CONFIG = {
  // Site Information
  SITE_NAME: 'IyanuOluwa Owoseni',
  SITE_TITLE: 'IyanuOluwa Owoseni | Senior Frontend Developer & Web3 Specialist',
  SITE_URL: 'https://iyanuoluwa-portfolio.vercel.app',
  SITE_DESCRIPTION:
    'Passionate full-stack frontend engineer specializing in React, Next.js, and Web3 technologies. Building exceptional digital experiences with clean code, performance optimization, and modern design principles.',

  // Social Links
  SOCIAL_LINKS: {
    GITHUB: 'https://github.com/IyanuOluwaJesuloba',
    LINKEDIN: 'https://www.linkedin.com/in/iyanuoluwa-owoseni/',
    EMAIL: 'jesulobaowoseni1@gmail.com',
    TWITTER: 'https://twitter.com/iyanuoluwa_dev',
  },

  // Contact Information
  CONTACT_EMAIL: 'jesulobaowoseni1@gmail.com',
  RESUME_URL: "/IYANUOLUWA OWOSENI'S RESUME.pdf",

  // Navigation Items
  NAVIGATION_ITEMS: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Open Source', href: '#open-source' },
    { label: 'Contact', href: '#contact' },
  ],

  // Skills & Technologies
  SKILLS: {
    FRONTEND: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Responsive Design',
    ],
    WEB3: [
      'Solidity',
      'Web3.js',
      'Ethers.js',
      'Smart Contracts',
      'EVM',
      'Blockchain',
      'DeFi Protocols',
    ],
    TOOLS: [
      'Git',
      'VS Code',
      'Docker',
      'Webpack',
      'Vite',
      'Figma',
      'Postman',
    ],
  },

  // Stats
  STATS: {
    PROJECTS: '11+',
    EXPERIENCE_YEARS: '3+',
    OPEN_SOURCE_CONTRIBUTIONS: '3+',
    TECH_STACKS: '5+',
  },

  // SEO
  SEO: {
    LOCALE: 'en_US',
    OG_IMAGE: 'https://iyanuoluwa-portfolio.vercel.app/hero.jpeg',
    TWITTER_HANDLE: '@iyanuoluwa_dev',
  },

  // Animation Defaults
  ANIMATION: {
    STAGGER_DELAY: 0.1,
    TRANSITION_DURATION: 0.6,
    HOVER_SCALE: 1.05,
  },

  // Responsive Breakpoints (matching Tailwind)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
} as const;

/**
 * Type-safe keys for portfolio config
 */
export type PortfolioConfigKey = keyof typeof PORTFOLIO_CONFIG;

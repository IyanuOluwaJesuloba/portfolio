/**
 * Portfolio Configuration Constants
 * Centralized place for configuration values used across the application
 */

export const PORTFOLIO_CONFIG = {
  // Site Information
  SITE_NAME: 'IyanuOluwa Owoseni',
  SITE_TITLE: 'IyanuOluwa Owoseni | Frontend & Web3 Engineer',
  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://iyanuoluwa-portfolio.vercel.app'),
  SITE_DESCRIPTION:
    'Frontend & Web3 Engineer with 3 years building Web2 and Web3 products focused on solving real human problems (professional, freelance, and open source). Specializing in React, Next.js, TypeScript, Solidity, Rust, and Soroban on Stellar.',

  // Social & Booking Links
  SOCIAL_LINKS: {
    GITHUB: 'https://github.com/IyanuOluwaJesuloba',
    LINKEDIN: 'https://www.linkedin.com/in/iyanuoluwa-owoseni/',
    EMAIL: 'jesulobaowoseni1@gmail.com',
    TWITTER: 'https://twitter.com/iyanuoluwa_dev',
    BOOKING: 'https://cal.com/iyanuoluwa-owoseni',
  },

  // Contact Information
  CONTACT_EMAIL: 'jesulobaowoseni1@gmail.com',
  RESUME_URL: "/IYANUOLUWA OWOSENI'S RESUME.pdf",

  // Market & Availability
  LOCATION: 'Nigeria (GMT+1)',
  MARKET_NOTE: 'Based in Nigeria (GMT+1): overlaps with UK/EU hours; open to Nigerian and remote roles.',

  // Navigation Items
  NAVIGATION_ITEMS: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#case-studies' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Open Source', href: '#open-source' },
    { label: 'Contact', href: '#contact' },
  ],

  // Skills & Technologies
  SKILLS: {
    FRONTEND: [
      'React',
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'JavaScript (ES2022+)',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5 & CSS3',
      'Responsive Design',
      'Web Accessibility (WCAG)',
    ],
    WEB3: [
      'Rust',
      'Soroban',
      'Stellar SDK & Horizon',
      'Solidity',
      'Ethers.js',
      'Wagmi / RainbowKit',
      'Smart Contracts',
      'EVM & Testnets',
      'Zero-Knowledge (ZK)',
      'Foundry & Hardhat',
    ],
    TOOLS: [
      'Git & GitHub',
      'VS Code',
      'Figma',
      'Node.js & npm',
      'Vite & Webpack',
      'Vercel',
      'Postman',
      'Docker',
    ],
  },

  // Stats (Unified single true numbers)
  STATS: {
    PROJECTS: '7',
    EXPERIENCE_YEARS: '3',
    OPEN_SOURCE_CONTRIBUTIONS: '5+',
    TECH_STACKS: '6+',
  },

  // SEO
  SEO: {
    LOCALE: 'en_US',
    OG_IMAGE: '/hero.jpeg',
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

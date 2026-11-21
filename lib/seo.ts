import type { Metadata } from 'next';
import { PORTFOLIO_CONFIG } from './constants';

/**
 * Enhanced SEO configuration for portfolio
 * Provides reusable metadata for search engine optimization and social previews
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterHandle?: string;
  locale?: string;
}

/**
 * Generate comprehensive metadata for SEO
 */
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = '/hero.jpeg',
    twitterHandle = PORTFOLIO_CONFIG.SEO.TWITTER_HANDLE,
    locale = PORTFOLIO_CONFIG.SEO.LOCALE,
  } = config;

  const siteUrl = PORTFOLIO_CONFIG.SITE_URL;

  const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    authors: [{ name: 'IyanuOluwa Owoseni' }],
    creator: 'IyanuOluwa Owoseni',
    publisher: 'IyanuOluwa Owoseni',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: siteUrl,
      title,
      description,
      siteName: 'IyanuOluwa Owoseni: Frontend & Web3 Engineer',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      images: [ogImage],
    },
  };

  return metadata;
}

/**
 * Structured data for better rich snippets in search results
 */
export function getStructuredData(name: string, url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    description,
    jobTitle: 'Frontend & Web3 Engineer',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Solidity',
      'Rust',
      'Soroban',
      'Stellar',
      'Web3',
      'Blockchain Development',
      'Frontend Engineering',
    ],
    sameAs: [
      'https://github.com/IyanuOluwaJesuloba',
      'https://linkedin.com/in/iyanuoluwa-owoseni',
      'https://cal.com/iyanuoluwa-owoseni',
    ],
  };
}

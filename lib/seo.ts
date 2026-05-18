import type { Metadata } from 'next';

/**
 * Enhanced SEO configuration for portfolio
 * Provides reusable metadata for better search engine optimization
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
    ogImage = 'https://iyanuoluwa-portfolio.vercel.app/hero.jpeg',
    twitterHandle = '@iyanuoluwa_dev',
    locale = 'en_US',
  } = config;

  const metadata: Metadata = {
    metadataBase: new URL('https://iyanuoluwa-portfolio.vercel.app'),
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
      url: 'https://iyanuoluwa-portfolio.vercel.app',
      title,
      description,
      siteName: 'IyanuOluwa Owoseni Portfolio',
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
    jobTitle: 'Frontend Developer & Web3 Developer',
    sameAs: [
      'https://github.com/IyanuOluwaJesuloba',
      'https://linkedin.com/in/iyanuoluwa-owoseni',
    ],
  };
}

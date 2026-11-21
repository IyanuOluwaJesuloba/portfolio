import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { PORTFOLIO_CONFIG } from "@/lib/constants"

const siteUrl = PORTFOLIO_CONFIG.SITE_URL;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "IyanuOluwa Owoseni | Frontend & Web3 Engineer",
  description:
    "Frontend & Web3 Engineer building software that solves real world problems",
  keywords: [
    "Frontend & Web3 Engineer",
    "Frontend Engineer",
    "Web3 Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Rust",
    "Soroban Developer",
    "Stellar Blockchain",
    "Solidity Developer",
    "EVM",
    "Tailwind CSS",
    "Smart Contracts",
    "UI/UX Engineering",
  ],
  authors: [{ name: "IyanuOluwa Owoseni" }],
  creator: "IyanuOluwa Owoseni",
  publisher: "IyanuOluwa Owoseni",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "IyanuOluwa Owoseni | Frontend & Web3 Engineer",
    description:
      "Frontend & Web3 Engineer building software that solves real world problems across Web2 and Web3 with React, Next.js, TypeScript, Rust, and Soroban on Stellar.",
    siteName: "IyanuOluwa Owoseni Portfolio",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "IyanuOluwa Owoseni - Frontend & Web3 Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IyanuOluwa Owoseni | Frontend & Web3 Engineer",
    description:
      "Frontend & Web3 Engineer building software that solves real world problems across Web2 and Web3 with React, Next.js, TypeScript, Rust, and Soroban on Stellar.",
    images: ["/hero.jpeg"],
    creator: "@iyanuoluwa_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon-new.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.svg',
        type: 'image/svg+xml',
        sizes: '180x180',
      },
    ],
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

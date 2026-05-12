import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://iyanuoluwa-portfolio.vercel.app"),
  title: "IyanuOluwa Owoseni | Senior Frontend Developer & Web3 Specialist",
  description: "Passionate full-stack frontend engineer specializing in React, Next.js, and Web3 technologies. Building exceptional digital experiences with clean code, performance optimization, and modern design principles.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "UI/UX",
    "JavaScript",
    "Web3 Developer",
    "Blockchain Developer",
    "Full-stack Engineer",
    "Senior Developer",
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
    url: "https://iyanuoluwa-portfolio.vercel.app",
    title: "IyanuOluwa Owoseni | Senior Frontend Developer & Web3 Specialist",
    description: "Building exceptional digital experiences with modern web technologies.",
    siteName: "IyanuOluwa Owoseni Portfolio",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "IyanuOluwa Owoseni - Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IyanuOluwa Owoseni | Senior Frontend Developer",
    description: "Building exceptional digital experiences with modern web technologies.",
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
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
        sizes: '180x180',
      },
    ],
    apple: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
        sizes: '180x180',
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
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

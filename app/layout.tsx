import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IyanuOluwa Owoseni | Frontend Developer & UI/UX Enthusiast",
  description: "Passionate frontend developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with clean code and innovative design.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Tailwind CSS", "Web Development", "UI/UX", "JavaScript"],
  authors: [{ name: "IyanuOluwa Owoseni" }],
  creator: "IyanuOluwa Owoseni",
  publisher: "IyanuOluwa Owoseni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iyanuoluwa-portfolio.vercel.app",
    title: "IyanuOluwa Owoseni | Frontend Developer",
    description: "Passionate frontend developer creating exceptional digital experiences with modern web technologies.",
    siteName: "IyanuOluwa Owoseni Portfolio",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "IyanuOluwa Owoseni - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IyanuOluwa Owoseni | Frontend Developer",
    description: "Passionate frontend developer creating exceptional digital experiences with modern web technologies.",
    images: ["/hero.jpeg"],
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
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Reign - Rule Your Streets | India\'s #1 Fitness Game',
  description: 'Turn your daily walks into territory conquest! Join millions conquering neighborhoods across India.',
  keywords: ['fitness', 'walking', 'running', 'territory', 'game', 'India', 'health', 'exercise'],
  authors: [{ name: 'Reign' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Reign - Rule Your Streets',
    description: 'Turn your daily walks into territory conquest! Join millions conquering neighborhoods across India.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reign - Rule Your Streets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reign - Rule Your Streets',
    description: 'Turn your daily walks into territory conquest! Join millions conquering neighborhoods across India.',
    images: ['/images/twitter-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFD617',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="application-name" content="Reign" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Reign" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

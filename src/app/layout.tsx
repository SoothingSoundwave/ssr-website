// layout.tsx
// Path: /src/app/layout.tsx

import type { Metadata } from 'next'
import './fonts.css'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import VideoBackground from '@/components/VideoBackground'

export const metadata: Metadata = {
  title: 'Soothing Soundwave Records | Relaxing & Chill Music Label',
  description: 'Discover relaxing and chill music from Soothing Soundwave Records. Featuring chill hop, lounge, smooth jazz, downtempo, and deep house.',
  keywords: 'relaxing music, chill music, lounge, smooth jazz, chill hop, downtempo, deep house, record label',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Soothing Soundwave Records',
    description: 'The everlasting wave of the chillest and most relaxing music',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <VideoBackground />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
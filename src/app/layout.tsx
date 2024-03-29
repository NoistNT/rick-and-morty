import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'

import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty Unofficial app',
  keywords: ['rick and morty', 'rick', 'morty', 'rick and morty app']
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950`}>
        <Nav />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}

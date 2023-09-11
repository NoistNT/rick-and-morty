import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/redux/Providers'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty unofficial app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}

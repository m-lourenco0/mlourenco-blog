import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Merriweather } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'], 
  subsets: ['latin'],
  variable: '--font-roboto'
})

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'Someone\'s Blog',
  description: 'Who knows what this is about?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-neutral-100 antialiased`}>{children}</body>
    </html>
  )
}

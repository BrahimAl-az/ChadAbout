import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Discover Chad - Explore the Heart of Africa',
  description: 'Discover Chad: Your gateway to exploring the breathtaking landscapes, rich culture, vibrant traditions, and warm hospitality of Central Africa. From the Sahara Desert to Lake Chad, experience the untouched beauty of this remarkable nation.',
  keywords: 'Chad, Africa, tourism, travel, Lake Chad, Ennedi Plateau, Zakouma National Park, Sahara Desert, African culture, N\'Djamena',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Discover Chad - Explore the Heart of Africa',
    description: 'Your gateway to exploring the breathtaking landscapes, rich culture, and warm hospitality of Central Africa.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

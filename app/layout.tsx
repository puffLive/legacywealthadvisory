import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Legacy Wealth Advisory - Strength for Today. Stability for Tomorrow. Legacy Forever.',
  description: 'Estate planning, succession planning, and wealth protection services for high-net-worth individuals and business owners in the Greater Toronto Area.',
  keywords: 'estate planning, succession planning, wealth protection, financial advisor, Greater Toronto Area',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
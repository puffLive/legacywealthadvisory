import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { getPublishedPosts } from '@/lib/blog'
import { Footer } from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const revalidate = 3600

export const metadata = {
  metadataBase: new URL('https://www.legacywealthadvisory.ca'),
  openGraph: { type: 'website', locale: 'en_CA', siteName: 'Legacy Wealth Advisory' },
  robots: { index: true, follow: true },
  title: 'Financial Planner in Mississauga | Damian Alexander, CLU | Legacy Wealth Advisory',
  description: 'Legacy Wealth Advisory provides financial planning, retirement planning, investment and insurance solutions, estate planning, and business succession planning in Mississauga, Ontario and the Greater Toronto Area.',
  keywords: 'financial advisor Mississauga, financial planner Mississauga, Legacy Wealth Advisory, Damian Alexander CLU, retirement planning Mississauga, estate planning Mississauga, succession planning, life insurance, investment planning, Greater Toronto Area',
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
        <Header blogTopics={Array.from(new Set(getPublishedPosts().map(post => post.category))).sort()} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
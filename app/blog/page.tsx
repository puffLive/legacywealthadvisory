import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { BlogList, BookConsultationButton } from '@/components/blog'
import { getPublishedPosts, toMeta, SITE_URL } from '@/lib/blog'

// Re-check hourly so scheduled articles appear on their publish date without a redeploy.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Financial Planning Insights | Legacy Wealth Advisory Blog',
  description:
    'Educational articles on Canadian retirement, pensions, RRSPs, RDSPs, insurance and estate planning from Legacy Wealth Advisory in Mississauga.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog`,
    title: 'Financial Planning Insights | Legacy Wealth Advisory',
    description:
      'Educational articles on Canadian retirement, pensions, RRSPs, RDSPs, insurance and estate planning.',
    siteName: 'Legacy Wealth Advisory',
    images: [{ url: `${SITE_URL}/images/logo/legacyLogos/lwa-logo-512x512.png` }],
  },
}

export default function BlogPage() {
  const posts = getPublishedPosts().map(toMeta)

  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Build • Protect • Transfer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Financial Planning Insights</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Plain-language articles to help Canadian families and business owners understand retirement,
              pensions, insurance and estate planning. They are here to educate, not to replace advice for
              your own situation.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <Container>
          <BlogList posts={posts} />
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-950 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Question About Your Own Plan?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Speak with a financial planner about how these topics apply to you and your family.
            </p>
            <BookConsultationButton />
          </div>
        </Container>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui'
import { BlogDisclaimer, BookConsultationButton, PostCard } from '@/components/blog'
import {
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  formatPostDate,
  toMeta,
  SITE_URL,
} from '@/lib/blog'

// Pages are built for live posts; scheduled posts render on first visit after their date.
export const revalidate = 3600
export const dynamicParams = true

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Article not found | Legacy Wealth Advisory', robots: { index: false } }

  const url = `${SITE_URL}/blog/${post.slug}`
  const image = post.image
    ? `${SITE_URL}${post.image}`
    : `${SITE_URL}/images/logo/legacyLogos/lwa-logo-512x512.png`

  return {
    title: `${post.title} | Legacy Wealth Advisory`,
    description: post.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.seoDescription,
      siteName: 'Legacy Wealth Advisory',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      section: post.category,
      images: [{ url: image, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seoDescription,
      images: [image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post).map(toMeta)
  const url = `${SITE_URL}/blog/${post.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    articleSection: post.category,
    mainEntityOfPage: url,
    url,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/images/logo/legacyLogos/lwa-logo-512x512.png`,
    author: { '@type': 'Person', name: 'Damian Alexander', url: `${SITE_URL}/about` },
    publisher: {
      '@type': 'Organization',
      name: 'Legacy Wealth Advisory',
      '@id': `${SITE_URL}/#business`,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo/legacyLogos/lwa-logo-512x512.png` },
    },
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <Container size="md">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-100 mb-6">
            <Link href="/blog" className="hover:text-gold-400 transition-colors">
              ← Financial Planning Insights
            </Link>
          </nav>
          <p className="text-gold-400 font-semibold uppercase tracking-wide text-sm mb-4">{post.category}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-blue-100">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.updated && post.updated !== post.date && (
              <>
                {' · Updated '}
                <time dateTime={post.updated}>{formatPostDate(post.updated)}</time>
              </>
            )}
            {` · ${post.readingMinutes} min read`}
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <Container size="md">
          {post.image && (
            <div className="relative aspect-[16/9] mb-10 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt || ''}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="mt-8 border-t pt-5 text-sm text-gray-600">Published by Legacy Wealth Advisory. <Link href="/about" className="underline font-medium text-primary-950">Meet Damian Alexander, CLU, and learn about our planning approach.</Link></div>
          <BlogDisclaimer />
          <nav aria-label="Financial planning resources" className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-primary-950"><Link className="underline" href="/resources/calculators">Financial planning calculators</Link><Link className="underline" href="/guides">Canadian financial planning guides</Link></nav>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary-950 to-primary-800 text-white p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Speak With a Financial Planner</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Every family&apos;s situation is different. Book a consultation to talk through how this applies to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookConsultationButton />
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-[3rem] py-3 px-8 text-center leading-snug text-lg rounded-md border border-white text-white font-medium hover:bg-white hover:text-primary-950 transition-colors"
              >
                Explore Our Financial Planning Services
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="font-semibold text-primary-950 hover:text-gold-700 transition-colors">
              ← Back to all articles
            </Link>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gray-50" aria-labelledby="related-heading">
          <Container>
            <h2 id="related-heading" className="text-3xl font-bold text-primary-950 mb-10 text-center">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  )
}

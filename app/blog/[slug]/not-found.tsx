import Link from 'next/link'
import { Container } from '@/components/ui'

export default function ArticleNotFound() {
  return (
    <main className="py-24 bg-white">
      <Container size="sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-950 mb-4">Article not found</h1>
          <p className="text-lg text-gray-600 mb-8">
            This article may have moved, or it is not published yet.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary-950 text-white font-medium hover:bg-primary-800 transition-colors"
          >
            Browse all articles
          </Link>
        </div>
      </Container>
    </main>
  )
}

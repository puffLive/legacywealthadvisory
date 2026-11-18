import Image from 'next/image'
import Link from 'next/link'
import type { PostMeta } from '@/lib/blog-shared'
import { formatPostDate } from '@/lib/blog-shared'

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
      <Link href={`/blog/${post.slug}`} className="block" tabIndex={-1} aria-hidden="true">
        {post.image ? (
          <div className="relative aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.imageAlt || ''}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 flex items-center justify-center">
            <Image
              src="/images/logo/legacyLogos/lwa-logo-192x192.png"
              alt=""
              width={72}
              height={72}
              className="opacity-90"
            />
          </div>
        )}
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-3">
          <span className="font-semibold uppercase tracking-wide text-gold-700">{post.category}</span>
          <span className="text-gray-400" aria-hidden="true">•</span>
          <time dateTime={post.date} className="text-gray-500">
            {formatPostDate(post.date)}
          </time>
        </div>
        <h2 className="text-xl font-bold text-primary-950 mb-3 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary-700 transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 flex-1">{post.summary}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center font-semibold text-primary-950 hover:text-gold-700 transition-colors"
          aria-label={`Read article: ${post.title}`}
        >
          Read Article
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

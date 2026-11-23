'use client'

import * as React from 'react'

type Review = { id: string; name: string; text: string; rating: number; date: string }
type ReviewData = { success?: boolean; data?: { reviews?: Review[]; averageRating?: number; totalReviews?: number } }

const GOOGLE_REVIEWS_URL = 'https://www.google.com/searchviewer/10?output=search&svid=CCYSGioYOhYweDA6MHhjOTc1ODg1ZWQyMjdlMjQzGAo&hl=en&gl=CA#sv=CAESzQEKuQEStgEKd0FERGJXZWJJRnkxV2ROX1B6Zm1PenVxbDBIa1Q0NnlqUURwYVRhakNFQi0xTEN3eTYwMXF1dmp4LVNoTW0zQWFnSHEzRHBVaWV3MlBZMDBCcHZjSE1jMUxzc3hfdWFXeWpyQm1vU1hCRkRSUHJhQUdnRXFLVzJZEhdHdFlEYV9uSEhNYTVtTFFQdTlyTHlBcxoiQUhOMEU3RVZETWtWSGxSNEk2QnVtOThGSW5semxlVXRKZxIEODA1MRoBMyoAMAA4AUAAGAAg95L05QNKAhAB'

export function GoogleTestimonialsSection() {
  const [reviews, setReviews] = React.useState<Review[]>([])
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    let active = true
    fetch('/api/google-reviews')
      .then(response => response.ok ? response.json() as Promise<ReviewData> : null)
      .then(result => {
        if (!active || !result?.success) return
        const authentic = (result.data?.reviews ?? []).filter(review =>
          typeof review.name === 'string' && typeof review.text === 'string' &&
          review.text.trim().length > 0 && review.rating >= 1 && review.rating <= 5
        )
        setReviews(authentic)
      })
      .catch(() => { /* Keep the Google reviews link visible without inventing testimonials. */ })
    return () => { active = false }
  }, [])

  React.useEffect(() => {
    if (reviews.length < 2) return
    const timer = window.setInterval(() => setIndex(i => (i + 1) % reviews.length), 6500)
    return () => window.clearInterval(timer)
  }, [reviews.length])

  const current = reviews[index]

  return (
    <section aria-labelledby="client-reviews-heading" className="border-t border-[#e8e4dc] bg-[#f7f6f2] py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9a7a3f]">Client feedback</p>
          <h2 id="client-reviews-heading" className="mt-4 font-serif text-3xl text-[#102c49] sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-sm leading-7 text-[#64717b]">Explore feedback shared about Legacy Wealth Advisory on Google.</p>
        </div>
        {current && (
          <div className="mx-auto mt-10 max-w-3xl border border-[#e8e4dc] bg-white px-7 py-9 text-center shadow-sm sm:px-12">
            <p className="text-xl tracking-[.2em] text-[#b28b46]" aria-label={`${current.rating} out of 5 stars`}>{'★'.repeat(Math.round(current.rating))}</p>
            <blockquote className="mt-5 text-lg leading-8 text-[#243b52]">“{current.text}”</blockquote>
            <p className="mt-6 font-semibold text-[#102c49]">{current.name}</p>
            <p className="mt-1 text-xs text-[#68747d]">Google review · {current.date}</p>
            {reviews.length > 1 && <div className="mt-6 flex items-center justify-center gap-5">
              <button type="button" onClick={() => setIndex(i => (i - 1 + reviews.length) % reviews.length)} className="rounded-full border border-[#d7d2c7] px-4 py-2 text-[#102c49]" aria-label="Previous review">←</button>
              <span className="text-xs text-[#64717b]">{index + 1} of {reviews.length}</span>
              <button type="button" onClick={() => setIndex(i => (i + 1) % reviews.length)} className="rounded-full border border-[#d7d2c7] px-4 py-2 text-[#102c49]" aria-label="Next review">→</button>
            </div>}
          </div>
        )}
        <div className="mt-8 text-center">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-[#102c49] px-6 py-3 text-sm font-semibold text-[#102c49] transition-colors hover:bg-[#102c49] hover:text-white">Read Our Google Reviews ↗</a>
        </div>
      </div>
    </section>
  )
}

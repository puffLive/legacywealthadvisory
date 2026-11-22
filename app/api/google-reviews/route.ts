import { NextResponse } from 'next/server'

export const revalidate = 3600

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) {
    return NextResponse.json({ success: false, error: 'Google reviews are not configured' }, { status: 503 })
  }

  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: 'name,rating,user_ratings_total,reviews',
      key: apiKey,
    })
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params}`, { next: { revalidate: 3600 } })
    if (!response.ok) throw new Error('Google Places request failed')
    const payload = await response.json()
    if (payload.status !== 'OK' || !payload.result) throw new Error('Google Places returned no verified reviews')
    const reviews = (payload.result.reviews ?? [])
      .filter((review: any) => typeof review.text === 'string' && review.text.trim() && review.rating >= 1)
      .sort((a: any, b: any) => b.time - a.time)
      .map((review: any) => ({
        id: `${review.author_name}-${review.time}`,
        name: review.author_name,
        text: review.text,
        rating: review.rating,
        date: review.relative_time_description ?? '',
      }))
    return NextResponse.json({
      success: true,
      data: { reviews, averageRating: payload.result.rating, totalReviews: payload.result.user_ratings_total },
    })
  } catch (error) {
    console.error('Unable to retrieve Google reviews:', error)
    return NextResponse.json({ success: false, error: 'Verified Google reviews temporarily unavailable' }, { status: 502 })
  }
}

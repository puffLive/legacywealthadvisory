'use client'

import * as React from 'react'
import { Container } from '@/components/ui'

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  timestamp: number;
  profileUrl?: string;
  profilePhoto?: string;
}

interface GoogleReviewsData {
  businessName?: string;
  averageRating?: number;
  totalReviews?: number;
  reviews: Review[];
}

// Fallback testimonials in case API is not configured or fails
const fallbackTestimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    text: 'Damian guided us through a complex succession plan that preserved our family business while minimizing tax implications. His expertise and attention to detail gave us complete confidence in our decisions.',
    rating: 5,
    date: 'Recently',
  },
  {
    id: '2',
    name: 'Michael Roberts',
    text: 'The estate planning strategy Damian developed exceeded our expectations. He took the time to understand our unique situation and created a plan that protects our legacy for our grandchildren.',
    rating: 5,
    date: 'Recently',
  },
  {
    id: '3',
    name: 'Jennifer Thompson',
    text: 'Working with Legacy Wealth Advisory was a game-changer for our family. Damian\'s comprehensive approach to wealth protection gave us peace of mind we never had before.',
    rating: 5,
    date: 'Recently',
  },
];

export function GoogleTestimonialsSection() {
  const [reviews, setReviews] = React.useState<Review[]>(fallbackTestimonials);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [businessInfo, setBusinessInfo] = React.useState<{
    name?: string;
    rating?: number;
    totalReviews?: number;
  }>({});

  // Fetch real Google reviews
  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');

        if (!response.ok) {
          console.error('Failed to fetch reviews');
          return;
        }

        const result = await response.json();

        if (result.success && result.data.reviews.length > 0) {
          setReviews(result.data.reviews);
          setBusinessInfo({
            name: result.data.businessName,
            rating: result.data.averageRating,
            totalReviews: result.data.totalReviews
          });
        }
      } catch (error) {
        console.error('Error loading Google reviews:', error);
        // Keep fallback testimonials
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Auto-advance testimonials
  React.useEffect(() => {
    if (!isAutoPlaying || reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            their experience working with Legacy Wealth Advisory.
          </p>

          {/* Google Reviews Stats */}
          {businessInfo.rating && (
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(Math.round(businessInfo.rating))}</div>
                <span className="text-xl font-semibold text-primary-950">
                  {businessInfo.rating.toFixed(1)}
                </span>
              </div>
              {businessInfo.totalReviews && (
                <span className="text-gray-600">
                  Based on {businessInfo.totalReviews} Google Reviews
                </span>
              )}
            </div>
          )}

          {/* Google Reviews Link */}
          <div className="flex justify-center">
            <a
              href={`https://www.google.com/maps/place/?q=place_id:${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-950 text-primary-950 rounded-lg hover:bg-primary-950 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Write a Review on Google
            </a>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-400/10 to-primary-950/10 rounded-full -translate-y-16 translate-x-16"></div>

            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-gold-400/20">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(currentReview.rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                &quot;{currentReview.text}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                {currentReview.profilePhoto ? (
                  <img
                    src={currentReview.profilePhoto}
                    alt={currentReview.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-950 to-primary-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {getInitials(currentReview.name)}
                  </div>
                )}
                <div className="text-left">
                  <div className="font-bold text-primary-950 text-lg">
                    {currentReview.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentReview.date}
                  </div>
                  {!isLoading && businessInfo.name && (
                    <div className="text-xs text-gray-400 mt-1">
                      Google Review
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center text-primary-950 hover:text-primary-800 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center text-primary-950 hover:text-primary-800 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-950'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-950 to-gold-500 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / reviews.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-950 mb-2">25+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-950 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Families Helped</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-950 mb-2">$50M+</div>
            <div className="text-gray-600 text-sm">Assets Protected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-950 mb-2">
              {businessInfo.rating ? `${businessInfo.rating.toFixed(1)}★` : '5.0★'}
            </div>
            <div className="text-gray-600 text-sm">Google Rating</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
'use client'

import Image from 'next/image'
import * as React from 'react'

const slides = [
  {
    src: '/images/hero-images/lwa-elephant-herd.jpg',
    alt: 'Elephant herd standing together in the landscape',
    position: 'center 44%',
  },
  {
    src: '/images/hero-images/lwa-multigenerational-people-hugging.jpg',
    alt: 'Multiple generations of people embracing',
    position: 'center center',
  },
  {
    src: '/images/hero-images/lwa-palms-of-the-father-and-mother.jpg',
    alt: 'Parents holding hands, representing family and connection',
    position: 'center center',
  },
  {
    src: '/images/hero-images/lwa-senior-couple-holding-hands.jpg',
    alt: 'Older couple holding hands',
    position: 'center center',
  },
]

export function HomeHeroGallery() {
  const [active, setActive] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  React.useEffect(() => {
    if (paused || reducedMotion) return
    const timer = window.setInterval(() => {
      setActive(index => (index + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion])

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden bg-[#d9d4ca] lg:min-h-[550px]" aria-label="Legacy Wealth Advisory homepage photo gallery" aria-roledescription="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={index === active ? slide.alt : ''}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 49vw"
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102c49]/30 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
        <div className="flex items-center gap-2" role="group" aria-label="Choose a photograph">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show photo ${index + 1} of ${slides.length}`}
              aria-current={index === active ? 'true' : undefined}
              className={`h-2.5 rounded-full border border-white/90 shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${index === active ? 'w-7 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/70'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused(value => !value)}
          className="rounded-full border border-white/60 bg-[#102c49]/45 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white backdrop-blur-sm hover:bg-[#102c49]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={paused ? 'Resume photo rotation' : 'Pause photo rotation'}
          aria-pressed={paused}
        >
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
    </div>
  )
}

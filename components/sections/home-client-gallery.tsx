'use client'

import Image from 'next/image'
import * as React from 'react'

const photos = [
  { src: '/images/hero-images/lwa-senior-couple-holding-hands.jpg', alt: 'Older couple holding hands' },
  { src: '/images/hero-images/lwa-palms-of-the-father-and-mother.jpg', alt: 'Parents holding hands' },
  { src: '/images/hero-images/lwa-multigenerational-people-hugging.jpg', alt: 'People from multiple generations embracing' },
  { src: '/images/hero-images/lwa-elephant-herd.jpg', alt: 'Elephant herd together in the landscape' },
]

export function HomeClientGallery() {
  const [active, setActive] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const [reduced, setReduced] = React.useState(true)
  const [visible, setVisible] = React.useState(false)
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    const observer = new IntersectionObserver(entries => setVisible(entries.some(entry => entry.isIntersecting)), { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => { media.removeEventListener('change', update); observer.disconnect() }
  }, [])

  React.useEffect(() => {
    if (paused || reduced || !visible) return
    const timer = window.setInterval(() => setActive(i => (i + 1) % photos.length), 5000)
    return () => window.clearInterval(timer)
  }, [paused, reduced, visible])

  return (
    <section ref={ref} aria-label="Family and legacy photo gallery" aria-roledescription="carousel" className="relative overflow-hidden bg-[#102c49]">
      <div className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[440px]">
        <div className="flex h-full motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-in-out" style={{ transform: 'translateX(-' + active * 100 + '%)' }}>
          {photos.map((photo, i) => (
            <div key={photo.src} aria-hidden={i !== active} className="relative h-full w-full shrink-0">
              <Image src={photo.src} alt={i === active ? photo.alt : ''} fill sizes="100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102c49]/50 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 sm:bottom-7 sm:left-10 sm:right-10">
          <span className="rounded-sm bg-[#102c49]/70 px-3 py-2 text-xs tracking-widest text-white">{String(active + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous photograph" onClick={() => { setPaused(true); setActive(i => (i + photos.length - 1) % photos.length) }} className="h-11 w-11 rounded-full border border-white/80 bg-[#102c49]/70 text-xl text-white">←</button>
            <button type="button" aria-label="Next photograph" onClick={() => { setPaused(true); setActive(i => (i + 1) % photos.length) }} className="h-11 w-11 rounded-full border border-white/80 bg-[#102c49]/70 text-xl text-white">→</button>
            {!reduced && <button type="button" aria-label={paused ? 'Resume rotation' : 'Pause rotation'} onClick={() => setPaused(p => !p)} className="min-h-11 rounded-full border border-white/80 bg-[#102c49]/70 px-4 text-xs text-white">{paused ? 'Play' : 'Pause'}</button>}
          </div>
        </div>
      </div>
    </section>
  )
}

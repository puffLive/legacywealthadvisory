'use client'
import * as React from 'react'
export function HomeScrollMotion() {
  React.useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.lwa-reveal')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('lwa-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('lwa-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: .12, rootMargin: '0px 0px -25px 0px' })
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}

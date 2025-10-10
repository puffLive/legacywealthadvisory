'use client'

import { Button, Container, CalendlyModal } from '@/components/ui'
import * as React from 'react'

export function HeroSection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false)

  return (
    <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20 lg:py-32">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Strength for Today.{' '}
            <span className="text-gold-400">Stability for Tomorrow.</span>{' '}
            <span className="text-gold-300">Legacy Forever.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Welcome to Legacy Wealth Advisory, where we serve as your trusted partners
            for estate planning, succession planning, and wealth protection in the Greater Toronto Area.
            We are the innovators, architects of fortune, and legacy curators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book Your Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-950">
              Download Estate Planning Checklist
            </Button>
          </div>

          <CalendlyModal
            url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/damian-legacywealthadvisory'}
            isOpen={isCalendlyOpen}
            onClose={() => setIsCalendlyOpen(false)}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '002B5C',
              textColor: '1a202c',
            }}
          />

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">CLU Designated</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
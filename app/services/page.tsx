'use client'

import * as React from 'react'
import Link from 'next/link'
import { CalendlyModal } from '@/components/ui/calendly-booking'
import { Button } from '@/components/ui'

const services = [
  {
    title: 'Critical Illness Insurance',
    href: '/services/critical-illness',
    description: 'Learn how a qualifying critical illness benefit can help protect your savings, income and family during recovery.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h2l1-2 2 4 1-2h2" />
      </svg>
    ),
  },
  {
    title: 'Life Insurance',
    href: '/services/life-insurance',
    description: 'Explore term and permanent life insurance as tools for protecting family income, supporting business continuity and planning your estate.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Estate Planning',
    href: '/services/estate-planning',
    description: 'Protect your legacy and ensure your assets are distributed according to your wishes with comprehensive estate planning strategies.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Succession Planning',
    href: '/services/succession-planning',
    description: 'Seamlessly transfer business ownership and leadership while minimizing tax implications and preserving business value.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Wealth Protection',
    href: '/services/wealth-protection',
    description: 'Safeguard your family\'s financial future with strategic risk management and asset protection solutions.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Wealth Advisory Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Specialized financial planning solutions for high-net-worth individuals and business owners in the Greater Toronto Area.
            </p>
            <Button
              onClick={() => setIsCalendlyOpen(true)}
              variant="secondary"
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-600"
              >
                <div className="p-8">
                  <div className="text-primary-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <span className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Legacy Wealth Advisory?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Chartered Life Underwriter with extensive experience in estate and succession planning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">
                    Tailored strategies designed specifically for your unique financial situation and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Solutions</h3>
                  <p className="text-gray-600">
                    Integrated planning that addresses all aspects of wealth preservation and transfer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Term Partnership</h3>
                  <p className="text-gray-600">
                    Ongoing support and adjustments as your life circumstances and goals evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Financial Legacy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how we can help protect and grow your wealth for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
              >
                Schedule a Consultation
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal
        url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/planningwithdamian/30-min-with-damian'}
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        pageSettings={{
          backgroundColor: 'ffffff',
          textColor: '102a43',
          primaryColor: '163759'
        }}
      />
    </div>
  )
}

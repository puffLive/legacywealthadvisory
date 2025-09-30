'use client'

import * as React from 'react'
import { Container } from '@/components/ui'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding Your Vision',
    description: 'We begin by deeply understanding your unique financial situation, family dynamics, and long-term objectives through comprehensive discovery sessions.',
    details: [
      'Comprehensive financial assessment',
      'Family dynamics and goals analysis',
      'Risk tolerance evaluation',
      'Current strategy review',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Crafting Your Strategy',
    description: 'Based on our discoveries, we design a customized wealth management and legacy planning strategy tailored specifically to your needs and objectives.',
    details: [
      'Customized strategy development',
      'Product and solution selection',
      'Tax optimization planning',
      'Implementation roadmap creation',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Protect',
    subtitle: 'Securing Your Legacy',
    description: 'We implement and monitor your personalized strategy, ensuring your wealth is protected and your legacy is preserved for future generations.',
    details: [
      'Strategy implementation',
      'Ongoing monitoring and adjustments',
      'Regular review meetings',
      'Legacy preservation assurance',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = React.useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-6">
            Our Proven Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a systematic three-step approach to ensure your wealth management
            and legacy planning objectives are met with precision and care.
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-950 to-gold-500 transform -translate-y-1/2 w-full"></div>

            <div className="grid grid-cols-3 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Number Circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-16 h-16 bg-white border-4 border-primary-950 rounded-full flex items-center justify-center text-primary-950 font-bold text-lg group-hover:bg-primary-950 group-hover:text-white transition-colors duration-300 mx-auto">
                      {step.number}
                    </div>
                    {/* Icon */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center group-hover:bg-gold-600 transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                    <h3 className="text-2xl font-bold text-primary-950 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gold-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-300 ${activeStep === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="text-left text-sm text-gray-500 space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-gold-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked View */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="flex items-start space-x-4">
              {/* Left Side - Number & Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-950 text-white rounded-full flex items-center justify-center font-bold mb-2">
                  {step.number}
                </div>
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="w-px h-24 bg-gradient-to-b from-primary-950 to-gold-500 ml-6 mt-4"></div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center mr-3">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-950">
                      {step.title}
                    </h3>
                    <p className="text-gold-600 font-semibold text-sm">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-gold-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary-950 to-primary-800 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&apos;s schedule a discovery session to understand your unique situation and start
            crafting a personalized strategy for your financial future.
          </p>
          <button className="bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center">
            Schedule Discovery Session
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  )
}
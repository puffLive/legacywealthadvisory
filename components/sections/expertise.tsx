import Link from 'next/link'
import { Container, Card, CardContent } from '@/components/ui'

const expertiseAreas = [
  {
    title: 'Estate Planning',
    description: 'Comprehensive estate planning strategies to protect your wealth and ensure your legacy is preserved for future generations.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: '/services/estate-planning',
    features: [
      'Will and testament drafting',
      'Trust establishment',
      'Tax optimization strategies',
      'Beneficiary planning',
    ],
  },
  {
    title: 'Succession Planning',
    description: 'Strategic business succession planning to ensure seamless transitions and protect your business legacy.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    href: '/services/succession-planning',
    features: [
      'Business valuation assessment',
      'Transition strategy development',
      'Family governance structures',
      'Exit planning optimization',
    ],
  },
  {
    title: 'Wealth Protection',
    description: 'Comprehensive wealth protection strategies to safeguard your assets from potential risks and uncertainties.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
    href: '/services/wealth-protection',
    features: [
      'Asset protection strategies',
      'Insurance optimization',
      'Risk management planning',
      'Liability mitigation',
    ],
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-6">
            Our Pillars of Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in three core areas that form the foundation of comprehensive
            wealth management and legacy planning for discerning clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <div key={area.title} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-primary-950 text-gold-400 rounded-2xl group-hover:bg-gold-500 group-hover:text-primary-950 transition-colors duration-300">
                      {area.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary-950 mb-4">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Features */}
                  <ul className="text-left text-sm text-gray-500 mb-6 space-y-2">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-4 h-4 text-gold-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={area.href}
                    className="inline-flex items-center text-primary-950 hover:text-gold-600 font-semibold group-hover:text-gold-600 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to discuss your unique financial situation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-950 text-white hover:bg-primary-800 rounded-lg font-semibold transition-colors"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  )
}
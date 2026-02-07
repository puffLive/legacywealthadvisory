'use client'

import * as React from 'react'
import Image from 'next/image'
import { Container, Button, CalendlyModal } from '@/components/ui'

const credentials = [
  {
    title: 'Chartered Life Underwriter (CLU)',
    description: 'Advanced professional designation in life insurance and estate planning',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Licensed Financial Planner',
    description: 'Certified to provide comprehensive financial planning services',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Advocis Member',
    description: 'Member of Canada&apos;s premier association of financial advisors',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const values = [
  {
    title: 'Integrity First',
    description: 'We build lasting relationships based on trust, transparency, and ethical practices in everything we do.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your unique goals and circumstances drive every recommendation we make and every strategy we implement.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Excellence in Execution',
    description: 'We are committed to delivering exceptional results through meticulous planning and professional execution.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Long-term Partnership',
    description: 'We view our relationships as partnerships that evolve and grow with your changing needs over time.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false)

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gold-400 mb-2">
                Founder & President
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Damian Alexander
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Financial Planner & Chartered Life Underwriter dedicated to protecting
                and growing your wealth for generations to come.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-blue-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>500+ Families Helped</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Over $50 Million Assets Protected</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>100% Client Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 bg-gradient-to-br from-gold-400/20 to-primary-700/20 rounded-2xl p-4">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/portrait/damian-alexander_profile-image.jpeg"
                    alt="Damian Alexander - Financial Planner & CLU"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-8 text-center">
              A Commitment to Your Financial Success
            </h2>

            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-8">
                With over two decades of experience in the financial services industry, Damian Alexander has built Legacy Wealth Advisory on the foundation of trust, expertise, and unwavering commitment to client success.
              </p>

              <p className="mb-6">
                Damian&apos;s journey began in 1999 when he entered the financial industry with a passion for helping clients at one of Canada&apos;s major banks. Recognizing the complex challenges facing medium- and high-net-worth individuals, families, and business owners, he pursued advanced education and professional designations to better serve his clients.
              </p>

              <p className="mb-6">
                In 2006, Damian completed the Canadian Securities Course, followed by the Conduct and Practices Handbook in the same year. In 2007, he successfully completed the Options and Derivatives Course, further strengthening his expertise in investment strategies.
              </p>

              <p className="mb-6">
                In 2008, Damian earned his Canadian Insurance LLQP license, expanding his ability to provide comprehensive insurance and risk-management solutions.
              </p>

              <p className="mb-6">
                In 2018, he achieved his Chartered Life Underwriter (CLU) designation—one of the most respected credentials in insurance and estate planning—and also completed the Canadian Investment Funds Course. These achievements deepened his knowledge in estate planning, taxation, business planning, investment strategies, and risk management.
              </p>

              <p className="mb-6">
                Legacy Wealth Advisory was first conceptualized in 2013 and officially branded in 2023, reflecting Damian&apos;s vision of delivering personalized, comprehensive wealth management solutions to individuals, families, and business owners across the Greater Toronto Area.
              </p>

              <p>
                Today, Damian and Legacy Wealth Advisory have protected over $50 million in assets for more than 500 families, establishing a reputation for excellence in estate planning, succession planning, and wealth protection strategies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
              Professional Credentials & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Damian maintains the highest professional standards through continued education,
              professional designations, and active participation in industry associations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 bg-primary-950 text-gold-400 rounded-2xl mb-6">
                  {credential.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-4">{credential.title}</h3>
                <p className="text-gray-600 leading-relaxed">{credential.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every interaction, recommendation,
              and strategy we develop for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 text-primary-950">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-950 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
              Ready to Secure Your Legacy?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With decades of experience and a commitment to excellence, Damian Alexander
              and Legacy Wealth Advisory are ready to help you build and protect your wealth
              for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="inline-flex items-center"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Schedule a Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="inline-flex items-center">
                Learn About Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </Container>
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
    </main>
  )
}
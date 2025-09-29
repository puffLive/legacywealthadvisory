import Link from 'next/link'
import { Container, Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

const serviceFeatures = [
  {
    title: 'Will and Testament Drafting',
    description: 'Comprehensive will preparation that ensures your assets are distributed according to your wishes while minimizing probate complications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Trust Establishment',
    description: 'Create various types of trusts to protect assets, minimize taxes, and provide ongoing financial support for beneficiaries.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Tax Optimization Strategies',
    description: 'Implement advanced strategies to minimize estate taxes and maximize the wealth transferred to your beneficiaries.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Power of Attorney Documentation',
    description: 'Establish legal authority for trusted individuals to make financial and healthcare decisions on your behalf when needed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Beneficiary Planning',
    description: 'Strategic beneficiary designation and contingent planning to ensure your assets reach the right people at the right time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Estate Administration',
    description: 'Guidance through the probate process and estate settlement to ensure efficient transfer of assets to beneficiaries.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Initial Assessment',
    description: 'We begin with a comprehensive review of your current financial situation, family structure, and estate planning goals.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Based on our assessment, we develop a customized estate plan that addresses your unique needs and objectives.',
  },
  {
    step: '03',
    title: 'Documentation & Implementation',
    description: 'We prepare all necessary legal documents and work with qualified attorneys to implement your estate plan.',
  },
  {
    step: '04',
    title: 'Ongoing Review',
    description: 'Regular reviews ensure your estate plan remains current with changing laws, family circumstances, and financial situations.',
  },
]

const faqs = [
  {
    question: 'When should I start estate planning?',
    answer: 'The best time to start estate planning is now, regardless of your age or wealth level. Major life events like marriage, having children, buying a home, or starting a business are excellent triggers to begin or update your estate plan.',
  },
  {
    question: 'What\'s the difference between a will and a trust?',
    answer: 'A will is a legal document that directs how your assets will be distributed after death and goes through probate. A trust is a legal entity that holds assets during your lifetime and can provide more privacy, potentially avoid probate, and offer ongoing management of assets.',
  },
  {
    question: 'How often should I review my estate plan?',
    answer: 'We recommend reviewing your estate plan every 3-5 years or after major life events such as marriage, divorce, birth of children, significant changes in assets, or changes in tax laws.',
  },
  {
    question: 'Can estate planning help reduce taxes?',
    answer: 'Yes, proper estate planning can significantly reduce estate taxes, probate fees, and income taxes for your beneficiaries through various strategies such as trusts, gifting programs, and tax-efficient wealth transfer techniques.',
  },
  {
    question: 'What happens if I don\'t have an estate plan?',
    answer: 'Without an estate plan, your assets will be distributed according to provincial intestacy laws, which may not align with your wishes. The process can be lengthy, expensive, and may create unnecessary stress for your loved ones.',
  },
]

export default function EstatePlanningPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Estate Planning Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Protect your legacy and ensure your wealth is transferred according to your wishes
              with comprehensive estate planning strategies designed for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950">
                Download Estate Planning Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Comprehensive Estate Planning Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estate planning is more than just writing a will. It's about creating a comprehensive
                strategy that protects your assets, minimizes taxes, and ensures your loved ones are
                taken care of according to your wishes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {serviceFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-950 text-gold-400 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Who Needs Estate Planning */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Who Needs Estate Planning?
              </h2>
              <p className="text-lg text-gray-600">
                Estate planning is essential for anyone who wants to protect their assets and loved ones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-primary-950 mb-4">Individuals & Families</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Parents with minor children
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    High-net-worth individuals
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Homeowners with significant assets
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Those with blended families
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Anyone with retirement savings
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-primary-950 mb-4">Business Owners</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sole proprietors and partnerships
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Corporate shareholders
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional practice owners
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real estate investors
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Family business owners
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Our Estate Planning Process
              </h2>
              <p className="text-lg text-gray-600">
                We follow a proven methodology to ensure your estate plan is comprehensive and effective.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-950 text-gold-400 rounded-2xl flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-950 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about estate planning and our services.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold text-primary-950 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-950 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Legacy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't leave your family's financial security to chance. Let's work together to create
              a comprehensive estate plan that protects your assets and honors your wishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Free Consultation
              </Button>
              <Link href="/services/succession-planning" className="inline-flex">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950">
                  Explore Succession Planning
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
import Link from 'next/link'
import { Container, Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

const protectionStrategies = [
  {
    title: 'Survivor Income Planning & Legacy Protection',
    description: 'Ensures loved ones maintain financial stability while protecting your family\'s lifestyle, obligations, and long-term legacy goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Income Protection',
    description: 'Safeguards your cash flow if you can\'t work, covering essential expenses and preserving financial momentum during unexpected interruptions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Asset Protection Structures',
    description: 'Implement legal structures to shield your assets from potential creditors, lawsuits, and other financial threats.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Risk Management Planning',
    description: 'Comprehensive risk assessment and mitigation strategies to protect your wealth from various financial threats.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Wellness Protection Strategy',
    description: 'Provides financial flexibility during health challenges, covering costs and income gaps so you can focus on recovery.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Care Planning',
    description: 'Prepare for potential long-term care needs with insurance solutions that protect your assets and dignity.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

const riskTypes = [
  {
    category: 'Personal Risks',
    risks: [
      { name: 'Premature Death', impact: 'Loss of income and estate taxes', solution: 'Life Insurance' },
      { name: 'Disability', impact: 'Income loss and increased expenses', solution: 'Disability Insurance' },
      { name: 'Critical Illness', impact: 'Medical costs and income loss', solution: 'Critical Illness Coverage' },
      { name: 'Long-Term Care', impact: 'Asset depletion and family burden', solution: 'LTC Insurance' },
    ],
    color: 'red',
  },
  {
    category: 'Business Risks',
    risks: [
      { name: 'Key Person Loss', impact: 'Business disruption and value loss', solution: 'Key Person Insurance' },
      { name: 'Business Disability', impact: 'Operational challenges', solution: 'Business Overhead Insurance' },
      { name: 'Partnership Disputes', impact: 'Business dissolution risk', solution: 'Buy-Sell Agreements' },
      { name: 'Market Downturns', impact: 'Revenue loss and cash flow issues', solution: 'Diversification Strategies' },
    ],
    color: 'blue',
  },
  {
    category: 'Legal & Liability Risks',
    risks: [
      { name: 'Professional Liability', impact: 'Lawsuit and damage claims', solution: 'Professional Liability Insurance' },
      { name: 'Personal Lawsuits', impact: 'Asset exposure and legal costs', solution: 'Asset Protection Structures' },
      { name: 'Employment Issues', impact: 'Wrongful termination claims', solution: 'Employment Practices Insurance' },
      { name: 'Cyber Security', impact: 'Data breach and privacy violations', solution: 'Cyber Liability Insurance' },
    ],
    color: 'green',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Risk Assessment',
    description: 'Comprehensive evaluation of your personal, business, and financial risks to identify potential vulnerabilities.',
  },
  {
    step: '02',
    title: 'Protection Strategy',
    description: 'Develop customized protection strategies that address your specific risks while optimizing cost and coverage.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the protection plan with proper insurance placement and asset protection structure creation.',
  },
  {
    step: '04',
    title: 'Ongoing Management',
    description: 'Regular reviews and adjustments to ensure your protection strategies remain effective and current.',
  },
]

export default function WealthProtectionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Wealth Protection Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Safeguard your hard-earned wealth against unforeseen risks with comprehensive
              protection strategies designed to preserve your financial security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Risk Assessment
              </Button>
              {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950">
                Download Protection Guide
              </Button> */} {/* Hidden for now - download not ready */}
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
                Comprehensive Wealth Protection Strategies
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your wealth faces numerous threats throughout your lifetime. Our comprehensive approach
                identifies potential risks and implements strategic protections to safeguard your assets
                and secure your family&apos;s financial future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {protectionStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-950 text-gold-400 rounded-lg flex items-center justify-center mb-4">
                      {strategy.icon}
                    </div>
                    <CardTitle className="text-lg">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {strategy.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Risk Categories */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Understanding Your Risk Exposure
              </h2>
              <p className="text-lg text-gray-600">
                Wealth faces various threats that can significantly impact your financial security.
                Here are the key risk categories we address:
              </p>
            </div>

            <div className="space-y-8">
              {riskTypes.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className={`bg-${category.color}-600 text-white px-8 py-4`}>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.risks.map((risk, riskIndex) => (
                        <div key={riskIndex} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-bold text-primary-950 mb-2">{risk.name}</h4>
                          <p className="text-gray-600 text-sm mb-3">{risk.impact}</p>
                          <div className={`inline-flex px-3 py-1 bg-${category.color}-100 text-${category.color}-800 text-xs font-semibold rounded-full`}>
                            {risk.solution}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Insurance Solutions */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Insurance Solutions We Provide
              </h2>
              <p className="text-lg text-gray-600">
                Access to Canada&apos;s leading insurance providers ensures competitive rates and comprehensive coverage.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-gray-500 font-semibold">Sun Life</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-gray-500 font-semibold">Manulife</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-gray-500 font-semibold">Canada Life</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-gray-500 font-semibold">Empire Life</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-gray-500 font-semibold">Equitable</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-gray-500 font-semibold">iA Financial</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-gold-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-950 mb-4 text-center">
                Why Work with Legacy Wealth Advisory?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary-950 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary-950 mb-2">Independent Access</h4>
                  <p className="text-gray-600 text-sm">Access to multiple insurance companies ensures best rates and coverage for your needs.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary-950 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary-950 mb-2">Expert Guidance</h4>
                  <p className="text-gray-600 text-sm">20+ years of experience and CLU designation ensure professional, knowledgeable advice.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary-950 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary-950 mb-2">Ongoing Service</h4>
                  <p className="text-gray-600 text-sm">Comprehensive service from initial planning through claims support and policy management.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Our Wealth Protection Process
              </h2>
              <p className="text-lg text-gray-600">
                A systematic approach to identifying, evaluating, and protecting against financial risks.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-md">
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

      {/* Case Study */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Protection in Action: A Case Study
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary-950 to-primary-800 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-blue-100 leading-relaxed">
                A successful business owner with $3M in assets was concerned about protecting his
                family&apos;s lifestyle and business operations if he became disabled or passed away
                prematurely. His current insurance coverage was inadequate and outdated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-primary-950 mb-4">Our Solution</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    $2M life insurance policy for family protection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    $15,000/month disability coverage
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Business overhead expense coverage
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Critical illness protection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Asset protection trust structure
                  </li>
                </ul>
              </div>

              <div className="bg-gold-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-primary-950 mb-4">The Results</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Family lifestyle fully protected
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Business operations secured
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Assets protected from creditors
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tax-efficient structure implemented
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Peace of mind achieved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-950 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t Leave Your Wealth Unprotected
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every day without proper protection is a day your wealth is at risk. Let&apos;s work
              together to create a comprehensive protection strategy that safeguards your assets
              and secures your family&apos;s future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Risk Assessment
              </Button>
              <Link href="/contact" className="inline-flex">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
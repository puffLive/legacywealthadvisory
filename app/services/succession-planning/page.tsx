import Link from 'next/link'
import { Container, Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

const serviceFeatures = [
  {
    title: 'Business Valuation & Assessment',
    description: 'Comprehensive valuation of your business to determine fair market value and identify key value drivers for succession planning.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Transition Strategy Development',
    description: 'Create a detailed roadmap for transferring ownership and management to the next generation or key employees.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Family Governance Structures',
    description: 'Establish clear governance frameworks to manage family involvement and decision-making in the business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Tax-Efficient Transfers',
    description: 'Structure ownership transfers to minimize tax implications while maximizing value for all stakeholders.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Exit Planning Strategies',
    description: 'Comprehensive exit strategies including sale to third parties, management buyouts, or family transfers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
  },
  {
    title: 'Leadership Development',
    description: 'Programs to prepare next-generation leaders and key employees for their expanded roles and responsibilities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

const successionOptions = [
  {
    title: 'Family Succession',
    description: 'Transfer ownership and management to family members',
    pros: ['Maintains family legacy', 'Potential tax advantages', 'Continuity of values'],
    cons: ['May lack qualified successors', 'Family conflicts possible', 'Limited buyer pool'],
    bestFor: 'Families with capable next generation committed to the business',
  },
  {
    title: 'Management Buyout',
    description: 'Sale to existing management team or key employees',
    pros: ['Motivated buyers', 'Operational continuity', 'Cultural preservation'],
    cons: ['Financing challenges', 'May lack capital', 'Potential conflicts'],
    bestFor: 'Businesses with strong management teams and loyal employees',
  },
  {
    title: 'Third-Party Sale',
    description: 'Sale to external buyer or competitor',
    pros: ['Maximum valuation', 'Clean exit', 'Competitive bidding'],
    cons: ['Loss of control', 'Cultural changes', 'Employee uncertainty'],
    bestFor: 'Owners seeking maximum value with no family successors',
  },
  {
    title: 'Partial Recapitalization',
    description: 'Sell majority stake while retaining involvement',
    pros: ['Liquidity event', 'Continued involvement', 'Risk reduction'],
    cons: ['Loss of control', 'Ongoing obligations', 'Complex structure'],
    bestFor: 'Owners wanting partial liquidity while remaining involved',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Business Assessment',
    description: 'Comprehensive evaluation of your business, including valuation, operational analysis, and succession readiness.',
  },
  {
    step: '02',
    title: 'Goal Setting & Planning',
    description: 'Define your succession objectives, timeline, and preferred outcomes for the business and your family.',
  },
  {
    step: '03',
    title: 'Strategy Selection',
    description: 'Choose the optimal succession strategy based on your goals, business characteristics, and family dynamics.',
  },
  {
    step: '04',
    title: 'Implementation & Transition',
    description: 'Execute the succession plan with ongoing support through the transition period.',
  },
]

export default function SuccessionPlanningPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Succession Planning
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Secure your business legacy with strategic succession planning that ensures smooth
              transitions and maximizes value for all stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Business Review
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950">
                Download Succession Checklist
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
                Comprehensive Succession Planning Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Business succession planning is one of the most critical decisions you'll make as a business owner.
                Our comprehensive approach ensures your business continues to thrive while providing you with
                the financial security you've worked so hard to achieve.
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

      {/* Succession Options */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                Succession Planning Options
              </h2>
              <p className="text-lg text-gray-600">
                Every business is unique. We'll help you choose the succession strategy that best fits your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successionOptions.map((option, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-950 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Advantages
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {option.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-600">• {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Considerations
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {option.cons.map((con, idx) => (
                          <li key={idx} className="text-gray-600">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-primary-950 font-medium">
                      <strong>Best for:</strong> {option.bestFor}
                    </p>
                  </div>
                </div>
              ))}
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
                Our Succession Planning Process
              </h2>
              <p className="text-lg text-gray-600">
                A systematic approach to creating and implementing your business succession strategy.
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

      {/* When to Start */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-yellow-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-8">
              When Should You Start Succession Planning?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-primary-950 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-gold-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ideal Timing
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 5-10 years before planned exit</li>
                  <li>• When business is performing well</li>
                  <li>• Before age 55-60 for optimal flexibility</li>
                  <li>• When potential successors are identified</li>
                  <li>• During periods of business stability</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-primary-950 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Warning Signs
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• No clear successor identified</li>
                  <li>• Approaching retirement age</li>
                  <li>• Health concerns emerging</li>
                  <li>• Family conflicts about business</li>
                  <li>• Business overly dependent on owner</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary-950 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">The Cost of Waiting</h3>
              <p className="text-blue-100 leading-relaxed">
                Delaying succession planning can result in reduced business value, limited options,
                family conflicts, and unnecessary taxes. The earlier you start, the more options
                you'll have and the better outcomes you can achieve.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-950 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Business Legacy Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't leave your life's work to chance. Let's create a succession plan that protects
              your business, secures your financial future, and preserves your legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Business Consultation
              </Button>
              <Link href="/services/wealth-protection" className="inline-flex">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-950">
                  Explore Wealth Protection
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
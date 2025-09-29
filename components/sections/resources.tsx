'use client'

import * as React from 'react'
import { Container, Button } from '@/components/ui'

const resources = [
  {
    id: 1,
    title: 'Estate Planning Starter Kit',
    description: 'A comprehensive guide to understanding the fundamentals of estate planning, including wills, trusts, and tax optimization strategies.',
    type: 'Guide',
    pages: '24 pages',
    downloadCount: '2,847',
    category: 'Estate Planning',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Business Owner Succession Checklist',
    description: 'Essential steps for business owners planning their exit strategy and ensuring seamless business transition to the next generation.',
    type: 'Checklist',
    pages: '12 pages',
    downloadCount: '1,923',
    category: 'Succession Planning',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'What to Do With a Pension After Job Loss',
    description: 'Navigate pension decisions during career transitions with our expert guidance on rollover options and retirement planning strategies.',
    type: 'White Paper',
    pages: '16 pages',
    downloadCount: '3,156',
    category: 'Wealth Protection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function ResourcesSection() {
  const [showModal, setShowModal] = React.useState(false)
  const [selectedResource, setSelectedResource] = React.useState<typeof resources[0] | null>(null)
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    interests: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleDownload = (resource: typeof resources[0]) => {
    setSelectedResource(resource)
    setShowModal(true)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Here you would typically send the data to your email marketing platform
    console.log('Form submitted:', { formData, resource: selectedResource })

    setIsSubmitting(false)
    setShowModal(false)
    setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', interests: [] })

    // Show success message (you could use a toast notification here)
    alert('Thank you! Your download will begin shortly and you\'ll receive additional valuable insights via email.')
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-6">
            Free Resources & Valuable Insights
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our library of comprehensive guides, checklists, and white papers
            designed to help you make informed decisions about your wealth and legacy.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-950 text-white text-xs font-semibold rounded-full mb-4">
                {resource.category}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 bg-white rounded-xl text-primary-950 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {resource.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-950 mb-3 group-hover:text-primary-800 transition-colors">
                {resource.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {resource.type} • {resource.pages}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  {resource.downloadCount} downloads
                </span>
              </div>

              {/* Download Button */}
              <Button
                onClick={() => handleDownload(resource)}
                className="w-full group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors"
                variant="outline"
              >
                Download Free {resource.type}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary-950 to-primary-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want Personalized Guidance?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            While our resources provide valuable insights, every financial situation is unique.
            Schedule a consultation to discuss your specific needs and objectives.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="inline-flex items-center"
          >
            Schedule Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Button>
        </div>
      </Container>

      {/* Lead Capture Modal */}
      {showModal && selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative max-h-screen overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gold-500 text-white rounded-lg mr-3">
                  {selectedResource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-950">{selectedResource.title}</h3>
                  <p className="text-sm text-gray-500">{selectedResource.type} • {selectedResource.pages}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Get instant access to this valuable resource plus receive additional insights
                and updates from Legacy Wealth Advisory.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />

              <input
                type="text"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />

              {/* Interests */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Areas of Interest (Optional):</p>
                <div className="grid grid-cols-1 gap-2">
                  {['Estate Planning', 'Succession Planning', 'Wealth Protection', 'Tax Optimization'].map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => toggleInterest(interest)}
                        className="mr-2 text-gold-500 focus:ring-gold-500"
                      />
                      <span className="text-sm text-gray-600">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Preparing Download...' : 'Get Free Access'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive valuable insights and updates from Legacy Wealth Advisory.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
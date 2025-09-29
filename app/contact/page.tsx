'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Container, Button, Input, Textarea } from '@/components/ui'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, 'Please select a service of interest'),
  netWorth: z.string().optional(),
  timeframe: z.string().min(1, 'Please select a timeframe'),
  message: z.string().min(10, 'Please provide more details about your needs'),
  preferredContact: z.string().min(1, 'Please select a preferred contact method'),
  referralSource: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  { value: 'estate-planning', label: 'Estate Planning' },
  { value: 'succession-planning', label: 'Business Succession Planning' },
  { value: 'wealth-protection', label: 'Wealth Protection' },
  { value: 'tax-optimization', label: 'Tax Optimization' },
  { value: 'comprehensive', label: 'Comprehensive Planning' },
  { value: 'other', label: 'Other' },
]

const netWorthRanges = [
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-2m', label: '$1M - $2M' },
  { value: '2m-5m', label: '$2M - $5M' },
  { value: '5m-10m', label: '$5M - $10M' },
  { value: '10m+', label: '$10M+' },
]

const timeframeOptions = [
  { value: 'immediate', label: 'Immediately' },
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: 'information-gathering', label: 'Just gathering information' },
]

const contactMethods = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
  { value: 'either', label: 'Either phone or email' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Here you would send the data to your backend/email service
      console.log('Form submitted:', data)

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-primary-950 mb-6">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your message has been sent successfully. Damian will review your inquiry and get back to you within 24 hours.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-primary-950 mb-2">What happens next?</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  We'll review your inquiry and prepare for our conversation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Damian will contact you via your preferred method within 24 hours
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  We'll schedule your complimentary discovery session
                </li>
              </ul>
            </div>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to secure your financial future? Let's discuss your unique situation
              and explore how we can help protect and grow your wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                    required
                  />
                  <Input
                    label="Last Name"
                    {...register('lastName')}
                    error={errors.lastName?.message}
                    required
                  />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    {...register('phone')}
                    error={errors.phone?.message}
                    required
                  />
                </div>

                {/* Company */}
                <Input
                  label="Company (Optional)"
                  {...register('company')}
                  error={errors.company?.message}
                />

                {/* Service Interest */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('serviceInterest')}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.serviceInterest && (
                    <p className="text-sm text-red-600">{errors.serviceInterest.message}</p>
                  )}
                </div>

                {/* Net Worth */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Approximate Net Worth (Optional)
                  </label>
                  <select
                    {...register('netWorth')}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <option value="">Select range</option>
                    {netWorthRanges.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Timeframe */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    When are you looking to get started? <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('timeframe')}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <option value="">Select timeframe</option>
                    {timeframeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.timeframe && (
                    <p className="text-sm text-red-600">{errors.timeframe.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Preferred Contact Method <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {contactMethods.map((method) => (
                      <label key={method.value} className="flex items-center">
                        <input
                          type="radio"
                          value={method.value}
                          {...register('preferredContact')}
                          className="mr-2 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">{method.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.preferredContact && (
                    <p className="text-sm text-red-600">{errors.preferredContact.message}</p>
                  )}
                </div>

                {/* Message */}
                <Textarea
                  label="Tell us about your situation and goals"
                  {...register('message')}
                  error={errors.message?.message}
                  rows={5}
                  required
                  helperText="The more details you provide, the better we can prepare for our conversation"
                />

                {/* Referral Source */}
                <Input
                  label="How did you hear about us? (Optional)"
                  {...register('referralSource')}
                  error={errors.referralSource?.message}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you consent to be contacted by Legacy Wealth Advisory
                  regarding your inquiry. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary-950 to-primary-800 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch Directly</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-blue-100 text-sm mb-2">Cell: <a href="tel:416-471-3766" className="text-gold-400 hover:text-gold-300">(416) 471-3766</a></p>
                      <p className="text-blue-100 text-sm">Office: <a href="tel:905-840-2222" className="text-gold-400 hover:text-gold-300">(905) 840-2222</a></p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:damian@legacywealthadvisory.ca" className="text-gold-400 hover:text-gold-300">
                        damian@legacywealthadvisory.ca
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Location</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        14-30 Eglinton Ave W<br />
                        Mississauga, ON L5R 0C1
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="text-blue-100 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: By appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h4 className="font-semibold text-primary-950">Quick Contact Options</h4>
                <div className="space-y-3">
                  <a
                    href="tel:416-471-3766"
                    className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gold-500 mr-3 group-hover:text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-primary-950">Call Now</p>
                      <p className="text-sm text-gray-600">(416) 471-3766</p>
                    </div>
                  </a>

                  <a
                    href="mailto:damian@legacywealthadvisory.ca"
                    className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gold-500 mr-3 group-hover:text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-primary-950">Send Email</p>
                      <p className="text-sm text-gray-600">damian@legacywealthadvisory.ca</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
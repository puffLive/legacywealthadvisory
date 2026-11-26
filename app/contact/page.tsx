'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Container, Button, Input, Textarea, CalendlyInline } from '@/components/ui'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().trim().refine(value => value === '' || value.replace(/\D/g, '').length >= 10, 'Please enter a valid phone number').optional(),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        reset()
      } else {
        alert(result.error || 'Failed to submit form. Please try again or call us at (905) 840-2222.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to submit form. Please try again or call us at (905) 840-2222.')
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
                  We&apos;ll review your inquiry and prepare for our conversation
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
                  We&apos;ll schedule your complimentary discovery session
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
              Ready to secure your financial future? Let&apos;s discuss your unique situation
              and explore how we can help protect and grow your wealth.
            </p>
          </div>

          {/* Calendly Booking Section */}
          <div id="calendly-booking" className="mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-4">
                  Book Your Complimentary Discovery Session
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Prefer to schedule directly? Select a convenient time for your 30-minute
                  complimentary discovery session. We&apos;ll discuss your goals and explore
                  how we can help secure your financial future.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CalendlyInline
                  url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/planningwithdamian/30-min-with-damian'}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '002B5C',
                    textColor: '1a202c',
                  }}
                />
              </div>
            </div>
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
                    label="Phone Number (Optional)"
                    type="tel"
                    {...register('phone')}
                    error={errors.phone?.message}
                  />
                </div>

                {/* Message */}
                <Textarea
                  label="Tell us about your situation and goals (Optional)"
                  {...register('message')}
                  error={errors.message?.message}
                  rows={5}
                  helperText="The more details you provide, the better we can prepare for our conversation"
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
                      <p className="text-blue-100 text-sm"><a href="tel:905-840-2222" className="text-gold-400 hover:text-gold-300">(905) 840-2222</a></p>
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
                      <a href="mailto:info@legacywealthadvisory.ca" className="text-gold-400 hover:text-gold-300">
                        info@legacywealthadvisory.ca
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
                        14-30 Eglinton Ave W, Suite 579<br />
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
                        Monday - Thursday: 1:00 PM - 5:00 PM<br />
                        Friday: 1:00 PM - 3:00 PM<br />
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
                    href="tel:905-840-2222"
                    className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gold-500 mr-3 group-hover:text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-primary-950">Call Now</p>
                      <p className="text-sm text-gray-600">(905) 840-2222</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@legacywealthadvisory.ca"
                    className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gold-500 mr-3 group-hover:text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-primary-950">Send Email</p>
                      <p className="text-sm text-gray-600">info@legacywealthadvisory.ca</p>
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
'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Container } from '@/components/ui'
import { Logo } from './logo'

const navigationLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Estate Planning', href: '/services/estate-planning' },
    { label: 'Succession Planning', href: '/services/succession-planning' },
    { label: 'Wealth Protection', href: '/services/wealth-protection' },
  ],
  resources: [
    { label: 'Resources', href: '/resources' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

const partnerLogos = [
  { name: 'Sun Life', src: '/images/logo/partnerLogos/sunlife.svg' },
  { name: 'Manulife', src: '/images/logo/partnerLogos/manulife.svg' },
  { name: 'Canada Life', src: '/images/logo/partnerLogos/canadaLife.svg' },
  { name: 'Empire Life', src: '/images/logo/partnerLogos/empireLife.svg' },
  { name: 'Equitable Life', src: '/images/logo/partnerLogos/equitableLife.svg' },
  { name: 'iA Financial Group', src: '/images/logo/partnerLogos/iAFinancialGroup.svg' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage('Please enter your email address')
      setIsSuccess(false)
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(data.message)
        setIsSuccess(true)
        setEmail('')
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
      // Clear message after 5 seconds
      setTimeout(() => setMessage(''), 5000)
    }
  }

  return (
    <footer className="bg-primary-950 text-white">
      <Container className="py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted partner for estate planning, succession planning, and wealth protection
              in the Greater Toronto Area.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-gold-400">Damian Alexander</p>
              <p className="text-gray-300">Financial Planner & CLU</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {navigationLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {navigationLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">Cell:</p>
                <a
                  href="tel:416-471-3766"
                  className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  (416) 471-3766
                </a>
              </div>
              <div>
                <p className="text-gray-300">Office:</p>
                <a
                  href="tel:905-840-2222"
                  className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  (905) 840-2222
                </a>
              </div>
              <div>
                <p className="text-gray-300">Email:</p>
                <a
                  href="mailto:damian@legacywealthadvisory.ca"
                  className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  damian@legacywealthadvisory.ca
                </a>
              </div>
              <div className="pt-2">
                <p className="text-gray-300 text-xs leading-relaxed">
                  14-30 Eglinton Ave W<br />
                  Mississauga, ON L5R 0C1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-3">Stay Informed</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get valuable insights on estate planning and wealth protection strategies.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-600 disabled:opacity-50 text-primary-950 font-medium rounded-md transition-colors whitespace-nowrap disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {message && (
                <p className={`text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-semibold text-lg mb-4 text-center">Our Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70">
            {partnerLogos.map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <div className="relative h-8 w-24">
                  <Image
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials and Legal */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Credentials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-8 w-16">
                  <Image
                    src="/images/logo/partnerLogos/advocis.svg"
                    alt="Advocis member"
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <span className="text-xs text-gray-400">CLU • Financial Planner</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs">
              {navigationLinks.resources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-400">
              © {currentYear} Legacy Wealth Advisory. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Licensed insurance broker in Ontario. All insurance products and services are provided by licensed insurers and brokers.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
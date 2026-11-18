'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui'
import { Logo } from './logo'

const navigationLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Estate Planning', href: '/services/estate-planning' },
    { label: 'Succession Planning', href: '/services/succession-planning' },
    { label: 'Wealth Protection', href: '/services/wealth-protection' },
  ],
  resources: [
    // { label: 'Resources', href: '/resources' }, // Hidden for now
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

const partnerLogos = [
  { name: 'Sun Life', src: '/images/logo/partnerLogos/sunlife.svg', noInvert: false, scale: 1.8 },
  { name: 'Manulife', src: '/images/logo/partnerLogos/manulife.svg', noInvert: false },
  { name: 'Canada Life', src: '/images/logo/partnerLogos/canadaLife.svg', noInvert: false },
  { name: 'Empire Life', src: '/images/logo/partnerLogos/empireLife_clean.svg', noInvert: false },
  { name: 'Equitable Life', src: '/images/logo/partnerLogos/equitableLife.svg', noInvert: false },
  { name: 'iA Financial Group', src: '/images/logo/partnerLogos/iAFinancialGroup.svg', noInvert: false },
  { name: 'Advocis', src: '/images/logo/partnerLogos/advocis.svg', noInvert: false, scale: 1.8 },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              <a href="https://www.linkedin.com/in/damianfalexander/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Damian Alexander on LinkedIn" title="Connect with Damian on LinkedIn" className="inline-flex items-center justify-center rounded-md bg-[#0A66C2] p-2 text-white transition-colors hover:bg-[#004182] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/damianlegacywealthadvisory" target="_blank" rel="noopener noreferrer" aria-label="Legacy Wealth Advisory on Facebook" title="Visit Legacy Wealth Advisory on Facebook" className="ml-2 inline-flex items-center justify-center rounded-md bg-[#1877F2] p-2 text-white transition-colors hover:bg-[#0866FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.973h-1.513c-1.491 0-1.956.93-1.956 1.884v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/legacywealthadvisory.ca/" target="_blank" rel="noopener noreferrer" aria-label="Legacy Wealth Advisory on Instagram" title="Visit Legacy Wealth Advisory on Instagram" className="ml-2 inline-flex items-center justify-center rounded-md bg-[#C13584] p-2 text-white transition-colors hover:bg-[#A52A73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                </svg>
              </a>
              <a href="https://www.threads.com/@legacywealthadvisory.ca?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Legacy Wealth Advisory on Threads" title="Visit Legacy Wealth Advisory on Threads" className="ml-2 inline-flex items-center justify-center rounded-md bg-black p-2 text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400">
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.7 9.8c-.2-1.5-.8-2.7-1.8-3.6-1-.9-2.3-1.4-3.9-1.4-2.2 0-3.8 1.1-4.7 3.1l1.9.8c.6-1.3 1.5-1.9 2.8-1.9 1.9 0 3 1 3.4 2.8-.9-.4-1.9-.6-3-.6-2.9 0-4.8 1.6-4.8 4.1 0 2.4 1.8 4 4.3 4 2.1 0 3.8-1.1 4.5-3 .4.6.5 1.3.5 2 0 3-2.1 4.9-5.2 4.9-3.7 0-6.1-2.6-6.1-6.6V12c0-4.2 2.5-6.8 6.2-6.8 3.5 0 5.7 2 6.1 5.6l2.1-.2C20.5 5.7 17.4 3 12 3 6.4 3 3 6.7 3 12v.4C3 17.7 6.5 21 12 21c4.4 0 7.3-2.8 7.3-7.1 0-1.5-.4-2.9-1.2-4.1h-.4Zm-5.7 5.4c-1.4 0-2.2-.7-2.2-1.9 0-1.3 1-2.1 2.6-2.1 1.1 0 2.1.3 2.9.9-.2 1.9-1.4 3.1-3.3 3.1Z"/>
                </svg>
              </a>
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
                <p className="text-gray-300">Phone:</p>
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
                  href="mailto:info@legacywealthadvisory.ca"
                  className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  info@legacywealthadvisory.ca
                </a>
              </div>
              <div className="pt-2">
                <p className="text-gray-300 text-xs leading-relaxed">
                  14-30 Eglinton Ave W, Suite 579<br />
                  Mississauga, ON L5R 0C1
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-semibold text-lg mb-6 text-center">Our Partners</h3>
          <div className="relative overflow-hidden group">
            <div className="flex animate-scroll-partners group-hover:pause" style={{ width: 'max-content' }}>
              {/* First set of logos */}
              {partnerLogos.map((partner, index) => (
                <div key={`${partner.name}-1-${index}`} className="inline-flex flex-shrink-0 px-8">
                  <div className="relative h-20 w-48">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                      className={`object-contain ${partner.noInvert ? '' : 'filter brightness-0 invert'} opacity-80 hover:opacity-100 transition-opacity`}
                      style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                    />
                  </div>
                </div>
              ))}
              {/* Second set for seamless scroll */}
              {partnerLogos.map((partner, index) => (
                <div key={`${partner.name}-2-${index}`} className="inline-flex flex-shrink-0 px-8">
                  <div className="relative h-20 w-48">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                      className={`object-contain ${partner.noInvert ? '' : 'filter brightness-0 invert'} opacity-80 hover:opacity-100 transition-opacity`}
                      style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                    />
                  </div>
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {partnerLogos.map((partner, index) => (
                <div key={`${partner.name}-3-${index}`} className="inline-flex flex-shrink-0 px-8">
                  <div className="relative h-20 w-48">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 192px"
                      className={`object-contain ${partner.noInvert ? '' : 'filter brightness-0 invert'} opacity-80 hover:opacity-100 transition-opacity`}
                      style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials and Legal */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Credentials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-xs text-gray-400">CLU • Financial Planner</span>
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
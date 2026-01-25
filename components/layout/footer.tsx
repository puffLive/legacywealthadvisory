'use client';

import Link from 'next/link'
import Image from 'next/image'
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
    // { label: 'Resources', href: '/resources' }, // Hidden for now
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

const partnerLogos = [
  { name: 'Sun Life', src: '/images/logo/partnerLogos/sunlife.svg', noInvert: false },
  { name: 'Manulife', src: '/images/logo/partnerLogos/manulife.svg', noInvert: false },
  { name: 'Canada Life', src: '/images/logo/partnerLogos/canadaLife.svg', noInvert: false },
  { name: 'Empire Life', src: '/images/logo/partnerLogos/empireLife_clean.svg', noInvert: true },
  { name: 'Equitable Life', src: '/images/logo/partnerLogos/equitableLife_clean.png', noInvert: true },
  { name: 'iA Financial Group', src: '/images/logo/partnerLogos/iAFinancialGroup.svg', noInvert: false },
  { name: 'Advocis', src: '/images/logo/partnerLogos/advocis.svg', noInvert: false },
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
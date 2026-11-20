'use client'

import * as React from 'react'
import { Container, Button, CalendlyModal } from '@/components/ui'
import { Logo } from './logo'
import { Navigation, MobileNavigation } from './navigation'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isCalendlyOpen, setIsCalendlyOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-[#163759]',
          isScrolled
            ? 'shadow-lg'
            : '',
          className
        )}
      >
        <Container>
          <div className="flex min-w-0 items-center justify-between gap-3 h-16 xl:h-20 2xl:gap-5">
            {/* Logo */}
            <Logo compact className="text-white hover:text-gold-400" />

            {/* Desktop Navigation */}
            <Navigation className="text-white flex-shrink-0" />

            {/* Contact Info and Book Button - Desktop */}
            <div className="hidden xl:flex items-center flex-shrink-0">
              <Button
                size="md"
                variant="secondary"
                onClick={() => setIsCalendlyOpen(true)}
                className="bg-gold-500 hover:bg-gold-400 text-primary-950 font-semibold px-4 2xl:px-6 py-2 whitespace-nowrap text-sm"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-white hover:text-gold-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onBookConsultation={() => setIsCalendlyOpen(true)}
      />

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 xl:h-20" />

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
    </>
  )
}
'use client'

import * as React from 'react'
import { Container } from '@/components/ui'
import { Logo } from './logo'
import { Navigation, MobileNavigation } from './navigation'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

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
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo className="text-white hover:text-gold-400" />

            {/* Desktop Navigation */}
            <Navigation className="text-white" />

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right text-sm">
                <p className="text-white/80">Call Us Today</p>
                <a
                  href="tel:905-840-2222"
                  className="font-semibold text-white hover:text-gold-400 transition-colors"
                >
                  (905) 840-2222
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
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
      />

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
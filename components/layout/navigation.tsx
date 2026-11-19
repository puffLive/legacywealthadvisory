'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Estate Planning', href: '/services/estate-planning' },
      { label: 'Succession Planning', href: '/services/succession-planning' },
      { label: 'Wealth Protection', href: '/services/wealth-protection' },
      { label: 'Life Insurance', href: '/services/life-insurance' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  // { label: 'Resources', href: '/resources' }, // Hidden for now
  { label: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string | null, href: string) {
  if (!pathname) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className={cn('hidden lg:flex items-center space-x-8', className)}>
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            href={item.href}
            aria-current={isActivePath(pathname, item.href) ? 'page' : undefined}
            className={cn(
              'hover:text-gold-400 font-medium transition-colors py-2 flex items-center',
              isActivePath(pathname, item.href) && 'text-gold-400'
            )}
          >
            {item.label}
            {item.children && (
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </Link>

          {item.children && activeDropdown === item.label && (
            <>
              {/* Invisible bridge to prevent gap issues */}
              <div className="absolute top-full left-0 w-64 h-2 z-40" />
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-950 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </nav>
  )
}

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
  onBookConsultation?: () => void
}

export function MobileNavigation({ isOpen, onClose, onBookConsultation }: MobileNavigationProps) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    )
  }

  if (!isOpen) return null

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="mt-8 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    aria-current={isActivePath(pathname, item.href) ? 'page' : undefined}
                    className={cn(
                      'block py-2 text-gray-700 hover:text-primary-950 font-medium transition-colors flex-1',
                      isActivePath(pathname, item.href) && 'text-primary-950 font-semibold'
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className={cn(
                          'h-4 w-4 transition-transform',
                          expandedItems.includes(item.label) ? 'rotate-180' : ''
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {item.children && expandedItems.includes(item.label) && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-600 hover:text-primary-950 transition-colors"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Book Consultation Button */}
          <div className="mt-6">
            <button
              onClick={() => {
                if (onBookConsultation) {
                  onBookConsultation()
                  onClose()
                }
              }}
              className="w-full bg-gold-500 hover:bg-gold-400 text-primary-950 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Book Consultation
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium">Contact Information</p>
              <p>Phone: (905) 840-2222</p>
              <p>info@legacywealthadvisory.ca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
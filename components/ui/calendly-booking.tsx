'use client'

import * as React from 'react'
import { InlineWidget, PopupButton, PopupModal, useCalendlyEventListener } from 'react-calendly'

interface CalendlyInlineProps {
  url: string
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
    customAnswers?: Record<string, string>
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

export function CalendlyInline({ url, prefill, utm, pageSettings }: CalendlyInlineProps) {
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('Event scheduled:', e.data.payload)
      // You can add analytics tracking or other actions here
    },
  })

  return (
    <div className="calendly-inline-widget-container">
      <InlineWidget
        url={url}
        prefill={prefill}
        utm={utm}
        pageSettings={pageSettings}
        styles={{ minWidth: '100%', height: '700px' }}
      />
    </div>
  )
}

interface CalendlyButtonProps {
  url: string
  text?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

export function CalendlyButton({
  url,
  text = 'Schedule Meeting',
  variant = 'primary',
  size = 'md',
  className = '',
  prefill,
  utm,
  pageSettings,
}: CalendlyButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary: 'bg-primary-950 text-white hover:bg-primary-800 focus:ring-primary-500',
    secondary: 'bg-gold-500 text-primary-950 hover:bg-gold-400 focus:ring-gold-500',
    outline: 'border-2 border-primary-950 text-primary-950 hover:bg-primary-50 focus:ring-primary-500',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <PopupButton
      url={url}
      rootElement={typeof document !== 'undefined' ? document.getElementById('__next') || document.body : undefined}
      text={text}
      className={buttonClasses}
      prefill={prefill}
      utm={utm}
      pageSettings={pageSettings}
    />
  )
}

interface CalendlyModalProps {
  url: string
  isOpen: boolean
  onClose: () => void
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

export function CalendlyModal({
  url,
  isOpen,
  onClose,
  prefill,
  utm,
  pageSettings,
}: CalendlyModalProps) {
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('Event scheduled:', e.data.payload)
      onClose()
    },
  })

  return (
    <PopupModal
      url={url}
      open={isOpen}
      onModalClose={onClose}
      rootElement={typeof document !== 'undefined' ? document.getElementById('__next') || document.body : undefined}
      prefill={prefill}
      utm={utm}
      pageSettings={pageSettings}
    />
  )
}

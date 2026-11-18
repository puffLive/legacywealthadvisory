'use client'

import * as React from 'react'
import { Button, CalendlyModal } from '@/components/ui'
import { cn } from '@/lib/utils'

interface BookConsultationButtonProps {
  label?: string
  className?: string
}

export function BookConsultationButton({
  label = 'Book a Financial Planning Consultation',
  className,
}: BookConsultationButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => setIsOpen(true)}
        className={cn('h-auto min-h-[3rem] py-3 text-center leading-snug bg-gold-500 hover:bg-gold-400 text-primary-950 font-semibold', className)}
      >
        {label}
      </Button>
      <CalendlyModal
        url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/planningwithdamian/30-min-with-damian'}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pageSettings={{
          backgroundColor: 'ffffff',
          textColor: '102a43',
          primaryColor: '163759',
        }}
      />
    </>
  )
}

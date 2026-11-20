import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Legacy Wealth Advisory — Home"
      className={cn(
        'inline-flex min-w-0 shrink-0 items-center gap-3 text-primary-950 transition-colors hover:text-primary-800',
        compact && 'gap-2.5',
        className
      )}
    >
      <span className={cn('relative block h-12 w-12 shrink-0', compact && 'h-10 w-10 2xl:h-11 2xl:w-11')}>
        <Image
          src="/images/logo/legacyLogos/lwa-logo.png"
          alt=""
          fill
          sizes={compact ? '(min-width: 1536px) 44px, 40px' : '48px'}
          className="object-contain"
          priority
        />
      </span>
      <span className="flex min-w-0 flex-col justify-center gap-0.5">
        <span className={cn('block whitespace-nowrap font-bold leading-tight', compact ? 'text-[15px] 2xl:text-base' : 'text-lg sm:text-xl')}>Legacy</span>
        <span className={cn('block whitespace-nowrap leading-tight opacity-85', compact ? 'text-[11px] 2xl:text-xs' : 'text-sm sm:text-base')}>Wealth Advisory</span>
      </span>
    </Link>
  )
}

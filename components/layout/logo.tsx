import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center space-x-3 text-primary-950 hover:text-primary-800 transition-colors',
        className
      )}
    >
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <Image
          src="/images/logo/legacyLogos/lwa-logo.png"
          alt="Legacy Wealth Advisory Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg sm:text-xl leading-none">Legacy</span>
        <span className="text-sm sm:text-base opacity-80 leading-none">Wealth Advisory</span>
      </div>
    </Link>
  )
}
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Planning and Advisory | Legacy Wealth Advisory', description: 'Explore planning and advisory from Legacy Wealth Advisory in Ontario.' }

export default function Page() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary-950 mb-5">Planning and Advisory</h1>
        <p className="text-lg text-gray-700 mb-10">Explore our planning and advisory services and learn how Legacy Wealth Advisory can help.</p>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/services/estate-planning" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Estate Planning</h2><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
          <Link href="/services/succession-planning" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Succession Planning</h2><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
          <Link href="/services/wealth-protection" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Wealth Protection</h2><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
        </div>
      </div>
    </main>
  )
}

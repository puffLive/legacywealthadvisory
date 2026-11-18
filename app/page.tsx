import Link from 'next/link'
import { HeroSection } from '@/components/sections/hero'
import { ExpertiseSection } from '@/components/sections/expertise'
import { ProcessSection } from '@/components/sections/process'
import { GoogleTestimonialsSection } from '@/components/sections/testimonials-google'
// import { ResourcesSection } from '@/components/sections/resources' // Hidden for now

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <section className="bg-gray-50 py-10" aria-labelledby="licensing-home-heading">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 id="licensing-home-heading" className="text-2xl font-bold text-primary-950 mb-3">
            Licensed Insurance &amp; Financial Planning Expertise
          </h2>
          <p className="text-gray-700 mb-5">
            Damian Alexander, CLU is an Ontario-licensed life insurance agent working with HUB Financial Inc. as his Managing General Agency. Learn about his credentials and insurance-based investment solutions.
          </p>
          <Link href="/about#licensing-credentials" className="inline-flex items-center rounded-lg bg-primary-950 px-6 py-3 font-semibold text-white hover:bg-primary-800">
            View Licensing &amp; Credentials
          </Link>
        </div>
      </section>
      <ExpertiseSection />
      <ProcessSection />
      <GoogleTestimonialsSection />
      {/* <ResourcesSection /> */} {/* Hidden for now */}
    </main>
  )
}
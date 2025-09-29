import { HeroSection } from '@/components/sections/hero'
import { ExpertiseSection } from '@/components/sections/expertise'
import { ProcessSection } from '@/components/sections/process'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ResourcesSection } from '@/components/sections/resources'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <ProcessSection />
      <TestimonialsSection />
      <ResourcesSection />
    </main>
  )
}
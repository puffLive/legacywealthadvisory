import { HeroSection } from '@/components/sections/hero'
import { ExpertiseSection } from '@/components/sections/expertise'
import { ProcessSection } from '@/components/sections/process'
import { GoogleTestimonialsSection } from '@/components/sections/testimonials-google'
// import { ResourcesSection } from '@/components/sections/resources' // Hidden for now

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExpertiseSection />
      <ProcessSection />
      <GoogleTestimonialsSection />
      {/* <ResourcesSection /> */} {/* Hidden for now */}
    </main>
  )
}
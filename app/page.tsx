import { Button, Container } from '@/components/ui'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
            Strength for Today. Stability for Tomorrow. Legacy Forever.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to Legacy Wealth Advisory - Your trusted partner for estate planning,
            succession planning, and wealth protection in the Greater Toronto Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg">
              Book Your Discovery Call
            </Button>
            <Button variant="outline" size="lg">
              Download Estate Planning Checklist
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}
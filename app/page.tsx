import './home-motion.css'
import { HomeScrollMotion } from '@/components/sections/home-scroll-motion'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {number:'01',title:'Financial Planning',text:'A coordinated plan for your investments, savings, retirement and financial goals.',href:'/services/comprehensive-financial-planning',icon:'◌'},
  {number:'02',title:'Retirement & Wealth',text:'Build a strategy for retirement income, investments and changing priorities.',href:'/services/retirement-planning',icon:'↗'},
  {number:'03',title:'Business Advisory',text:'Plan for succession, continuity and the transfer of business wealth.',href:'/services/succession-planning',icon:'◇'},
  {number:'04',title:'Insurance & Protection',text:'Explore life, critical illness and disability insurance for what matters most.',href:'/services/insurance-solutions',icon:'✧'},
]

export default function HomePage() {
  return (
    <main className="bg-[#faf9f6]"><HomeScrollMotion />
      <section className="relative isolate overflow-hidden bg-[#f8f7f3]">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[520px] lg:grid-cols-[51%_49%]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-12 md:py-24 lg:px-16 xl:px-20">
            <div className="max-w-xl">
              <p className="lwa-hero-eyebrow mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7a3f]"><span className="h-px w-9 bg-[#b99a5e]"/> Build • Protect • Transfer</p>
              <h1 className="lwa-hero-title font-serif text-[clamp(2.9rem,5vw,5.3rem)] leading-[1.06] tracking-[-0.035em] text-[#102c49]">Clarity today.<br/><span className="text-[#345472]">Confidence tomorrow.</span></h1>
              <div className="my-7 h-px w-14 bg-[#b99a5e]"/>
              <p className="lwa-hero-copy max-w-md text-base leading-8 text-[#53616c] sm:text-lg">Comprehensive financial planning for individuals, families and business owners in Mississauga and the Greater Toronto Area.</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#66727b]">Investments, retirement, insurance, estate and succession planning — thoughtfully connected around your goals.</p>
              <div className="lwa-hero-actions mt-9 flex flex-wrap items-center gap-5">
                <a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="lwa-cta inline-flex min-h-12 items-center gap-4 rounded-sm bg-[#102c49] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#234e70]">Schedule a Consultation <span className="lwa-cta-arrow" aria-hidden="true">→</span></a>
                <Link href="/services/comprehensive-financial-planning" className="text-sm font-semibold text-[#102c49] underline decoration-[#c2a76e] underline-offset-8">Explore our approach</Link>
              </div>
            </div>
          </div>
          <div className="relative min-h-[310px] overflow-hidden lg:min-h-full">
            <Image src="/images/hero-images/lwa-elephant-herd.jpg" alt="Elephant herd, representing Legacy Wealth Advisory's commitment to strength, family and legacy" fill priority sizes="(max-width: 1024px) 100vw, 49vw" className="lwa-hero-image object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f3]/30 via-transparent to-[#102c49]/15"/>
            <div className="absolute bottom-6 right-6 border border-white/60 bg-[#102c49]/80 px-5 py-3 text-xs tracking-[0.15em] text-white backdrop-blur-sm">LEGACY WEALTH ADVISORY</div>
          </div>
        </div>
      </section>

      <section aria-label="Our approach" className="lwa-reveal bg-[#102c49] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-6 py-8 sm:grid-cols-2 sm:px-12 lg:grid-cols-4 lg:px-16">
          {[
            {icon:'◎',title:'Personalized Strategies',description:'Advice shaped by your priorities and life stage.'},
            {icon:'◇',title:'Professional Guidance',description:'Led by Damian Alexander, CLU.'},
            {icon:'◷',title:'Integrated Planning',description:'Financial decisions considered together.'},
            {icon:'↗',title:'Long-Term Perspective',description:'A plan designed to evolve with you.'},
          ].map((item,index)=><div key={item.title} className={`flex items-start gap-4 px-2 py-5 lg:px-6 ${index>0?'lg:border-l lg:border-white/20':''}`}>
            <span aria-hidden="true" className="w-9 shrink-0 font-serif text-3xl text-[#c7a56c]">{item.icon}</span>
            <div><h2 className="text-sm font-semibold">{item.title}</h2><p className="mt-2 text-xs leading-6 text-white/70">{item.description}</p></div>
          </div>)}
        </div>
      </section>

      <section className="lwa-reveal bg-[#faf9f6] py-16 lg:py-20" aria-labelledby="home-services-heading">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_3fr] lg:gap-8">
            <div className="max-w-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">Our services <span className="ml-2 inline-block h-px w-8 align-middle bg-[#b99a5e]"/></p>
              <h2 id="home-services-heading" className="font-serif text-4xl leading-tight tracking-tight text-[#102c49]">Guidance for every financial decision.</h2>
              <p className="mt-5 text-sm leading-7 text-[#64717b]">Thoughtful planning to help you build, protect and transfer wealth.</p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#94723d]">View all services <span aria-hidden="true">→</span></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map(service=><Link key={service.title} href={service.href} className="lwa-service-card group flex min-h-[235px] flex-col border border-[#e8e4dc] bg-white px-6 py-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#c9b487] hover:shadow-lg">
                <div className="mb-6 flex items-center justify-between"><span className="font-serif text-3xl text-[#a38b5e]" aria-hidden="true">{service.icon}</span><span className="text-[10px] tracking-widest text-[#a3a8aa]">{service.number}</span></div>
                <h3 className="font-serif text-xl leading-tight text-[#102c49]">{service.title}</h3>
                <p className="mt-3 flex-1 text-xs leading-6 text-[#68747d]">{service.text}</p>
                <span className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-[#a08350] group-hover:text-[#102c49]">Learn more <span className="lwa-card-arrow" aria-hidden="true">→</span></span>
              </Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[#e8e4dc] py-12" aria-labelledby="advisor-trust-heading">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-12 grid gap-7 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div><p className="text-xs uppercase tracking-[.2em] text-[#9a7a3f]">Your advisor</p><h2 id="advisor-trust-heading" className="mt-2 font-serif text-3xl text-[#102c49]">Experience you can explore.</h2></div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-7 text-[#53616c]"><strong className="text-[#102c49]">Damian Alexander, CLU</strong> brings more than two decades of financial services experience to an integrated approach to planning. Learn about his professional background, licensing context and five-step process.</p><Link href="/about" className="shrink-0 text-sm font-semibold text-[#102c49] underline decoration-[#b99a5e] underline-offset-8">Meet Damian →</Link></div>
        </div>
      </section>
      <section className="lwa-reveal border-t border-[#e8e4dc] bg-white py-14">
        <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-6 px-6 sm:px-12 lg:flex-row lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a3f]">Your financial future</p><h2 className="mt-3 font-serif text-3xl text-[#102c49]">Let&apos;s build a plan that fits your life.</h2><p className="mt-3 text-sm text-[#64717b]">Start with a conversation about your goals and priorities.</p></div>
          <a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="lwa-cta inline-flex shrink-0 items-center gap-4 bg-[#102c49] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#234e70]">Schedule a Consultation <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="bg-[#102c49] py-5 text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 px-6 text-xs text-white/70 sm:flex-row sm:px-12 lg:px-16">
          <span>Serving Mississauga and the Greater Toronto Area, Ontario</span>
          <Link href="/about#licensing-credentials" className="text-[#e2c48e] hover:text-white">Meet Damian Alexander, CLU →</Link>
        </div>
      </section>
    </main>
  )
}

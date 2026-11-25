import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/planning-advisory' }, title: 'Planning and Advisory | Legacy Wealth Advisory', description: 'Comprehensive financial planning, retirement, estate and succession planning and wealth protection for individuals, families and business owners in Mississauga and Ontario.' }

export default function Page() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary-950 mb-5">Planning and Advisory</h1>
        <section className="mb-12 max-w-4xl" aria-labelledby="planning-heading">
          <h2 id="planning-heading" className="font-serif text-3xl sm:text-4xl text-primary-950 mb-6">A Financial Plan Built Around Your Life</h2>
          <div className="space-y-5 text-base sm:text-lg leading-8 text-gray-700">
            <p>Financial planning is about more than managing investments or preparing for retirement. It is about bringing together every aspect of your financial life into a coordinated strategy that supports your goals, priorities and long-term vision.</p>
            <p>At Legacy Wealth Advisory, we believe that every financial decision should be made with the bigger picture in mind. From managing cash flow and accumulating wealth to protecting your assets, preparing for retirement and transferring wealth to future generations, each decision plays an important role in your overall financial success.</p>
            <p>Our planning and advisory services are designed to help individuals, families, professionals and business owners navigate life&apos;s financial opportunities and challenges with greater clarity and confidence.</p>
            <p>Whether you are beginning to build wealth, approaching retirement, managing a successful business or preparing to leave a lasting legacy, we work with you to develop a financial strategy that evolves as your life and circumstances change.</p>
          </div>
        </section>
        <section className="mb-10 border-l-4 border-[#b99a5e] bg-[#faf9f6] p-6 sm:p-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-950 mb-4">Our Approach to Financial Planning</h2>
          <p className="text-gray-700 leading-7">We begin by understanding your current financial circumstances and defining what you want to achieve. We analyze your options, identify opportunities and potential risks, and develop a coordinated strategy. Where specialized tax or legal advice is required, we work with your qualified professionals. We help implement the agreed strategies and review your plan as your needs evolve.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[['Build','Develop savings, investment and retirement strategies.'],['Protect','Manage financial risks and safeguard your income and assets.'],['Transfer','Plan for your estate, business succession and future generations.']].map(([title,description])=><div key={title}><h3 className="font-semibold text-primary-950">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-700">{description}</p></div>)}
          </div>
        </section>
        <h2 className="font-serif text-3xl text-primary-950 mb-6">Explore Our Planning and Advisory Services</h2>
        <div className="grid gap-4 md:grid-cols-2 mb-8"><Link href="/services/comprehensive-financial-planning" className="rounded-lg border border-gray-200 p-5 hover:shadow-md"><h2 className="font-semibold text-primary-950 text-xl">Comprehensive Financial Planning</h2><p className="text-gray-600 mt-2">Bring together cash flow, savings, investments, retirement, insurance and estate priorities into a coordinated financial plan.</p></Link><Link href="/services/retirement-planning" className="rounded-lg border border-gray-200 p-5 hover:shadow-md"><h2 className="font-semibold text-primary-950 text-xl">Retirement Planning</h2><p className="text-gray-600 mt-2">Prepare for retirement by exploring pension options, income needs, government benefits and sustainable withdrawal strategies.</p></Link></div>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/services/estate-planning" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Estate Planning</h2><p className="mt-3 text-gray-600 leading-7">Plan how your wealth will be transferred, address estate liquidity and beneficiary needs, and coordinate with your legal and tax professionals.</p><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
          <Link href="/services/succession-planning" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Succession Planning</h2><p className="mt-3 text-gray-600 leading-7">Prepare for business ownership transitions, continuity, retirement and the transfer of business wealth.</p><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
          <Link href="/services/wealth-protection" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Wealth Protection</h2><p className="mt-3 text-gray-600 leading-7">Identify risks to your income, savings and assets and explore strategies to protect your long-term financial goals.</p><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
        </div>
        <section className="mt-12 bg-[#102c49] text-white p-6 sm:p-10">
          <h2 className="font-serif text-3xl">Where Do You Stand Financially?</h2>
          <p className="mt-4 leading-7 text-white/85">Take our free Financial Health Score assessment to identify areas worth reviewing, or schedule a consultation to start building a plan around your goals.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/resources/calculators/financial-health-score" className="bg-[#d7b77d] px-6 py-3 font-semibold text-[#102c49]">Get Your Financial Health Score</Link>
            <a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="border border-white/50 px-6 py-3 font-semibold text-white">Book a Consultation</a>
          </div>
        </section>
      </div>
    </main>
  )
}

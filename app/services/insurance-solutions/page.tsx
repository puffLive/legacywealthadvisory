import { ServiceFAQ } from '@/components/sections/service-faq'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/services/insurance-solutions' }, title: 'Insurance Solutions | Legacy Wealth Advisory', description: 'Explore protection planning in Mississauga and Ontario, including life, disability, critical illness and corporate insurance strategies for families and business owners.' }

export default function Page() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary-950 mb-5">Insurance Solutions</h1>
        <section className="mb-12 max-w-4xl" aria-labelledby="protection-heading">
          <h2 id="protection-heading" className="font-serif text-3xl sm:text-4xl text-primary-950 mb-6">Protect What You&apos;ve Worked Hard to Build</h2>
          <div className="space-y-5 text-base sm:text-lg leading-8 text-gray-700">
            <p>Building wealth is only one part of a successful financial plan. Protecting your income, family, assets and business against life&apos;s unexpected events is equally important.</p>
            <p>An unexpected illness, disability or premature death can have a significant financial impact on even the most carefully constructed financial plan. Without adequate protection, individuals and families may be forced to draw from retirement savings, sell investments, take on additional debt or make significant lifestyle adjustments.</p>
            <p>At Legacy Wealth Advisory, we believe insurance should be viewed as a strategic financial planning tool rather than simply another monthly expense. Our approach is to identify your financial risks, evaluate your existing coverage and develop a protection strategy aligned with your personal, family and business objectives.</p>
            <p>Whether you are protecting your family&apos;s financial future, safeguarding your ability to earn an income or ensuring the continuity of your business, the right insurance strategy can help provide financial security and peace of mind.</p>
          </div>
        </section>
        <section className="mb-10 border-l-4 border-[#b99a5e] bg-[#faf9f6] p-6 sm:p-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary-950 mb-4">Our Approach to Protection Planning</h2>
          <p className="text-gray-700 leading-7">We begin with your financial obligations, income needs, existing workplace and personal coverage, and long-term goals. We then assess potential gaps and explore suitable insurance options, balancing the level of protection with your budget. As your circumstances change, we review your strategy to help keep it aligned with your financial plan.</p>
        </section>
        <h2 className="font-serif text-3xl text-primary-950 mb-6">Explore Our Insurance Solutions</h2>
        <Link href="/services/corporate-insurance-planning" className="block rounded-lg border border-gray-200 p-5 mb-8 hover:shadow-md"><h2 className="font-semibold text-primary-950 text-xl">Corporate Insurance Planning</h2><p className="text-gray-600 mt-2">Explore key-person protection, buy-sell funding, business continuity and corporate-owned insurance as part of your broader business and estate planning strategy.</p></Link>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/services/life-insurance" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Life Insurance</h2><p className="mt-3 text-gray-600 leading-7">Help protect your family, replace lost income, cover debts and support your legacy goals.</p><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
          <Link href="/services/critical-illness" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Critical Illness Insurance</h2><p className="mt-3 text-gray-600 leading-7">Explore lump-sum protection for covered serious illnesses to help manage recovery costs and financial obligations.</p><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
          <Link href="/services/disability-insurance" className="block rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"><h2 className="text-xl font-semibold text-primary-950">Disability Insurance</h2><p className="mt-3 text-gray-600 leading-7">Help protect your monthly income if a covered illness or injury prevents you from working.</p><span className="text-gold-600 mt-3 inline-block">Learn more →</span></Link>
        </div>
        <section className="mt-12 bg-[#102c49] text-white p-6 sm:p-10">
          <h2 className="font-serif text-3xl">How Much Protection Do You Need?</h2>
          <p className="mt-4 leading-7 text-white/85">Explore our free insurance needs calculators or schedule a consultation to discuss a protection strategy tailored to your circumstances.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/resources/calculators" className="bg-[#d7b77d] px-6 py-3 font-semibold text-[#102c49]">Explore Financial Calculators</Link>
            <a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="border border-white/50 px-6 py-3 font-semibold text-white">Book a Consultation</a>
          </div>
          <p className="mt-5 text-xs leading-6 text-white/75">Insurance benefits are subject to policy terms, eligibility, exclusions and underwriting.</p>
        </section>
      </div>
    <ServiceFAQ items={[{"question":"What is the difference between life, critical illness and disability insurance?","answer":"Life insurance pays a benefit on an insured death, critical illness insurance may pay a lump sum for a covered diagnosis, and disability insurance may replace part of income during a covered disability. Policy terms and exclusions apply."},{"question":"How much insurance do I need?","answer":"Coverage needs depend on income, debts, dependants, existing coverage, savings and budget. A needs analysis can help identify potential gaps."},{"question":"Can business owners use insurance for succession planning?","answer":"Insurance may help fund buy-sell arrangements or protect a business against the loss of a key person, depending on ownership, policy terms and professional tax and legal advice."}]} />
</main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: '/services/disability-insurance' },
  title: 'Disability Insurance in Canada | Legacy Wealth Advisory',
  description: 'Learn how disability insurance can help replace income if illness or injury prevents you from working. Explore individual, group and business coverage in Ontario.',
}

const reasons = [
  { title: 'Protect everyday income', detail: 'A qualifying monthly benefit may help with housing, groceries, utilities and other regular expenses while you cannot work.' },
  { title: 'Preserve long-term savings', detail: 'Income protection can reduce pressure to withdraw from retirement investments or emergency savings during a prolonged absence.' },
  { title: 'Support your family', detail: 'Keep your financial plan moving while managing a recovery, rehabilitation or a longer-term disability.' },
  { title: 'Protect your earning years', detail: 'Your future income is an important financial asset, especially when other people or financial obligations depend on it.' },
]
const features = [
  { title: 'Definition of disability', detail: 'Own-occupation, regular-occupation and any-occupation definitions can affect when benefits are payable. Wording and transitions vary by policy.' },
  { title: 'Waiting period', detail: 'Also called the elimination period: the time after a qualifying disability before benefits may begin. Common choices differ by insurer.' },
  { title: 'Benefit period', detail: 'How long an approved claim may pay benefits, such as a fixed number of years or potentially to a specified age.' },
  { title: 'Monthly benefit and limits', detail: 'Insurers assess eligible earnings, existing coverage and maximum issue limits. A policy may replace only part of pre-disability income.' },
  { title: 'Exclusions and limitations', detail: 'Pre-existing condition provisions, exclusions, offsets and other contractual limitations can affect a claim.' },
  { title: 'Optional riders', detail: 'Depending on the insurer, options may include residual or partial disability, cost-of-living adjustments or future increase benefits.' },
]
const coverage = [
  { title: 'Individual disability insurance', detail: 'Personally owned coverage tailored to your income, occupation and needs. Often useful when employer benefits are limited or unavailable.' },
  { title: 'Group long-term disability', detail: 'Workplace coverage can provide a valuable starting point, but definitions, benefit caps, tax treatment and portability deserve review.' },
  { title: 'Business overhead expense insurance', detail: 'Certain policies may help eligible business owners cover specified operating expenses during a qualifying disability.' },
  { title: 'Buy-sell or key person planning', detail: 'Specialized disability-related arrangements may support business continuity. Suitability and tax treatment depend on the structure.' },
]

export default function DisabilityInsurancePage() {
  return <main>
    <section className="bg-gradient-to-br from-primary-950 to-primary-800 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gold-400">Tools for Financial &amp; Estate Planning</p>
        <h1 className="mb-5 text-4xl font-bold md:text-5xl">Disability Insurance</h1>
        <p className="mb-8 max-w-3xl text-xl leading-relaxed text-blue-100">Your ability to earn an income supports almost every part of your financial plan. Discover how disability insurance can help protect that income if illness or injury prevents you from working.</p>
        <a href="https://calendly.com/planningwithdamian/30-min-with-damian" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-gold-500 px-7 py-3 font-bold text-primary-950 hover:bg-gold-400">Discuss Income Protection</a>
      </div>
    </section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-5 text-3xl font-bold text-primary-950">What is disability insurance?</h2>
      <p className="max-w-4xl text-lg leading-relaxed text-gray-700">Disability insurance is designed to provide periodic income benefits when an illness or injury prevents you from working and you meet the policy’s definition of disability. It can help you manage ongoing financial commitments while you recover or adjust to changed circumstances.</p>
      <p className="mt-5 max-w-4xl text-gray-700">Coverage does not automatically pay for every medical condition or time away from work. Eligibility, benefit amounts, waiting periods and duration depend on the specific contract.</p>
    </div></section>
    <section className="bg-gray-50 px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-3xl font-bold text-primary-950">Why income protection matters</h2>
      <div className="grid gap-5 md:grid-cols-2">{reasons.map((item,i)=><article key={item.title} className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-950 font-bold text-gold-400">{i+1}</span><h3 className="mb-2 text-xl font-bold text-primary-950">{item.title}</h3><p className="leading-relaxed text-gray-700">{item.detail}</p></article>)}</div>
    </div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-5 text-3xl font-bold text-primary-950">How disability insurance works</h2>
      <div className="grid gap-4 md:grid-cols-4">{[
        ['1','Choose coverage','Review income, occupation, existing benefits and budget.'],
        ['2','A qualifying disability occurs','Illness or injury meets the policy’s definition and claim conditions.'],
        ['3','Waiting period applies','Benefits may begin after the contractual elimination period.'],
        ['4','Eligible benefits are paid','Approved claims may receive ongoing payments, subject to policy terms and reassessment.'],
      ].map(([number,title,detail])=><div key={number} className="rounded-xl border border-blue-100 bg-blue-50 p-6"><span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-950 text-xl font-bold text-gold-400">{number}</span><h3 className="mb-2 font-bold text-primary-950">{title}</h3><p className="text-sm leading-relaxed text-gray-700">{detail}</p></div>)}</div>
      <p className="mt-5 text-sm text-gray-500">Illustrative only. Claims are assessed under the actual insurance contract.</p>
    </div></section>
    <section className="bg-primary-950 px-6 py-16 text-white"><div className="mx-auto max-w-5xl">
      <h2 className="mb-5 text-3xl font-bold">What to look for in a policy</h2>
      <p className="mb-8 max-w-3xl text-blue-100">The details of disability coverage can matter as much as the headline benefit amount.</p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(item=><article key={item.title} className="rounded-xl border border-blue-800 bg-primary-900 p-6"><h3 className="mb-3 text-lg font-bold text-gold-400">{item.title}</h3><p className="text-sm leading-relaxed text-blue-100">{item.detail}</p></article>)}</div>
    </div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-5 text-3xl font-bold text-primary-950">Coverage for employees, professionals and business owners</h2>
      <div className="grid gap-5 md:grid-cols-2">{coverage.map(item=><article key={item.title} className="rounded-xl border border-gray-200 p-7"><h3 className="mb-3 text-xl font-bold text-primary-950">{item.title}</h3><p className="leading-relaxed text-gray-700">{item.detail}</p></article>)}</div>
    </div></section>
    <section className="bg-gray-50 px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-5 text-3xl font-bold text-primary-950">Disability vs. critical illness vs. life insurance</h2>
      <div className="overflow-x-auto"><table className="w-full border-collapse text-left"><thead><tr className="bg-primary-950 text-white"><th className="p-4">Protection</th><th className="p-4">Typical trigger</th><th className="p-4">Typical benefit</th></tr></thead><tbody className="text-gray-800"><tr className="border-b"><td className="p-4 font-semibold">Disability insurance</td><td className="p-4">Qualifying inability to work</td><td className="p-4">Periodic income payments</td></tr><tr className="border-b"><td className="p-4 font-semibold">Critical illness insurance</td><td className="p-4">Qualifying covered diagnosis</td><td className="p-4">Lump-sum payment</td></tr><tr><td className="p-4 font-semibold">Life insurance</td><td className="p-4">Death of insured person</td><td className="p-4">Death benefit</td></tr></tbody></table></div>
      <p className="mt-5 text-gray-700">These types of insurance address different financial risks and may complement one another.</p>
    </div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-primary-950">How protected is your income?</h2>
      <p className="mb-7 text-lg text-gray-700">Damian Alexander, CLU, can help you review workplace coverage, explore individual disability insurance and align income protection with your broader financial plan.</p>
      <a href="https://calendly.com/planningwithdamian/30-min-with-damian" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-primary-950 px-7 py-3 font-bold text-white hover:bg-primary-800">Book a Consultation</a>
      <p className="mt-6 text-sm text-gray-500">General educational information only, not a quote or guarantee of coverage. Eligibility and claims are subject to underwriting, insurer definitions, exclusions, limitations, benefit offsets and policy terms. Tax treatment of disability benefits in Canada can vary based on who pays the premiums and the coverage arrangement. Consult a qualified tax professional for advice specific to your circumstances.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm"><Link href="/services/critical-illness" className="font-semibold text-primary-800 underline">Critical illness insurance</Link><Link href="/services/life-insurance" className="font-semibold text-primary-800 underline">Life insurance</Link></div>
    </div></section>
  </main>
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: '/services/critical-illness' },
  title: 'Critical Illness Insurance | Legacy Wealth Advisory',
  description: 'Understand critical illness insurance in Canada: how lump-sum benefits work, common covered conditions, policy options and financial planning benefits.',
}

const benefits = [
  { title:'Financial flexibility', description:'A qualifying claim can provide a lump-sum benefit to use for household bills, debt, treatment-related travel or other priorities.' },
  { title:'Time to focus on recovery', description:'Financial resources can help reduce the pressure to return to work before you are ready.' },
  { title:'Protect savings and investments', description:'Coverage may help you avoid drawing down emergency funds or long-term investments after a serious diagnosis.' },
  { title:'Support your family or business', description:'Funds can help with caregiving, childcare, business overhead or other needs while routines change.' },
]
const options = [
  {title:'Term critical illness insurance',description:'Protection for a selected coverage period. Often considered when affordability or temporary obligations are the main priority.'},
  {title:'Permanent or long-duration coverage',description:'Some policies provide protection to a specified later age or for life, subject to contract terms and premiums.'},
  {title:'Return-of-premium options',description:'Certain contracts offer optional return-of-premium riders on expiry, surrender or death, subject to eligibility, timing, conditions and additional cost.'},
  {title:'Individual or business-owned coverage',description:'Ownership and beneficiary arrangements can support personal needs or business continuity. Tax treatment depends on the arrangement.'},
]
const steps = [
  {title:'Covered diagnosis',text:'A medical condition must meet the policy’s specific definition.'},
  {title:'Policy conditions',text:'Applicable waiting, exclusion and survival-period requirements must be satisfied.'},
  {title:'Approved claim',text:'The insurer pays the contractual lump-sum benefit when the claim qualifies.'},
  {title:'Your priorities',text:'Use the benefit for financial needs, with flexibility under the policy.'},
]
export default function CriticalIllnessPage() {
  return <main>
    <section className="bg-gradient-to-br from-primary-950 to-primary-800 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gold-400">Tools for Financial &amp; Estate Planning</p>
        <h1 className="mb-5 max-w-4xl text-4xl font-bold md:text-5xl">Critical Illness Insurance</h1>
        <p className="mb-8 max-w-3xl text-xl leading-relaxed text-blue-100">A serious diagnosis can affect more than your health. Explore how critical illness insurance can help protect your finances while you focus on recovery.</p>
        <a href="https://calendly.com/planningwithdamian/30-min-with-damian" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-gold-500 px-7 py-3 font-bold text-primary-950 hover:bg-gold-400">Discuss Your Coverage Options</a>
      </div>
    </section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-5 text-3xl font-bold text-primary-950">What is critical illness insurance?</h2>
      <p className="max-w-4xl text-lg leading-relaxed text-gray-700">Critical illness insurance generally provides a lump-sum payment if you are diagnosed with a condition covered by your policy and meet its claim requirements. Unlike disability insurance, which typically replaces a portion of income, critical illness insurance is generally designed to pay a specified benefit after a qualifying diagnosis. The money can help with financial needs that arise during treatment or recovery.</p>
      <p className="mt-5 max-w-4xl text-gray-700">Covered conditions may include certain cancers, heart attacks and strokes, but definitions, severity thresholds, exclusions and covered illnesses differ by insurer and policy. Not every diagnosis qualifies.</p>
    </div></section>
    <section className="bg-gray-50 px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-3xl font-bold text-primary-950">Why consider critical illness insurance?</h2>
      <p className="mb-8 text-gray-700">Even with provincial health coverage and workplace benefits, an illness can create costs or income disruptions that are not fully covered.</p>
      <div className="grid gap-5 md:grid-cols-2">{benefits.map((b,i)=><article key={b.title} className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm"><div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-950 font-bold text-gold-400">{i+1}</div><h3 className="mb-2 text-xl font-bold text-primary-950">{b.title}</h3><p className="leading-relaxed text-gray-700">{b.description}</p></article>)}</div>
    </div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-7 text-3xl font-bold text-primary-950">Infographic: How critical illness insurance works</h2>
      <div role="img" aria-label="Four steps: covered diagnosis, policy conditions, approved claim, and financial flexibility" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
        <div className="mb-7 rounded-lg bg-primary-950 px-5 py-5 text-center text-2xl font-bold text-white">From Diagnosis to <span className="text-gold-400">Financial Flexibility</span></div>
        <div className="grid gap-4 md:grid-cols-4">{steps.map((s,i)=><div key={s.title} className="relative rounded-xl bg-blue-50 p-5 text-center"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-950 text-2xl font-bold text-gold-400">{i+1}</div><h3 className="mb-2 font-bold text-primary-950">{s.title}</h3><p className="text-sm leading-relaxed text-gray-700">{s.text}</p></div>)}</div>
        <p className="mt-6 text-center text-xs text-gray-500">Illustrative only. Claims depend on the exact policy definition, exclusions, waiting periods and survival requirements.</p>
      </div>
    </div></section>
    <section className="bg-primary-950 px-6 py-16 text-white"><div className="mx-auto max-w-5xl">
      <h2 className="mb-7 text-3xl font-bold">Infographic: What could a lump-sum benefit help with?</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[
        ['01','Household bills'],['02','Lost income'],['03','Travel & care'],['04','Debt payments'],['05','Family support']
      ].map(([number,label])=><div key={label} className="rounded-xl border border-blue-700 bg-primary-900 p-5 text-center"><div className="mb-3 text-3xl font-black text-gold-400">{number}</div><p className="font-semibold">{label}</p></div>)}</div>
      <p className="mt-6 text-sm text-blue-100">A qualifying lump-sum benefit is generally not restricted to specific expenses. Actual benefit availability depends on the policy.</p>
    </div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-3xl font-bold text-primary-950">Different types and options</h2>
      <div className="grid gap-5 md:grid-cols-2">{options.map(o=><article key={o.title} className="rounded-xl border border-gray-200 p-7"><h3 className="mb-3 text-xl font-bold text-primary-950">{o.title}</h3><p className="text-gray-700">{o.description}</p></article>)}</div>
    </div></section>
    <section className="bg-gray-50 px-6 py-16"><div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-3xl font-bold text-primary-950">Critical illness vs. life insurance vs. disability insurance</h2>
      <div className="overflow-x-auto"><table className="w-full border-collapse text-left"><thead><tr className="bg-primary-950 text-white"><th className="p-4">Coverage</th><th className="p-4">Typical trigger</th><th className="p-4">Typical payment</th></tr></thead><tbody className="text-gray-800"><tr className="border-b"><td className="p-4 font-semibold">Critical illness</td><td className="p-4">Qualifying covered illness</td><td className="p-4">Lump sum</td></tr><tr className="border-b"><td className="p-4 font-semibold">Life insurance</td><td className="p-4">Death of insured person</td><td className="p-4">Death benefit</td></tr><tr><td className="p-4 font-semibold">Disability insurance</td><td className="p-4">Qualifying inability to work</td><td className="p-4">Usually periodic income benefit</td></tr></tbody></table></div>
      <p className="mt-5 text-gray-700">These policies serve different purposes and may complement one another in a financial protection plan.</p>
    </div></section>
    <section className="px-6 py-16"><div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-primary-950">Build protection around your priorities</h2>
      <p className="mb-7 text-lg text-gray-700">Damian Alexander, CLU, can help you evaluate critical illness coverage alongside your life insurance, disability protection, savings and estate planning needs.</p>
      <a href="https://calendly.com/planningwithdamian/30-min-with-damian" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-primary-950 px-7 py-3 font-bold text-white hover:bg-primary-800">Book a Consultation</a>
      <p className="mt-6 text-sm text-gray-500">For general educational purposes only. Coverage is subject to underwriting and insurer policy terms. Covered conditions, exclusions, survival periods, waiting periods, premiums and return-of-premium provisions vary. In Canada, personal critical illness benefits are generally received tax-free, but tax treatment depends on ownership, premium payment and policy structure. Seek professional tax advice for business-owned arrangements.</p>
      <p className="mt-4"><Link href="/services/life-insurance" className="font-semibold text-primary-800 underline">Learn about life insurance</Link></p>
    </div></section>
  </main>
}

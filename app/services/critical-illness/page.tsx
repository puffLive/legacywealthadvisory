import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
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
    <section className="bg-white px-6 py-12" aria-labelledby="families-protected">
      <div className="mx-auto max-w-5xl">
        <h2 id="families-protected" className="mb-3 text-center text-3xl font-bold text-primary-950">Protecting Families. Supporting Recovery.</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-700">Every family is different. Critical illness protection can help provide financial flexibility when a covered diagnosis changes your plans.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-gold-400 bg-blue-50 shadow-sm">
            <svg role="img" aria-label="Illustration of a Black family with two parents and two children" viewBox="0 0 480 270" className="h-auto w-full">
              <rect width="480" height="270" fill="#eaf4fb"/>
              <circle cx="400" cy="55" r="95" fill="#f6dfac"/>
              <path d="M0 225Q130 165 240 218T480 208V270H0Z" fill="#d6e7ef"/>
              <g>
                <path d="M40 265Q44 160 130 160Q220 160 222 265Z" fill="#173d66"/>
                <ellipse cx="130" cy="100" rx="52" ry="64" fill="#553122"/>
                <ellipse cx="130" cy="116" rx="43" ry="49" fill="#986042"/>
                <path d="M89 93Q90 36 134 38Q177 42 173 98Q150 76 132 77Q113 87 89 93Z" fill="#2b1a19"/>
                <path d="M247 265Q250 158 340 158Q430 158 438 265Z" fill="#b88d3b"/>
                <ellipse cx="340" cy="103" rx="60" ry="72" fill="#271a1b"/>
                <ellipse cx="340" cy="119" rx="42" ry="51" fill="#b97955"/>
                <path d="M291 113Q275 40 335 35Q406 39 390 120L375 90Q339 68 304 99Z" fill="#25191a"/>
                <path d="M148 270Q150 203 214 203Q274 203 278 270Z" fill="#417c89"/>
                <ellipse cx="212" cy="184" rx="32" ry="38" fill="#9b6244"/>
                <path d="M181 175Q183 143 214 145Q243 148 242 180Q218 159 181 175Z" fill="#2a1c19"/>
                <path d="M287 270Q290 208 355 208Q413 208 416 270Z" fill="#e5ad60"/>
                <ellipse cx="353" cy="188" rx="32" ry="37" fill="#b77b56"/>
                <path d="M320 181Q322 150 353 150Q385 151 385 184Q354 160 320 181Z" fill="#251919"/>
              </g>
            </svg>
            <div className="p-5 text-center"><h3 className="text-lg font-bold text-primary-950">Protection for the people you love</h3><p className="mt-2 text-sm text-gray-700">Support everyday expenses, caregiving and your family's financial priorities.</p></div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-gold-400 bg-amber-50 shadow-sm">
            <svg role="img" aria-label="Illustration of a South Asian family with two parents and two children" viewBox="0 0 480 270" className="h-auto w-full">
              <rect width="480" height="270" fill="#fff2df"/>
              <circle cx="70" cy="60" r="90" fill="#f5d9ac"/>
              <path d="M0 220Q130 180 240 220T480 210V270H0Z" fill="#eaded0"/>
              <g>
                <path d="M40 265Q44 160 130 160Q220 160 222 265Z" fill="#397a78"/>
                <ellipse cx="130" cy="111" rx="44" ry="53" fill="#b97952"/>
                <path d="M86 106Q76 38 130 40Q181 40 176 107Q152 75 125 76Q105 80 86 106Z" fill="#251a18"/>
                <path d="M245 265Q250 160 340 160Q431 160 438 265Z" fill="#a75b5d"/>
                <ellipse cx="340" cy="107" rx="58" ry="70" fill="#21191b"/>
                <ellipse cx="340" cy="119" rx="42" ry="52" fill="#c68b65"/>
                <path d="M289 111Q281 39 340 37Q405 41 391 119L377 88Q337 69 301 98Z" fill="#221a1c"/>
                <path d="M146 270Q151 203 214 203Q274 203 278 270Z" fill="#e5a23e"/>
                <ellipse cx="212" cy="185" rx="32" ry="38" fill="#c58a61"/>
                <path d="M181 175Q183 144 214 145Q243 148 242 180Q218 160 181 175Z" fill="#291d1b"/>
                <path d="M286 270Q290 208 355 208Q413 208 416 270Z" fill="#516b9b"/>
                <ellipse cx="353" cy="188" rx="32" ry="37" fill="#b97b56"/>
                <path d="M320 181Q322 150 353 150Q385 151 385 184Q354 161 320 181Z" fill="#2b201d"/>
              </g>
            </svg>
            <div className="p-5 text-center"><h3 className="text-lg font-bold text-primary-950">Financial flexibility during recovery</h3><p className="mt-2 text-sm text-gray-700">Help protect savings and give your household more choices during a difficult time.</p></div>
          </article>
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">Illustrations represent the diverse families and communities we serve.</p>
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

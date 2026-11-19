import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Life Insurance | Tools for Financial & Estate Planning | Legacy Wealth Advisory',
  description: 'Learn why life insurance matters, its benefits, and how term, whole life, universal life and other coverage options support Canadian financial and estate planning.',
}

const reasons = [
  { title: 'Protect the people who depend on you', text: 'Help your family replace lost income and cover everyday living costs if you pass away.' },
  { title: 'Manage debts and major expenses', text: 'Provide funds that may help cover a mortgage, loans, education costs and final expenses.' },
  { title: 'Preserve your estate', text: 'Create liquidity that may help pay final taxes and estate expenses, reducing pressure to sell assets.' },
  { title: 'Support business continuity', text: 'Help fund buy-sell agreements, protect against the loss of a key person and support succession plans.' },
]

const types = [
  { title: 'Term life insurance', best: 'Protection for a defined period', description: 'Coverage for a set term, commonly 10, 20 or 30 years. Often used for income replacement, a mortgage or other temporary obligations. It generally has lower initial premiums than permanent coverage, but renewal premiums can rise.' },
  { title: 'Whole life insurance', best: 'Long-term coverage and estate objectives', description: 'Permanent insurance that generally offers lifetime coverage while required premiums are paid. Participating and non-participating designs differ; some policies build cash value and may pay non-guaranteed dividends.' },
  { title: 'Universal life insurance', best: 'Flexible permanent planning', description: 'Permanent insurance that combines life coverage with an investment component. Premium flexibility, investment choices, costs and policy sustainability depend on the contract; performance and funding require ongoing review.' },
  { title: 'Term-to-100 insurance', best: 'Lifetime death-benefit protection', description: 'A form of permanent insurance generally designed to provide lifetime coverage with level premiums, often without the cash-value features associated with some other permanent policies.' },
  { title: 'Joint life insurance', best: 'Planning for couples or business partners', description: 'Coverage for two people, structured to pay on the first death or second death depending on the policy. Second-to-die coverage may be considered for estate liquidity needs.' },
]

export default function LifeInsurancePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary-950 to-primary-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gold-400">Tools for Financial &amp; Estate Planning</p>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold md:text-5xl">Life Insurance: Protect Today. Plan for Tomorrow.</h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-blue-100">Life insurance is more than a death benefit. Used thoughtfully, it can help protect loved ones, support business continuity and create options for transferring wealth.</p>
          <a href="https://calendly.com/planningwithdamian/30-min-with-damian" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-gold-500 px-7 py-3 font-bold text-primary-950 hover:bg-gold-400">Discuss Your Life Insurance Needs</a>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="why-life">
        <div className="mx-auto max-w-5xl">
          <h2 id="why-life" className="mb-5 text-3xl font-bold text-primary-950">Why do we need life insurance?</h2>
          <p className="mb-9 max-w-4xl text-lg leading-relaxed text-gray-700">If someone relies on your income, your care or your business, your passing could create a financial gap. Life insurance can provide a lump-sum benefit to named beneficiaries when an insured person dies, subject to the policy terms. It is one way to prepare for the financial impact of an unexpected loss.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-primary-950">{reason.title}</h3>
                <p className="leading-relaxed text-gray-700">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16" aria-labelledby="benefits">
        <div className="mx-auto max-w-5xl">
          <h2 id="benefits" className="mb-6 text-3xl font-bold text-primary-950">Key benefits of life insurance</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6"><h3 className="mb-3 text-xl font-bold text-primary-950">Financial security</h3><p className="text-gray-700">Give beneficiaries resources and flexibility when they may need them most.</p></div>
            <div className="rounded-xl bg-white p-6"><h3 className="mb-3 text-xl font-bold text-primary-950">Tax-efficient death benefit</h3><p className="text-gray-700">In Canada, life insurance death benefits are generally received income-tax-free by beneficiaries. Estate and ownership arrangements can affect the outcome.</p></div>
            <div className="rounded-xl bg-white p-6"><h3 className="mb-3 text-xl font-bold text-primary-950">Estate and legacy planning</h3><p className="text-gray-700">Help provide cash for estate costs, support charitable intentions or balance inheritances among heirs.</p></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="types">
        <div className="mx-auto max-w-5xl">
          <h2 id="types" className="mb-4 text-3xl font-bold text-primary-950">Different types of life insurance</h2>
          <p className="mb-8 text-gray-700">The right policy depends on how long coverage is needed, affordability, flexibility, health and the role insurance plays in your broader plan.</p>
          <div className="space-y-5">
            {types.map((type) => (
              <article key={type.title} className="rounded-xl border border-gray-200 p-7">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-primary-950">{type.title}</h3>
                  <span className="text-sm font-semibold text-primary-700">{type.best}</span>
                </div>
                <p className="leading-relaxed text-gray-700">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-950 px-6 py-16 text-white" aria-labelledby="planning">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-bold uppercase tracking-widest text-gold-400">Tools for Financial &amp; Estate Planning</p>
          <h2 id="planning" className="mb-6 text-3xl font-bold">How life insurance fits into a bigger plan</h2>
          <div className="grid gap-7 md:grid-cols-2">
            <div><h3 className="mb-2 text-xl font-semibold">Family protection</h3><p className="text-blue-100">Estimate income needs, outstanding debts, education funding and existing resources before choosing coverage.</p></div>
            <div><h3 className="mb-2 text-xl font-semibold">Estate liquidity</h3><p className="text-blue-100">Consider potential taxes on death, final expenses, beneficiary designations and how assets will pass to heirs.</p></div>
            <div><h3 className="mb-2 text-xl font-semibold">Business succession</h3><p className="text-blue-100">Explore personally or corporately owned policies for key-person risks, buy-sell funding and shareholder planning.</p></div>
            <div><h3 className="mb-2 text-xl font-semibold">Corporate and charitable strategies</h3><p className="text-blue-100">Some arrangements may involve corporate tax considerations, the capital dividend account or charitable giving. These require coordinated legal and tax advice.</p></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-950">What type of life insurance is right for you?</h2>
          <p className="mb-7 text-lg text-gray-700">Start with the people and commitments you want to protect. Damian Alexander, CLU, can help you compare options as part of your financial and estate planning process.</p>
          <a href="https://calendly.com/planningwithdamian/30-min-with-damian" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg bg-primary-950 px-7 py-3 font-bold text-white hover:bg-primary-800">Book a Consultation</a>
          <p className="mt-7 text-sm leading-relaxed text-gray-500">General educational information for Canadian readers, not individualized insurance, legal or tax advice. Coverage, premiums, cash values, guarantees and exclusions vary by insurer and contract. Insurance is subject to underwriting and policy terms. Consult qualified tax and legal professionals for complex estate or corporate strategies.</p>
          <p className="mt-4 text-sm"><Link href="/services" className="font-semibold text-primary-800 underline">Explore all services</Link></p>
        </div>
      </section>
    </main>
  )
}

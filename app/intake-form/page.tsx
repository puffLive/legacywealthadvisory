'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'

type Question = { id: string; label: string }
const opinions: Question[] = [
  { id: 'saving', label: 'Saving and accumulating money on a regular basis' },
  { id: 'education', label: 'Providing educational funds for children' },
  { id: 'advisor', label: 'Having a professional advisor involved in insurance, investment and retirement planning' },
  { id: 'plan', label: 'Developing and maintaining a strategic financial plan' },
  { id: 'will', label: 'Having an up-to-date will and power of attorney' },
  { id: 'deathLifestyle', label: 'In the event of a premature death: maintaining our family’s lifestyle' },
  { id: 'deathDebt', label: 'In the event of a premature death: paying off the mortgage or debts' },
  { id: 'deathEducation', label: 'In the event of a premature death: children’s post-secondary education' },
  { id: 'disabilityBills', label: 'Disability or critical illness: paying mortgage and major bills' },
  { id: 'disabilityLifestyle', label: 'Disability or critical illness: maintaining our standard of living' },
  { id: 'disabilityMedical', label: 'Disability or critical illness: additional medical expenses' },
  { id: 'taxInflation', label: 'Minimizing the impact of inflation and taxes' },
  { id: 'retirementFreedom', label: 'Having sufficient funds to retire on my own terms' },
]
const future = {
  Occupationally: ['Receive a raise', 'Change employment', 'Start a business', 'Retire', 'Other'],
  Personally: ['Get married', 'Start a family', 'Care for a parent', 'Other'],
  Financially: ['Buy/Sell a home/property', 'Borrow money', 'Pay off a loan', 'Buy/Sell a business', 'Other'],
}
const financial = [
  'I have a professional advisor who guides me in my financial planning',
  'I know what I am entitled to under my or my spouse’s group benefits and pension plan',
  'I have a regular savings and accumulation program',
  'I have plans for my children’s post-secondary education',
  'I know how much income I will receive if I become disabled',
  'I have enough money to make lifestyle adjustments in the event of a critical illness',
  'I/We can afford the costs of long-term care if needed',
]
const retirement = [
  'I know what capital I need for my retirement years',
  'My pension plan or retirement fund is structured to maximize its benefits',
  'I maximize my RRSP contributions each year',
  'My savings and investments are sufficient for my retirement objectives',
  'I understand what happens to my group benefits at retirement',
]
const estate = [
  'I/We have a list of important documents and their locations',
  'I understand how taxes may affect my estate',
  'I have an up-to-date will and power of attorney',
  'My/Our current life insurance will sustain our family’s lifestyle after my death',
]
const interests = [
  'Review savings and investment programs',
  'Maximize pension and retirement income',
  'Fund post-secondary education for children or grandchildren',
  'Put an up-to-date financial plan in place',
  'Maintain family lifestyle in the event of death or disability',
  'Maximize charitable gifting',
  'Strategies to reduce taxes',
  'Insurance to pay off the mortgage',
  'Offset the cost of a critical illness',
  'Offset the expense of long-term care',
  'Fund capital gains and other estate taxes',
  'Ensure business value goes to family after death, disability or critical illness',
]
const insuranceTypes = ['Life insurance', 'Income protection (Disability)', 'Critical Illness Insurance', 'Long Term Care Insurance']
const people = ['Myself', 'My spouse/partner', 'My children/grandchildren']

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="block text-sm font-medium text-gray-800">{label}<input name={name} type={type} required={required} className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-100" /></label>
}
function SelectQuestion({ question, name, options }: { question: string; name: string; options: string[] }) {
  return <label className="block text-sm text-gray-800"><span className="block mb-1">{question}</span><select name={name} defaultValue="" className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900"><option value="">Select an answer (optional)</option>{options.map(x => <option key={x} value={x}>{x}</option>)}</select></label>
}
function Group({ title, questions, prefix }: { title: string; questions: string[]; prefix: string }) {
  return <section className="space-y-4"><h3 className="text-xl font-bold text-primary-950">{title}</h3><div className="grid gap-4 md:grid-cols-2">{questions.map((q,i)=><SelectQuestion key={q} question={q} name={prefix + '_' + i} options={['Yes','No','Not Sure']} />)}</div></section>
}

export default function IntakeFormPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [error, setError] = useState('')
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data: Record<string,string> = {}
    for (const [key, value] of new FormData(form).entries()) data[key] = String(value)
    setStatus('sending'); setError('')
    try {
      const response = await fetch('/api/intake', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || 'Submission failed')
      setStatus('sent'); form.reset()
    } catch (err) { setStatus('error'); setError(err instanceof Error ? err.message : 'Unable to send the form') }
  }
  return <main className="bg-gray-50">
    <section className="bg-primary-950 px-6 py-14 text-white"><div className="mx-auto max-w-5xl"><p className="font-bold uppercase tracking-wider text-gold-400">Client Discovery &amp; Financial Planning</p><h1 className="mt-3 text-4xl font-bold">Legacy Wealth Advisory Intake Form</h1><p className="mt-4 max-w-3xl text-blue-100">A simple conversation to help us understand your goals, priorities and planning needs. Complete the secure online form below, or download a blank PDF to complete offline.</p></div></section>
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 flex flex-wrap items-center gap-4"><a href="/api/intake/pdf" download="Legacy_Wealth_Advisory_Intake_Form.pdf" className="rounded-lg border border-primary-950 px-5 py-3 font-semibold text-primary-950 hover:bg-white">Download Blank PDF</a><Link href="/contact" className="font-semibold text-primary-800 underline">Contact our office</Link></div>
      {status==='sent' ? <div role="status" className="rounded-xl border border-green-300 bg-green-50 p-8"><h2 className="text-2xl font-bold text-green-900">Your intake form was sent.</h2><p className="mt-2 text-green-900">Thank you. Our office will review your information.</p><button className="mt-5 underline" onClick={() => setStatus('idle')}>Start another form</button></div> :
      <form onSubmit={submit} className="space-y-10 rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <section className="space-y-5"><h2 className="text-2xl font-bold text-primary-950">1. General Information</h2><div className="grid gap-5 md:grid-cols-2"><Field label="Completed by" name="completedBy"/><Field label="Date" name="date" type="date"/><Field label="Full name" name="fullName" required/><Field label="Date of birth" name="dateOfBirth" type="date"/><Field label="Address" name="address"/><Field label="Email" name="email" type="email" required/><Field label="Phone" name="phone" type="tel" required/><Field label="Spouse/partner’s name" name="spouseName"/><Field label="Spouse/partner’s date of birth" name="spouseDob" type="date"/></div></section>
        <section className="space-y-5"><h2 className="text-2xl font-bold text-primary-950">2. Employment</h2><div className="grid gap-5 md:grid-cols-2"><Field label="Your job title" name="jobTitle"/><Field label="Spouse/partner’s job title" name="spouseJobTitle"/><Field label="Your ownership percentage, if applicable" name="ownershipPercentage"/><Field label="Spouse/partner’s ownership percentage" name="spouseOwnershipPercentage"/><Field label="Your business name" name="businessName"/><Field label="Spouse/partner’s business name" name="spouseBusinessName"/><Field label="Your business address" name="businessAddress"/><Field label="Spouse/partner’s business address" name="spouseBusinessAddress"/></div></section>
        <section className="space-y-5"><h2 className="text-2xl font-bold text-primary-950">3. Additional Information</h2><div className="grid gap-5 md:grid-cols-2"><Field label="Number of children under 18" name="childrenUnder18" type="number"/><Field label="Number of children 18 or older" name="childrenOver18" type="number"/><Field label="Other dependents" name="dependents"/><SelectQuestion question="Housing situation" name="housing" options={['Own our house','Renting','Other']}/></div></section>
        <section className="space-y-5"><h2 className="text-2xl font-bold text-primary-950">4. My Opinions</h2><p className="text-gray-600">How important are these matters to you?</p><div className="grid gap-4 md:grid-cols-2">{opinions.map(q=><SelectQuestion key={q.id} question={q.label} name={'opinion_'+q.id} options={['Very Important','Important','Of little value']}/>)}</div></section>
        <section className="space-y-5"><h2 className="text-2xl font-bold text-primary-950">5. In the Near Future</h2><p className="text-gray-600">Select any plans you expect in the near future.</p><div className="grid gap-7 md:grid-cols-3">{Object.entries(future).map(([group,items])=><fieldset key={group}><legend className="mb-3 font-bold text-primary-950">{group}</legend><div className="space-y-3">{items.map((item,i)=><label key={item} className="flex items-start gap-2 text-sm text-gray-800"><input type="checkbox" name={'future_'+group+'_'+i} value={item} className="mt-1"/>{item}</label>)}</div></fieldset>)}</div><Field label="Other upcoming plans" name="futureOther"/></section>
        <section className="space-y-8"><h2 className="text-2xl font-bold text-primary-950">6. Financial, Retirement &amp; Estate Overview</h2><Group title="Financial Overview" questions={financial} prefix="financial"/><Group title="Retirement Overview" questions={retirement} prefix="retirement"/><Group title="Estate Overview" questions={estate} prefix="estate"/></section>
        <section className="space-y-6"><h2 className="text-2xl font-bold text-primary-950">7. I Am Interested in Discussing / Reviewing</h2><div className="grid gap-4 md:grid-cols-2">{interests.map((q,i)=><SelectQuestion key={q} question={q} name={'interest_'+i} options={['Yes','No']}/>)}</div><div className="grid gap-6 md:grid-cols-2">{insuranceTypes.map((t,i)=><fieldset key={t} className="rounded-lg border border-gray-200 p-4"><legend className="px-2 font-semibold text-primary-950">{t}</legend>{people.map((p,j)=><label key={p} className="mb-2 flex items-center gap-2 text-sm"><input type="checkbox" name={'coverage_'+i+'_'+j} value={p}/>{p}</label>)}</fieldset>)}</div></section>
        <section className="space-y-3"><h2 className="text-2xl font-bold text-primary-950">8. Notes, Comments, Referrals</h2><textarea name="notes" rows={5} className="w-full rounded-lg border border-gray-300 p-3" placeholder="Anything else you would like us to know?"/></section>
        <section className="space-y-4 border-t border-gray-200 pt-6"><p className="text-sm text-gray-600">This information is collected to prepare for a financial planning discussion. Please do not include SINs, account numbers, passwords or medical records. Submission does not constitute an insurance application or establish an advisory relationship. Review our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</p><label className="flex items-start gap-3 text-sm text-gray-800"><input type="checkbox" name="consent" value="yes" required className="mt-1"/><span>I consent to Legacy Wealth Advisory collecting and using the information provided to contact me and prepare for a financial planning conversation.</span></label>{status==='error'&&<p role="alert" className="text-red-700">{error} Please contact our office if the issue continues.</p>}<button disabled={status==='sending'} type="submit" className="rounded-lg bg-primary-950 px-8 py-3 font-bold text-white hover:bg-primary-800 disabled:opacity-50">{status==='sending'?'Sending securely…':'Submit Intake Form'}</button></section>
      </form>}
    </div>
  </main>
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

const questions = [
  { title: 'Emergency savings', question: 'How many months of essential expenses could your emergency savings cover?', options: ['Less than one month', 'One to three months', 'Three to six months', 'More than six months'], tip: 'Build an accessible emergency reserve suited to your expenses and job security.' },
  { title: 'Cash flow', question: 'How consistently do you know where your money goes each month?', options: ['I am not sure', 'I sometimes track it', 'I usually track it', 'I follow a budget and review it'], tip: 'Review income, spending and savings to identify available cash flow.' },
  { title: 'Debt management', question: 'How are you managing high-interest debt?', options: ['Balances are increasing', 'Making minimum payments', 'Actively reducing balances', 'No high-interest debt'], tip: 'Consider a plan for high-interest balances before taking on new investment risks.' },
  { title: 'Retirement', question: 'How prepared is your retirement savings strategy?', options: ['I have not started', 'I have some savings', 'I contribute regularly', 'I have a documented plan I review'], tip: 'Estimate retirement income needs and compare them with expected sources of income.' },
  { title: 'Investments', question: 'How closely do your investments match your goals and risk tolerance?', options: ['I am unsure', 'I have not reviewed them recently', 'Mostly aligned', 'Reviewed and aligned with my goals'], tip: 'Review investment risk, time horizon, diversification and fees.' },
  { title: 'Life insurance', question: 'When did you last review life insurance against your current responsibilities?', options: ['I have no coverage or am unsure', 'More than five years ago', 'Within five years', 'Within the past year'], tip: 'Consider whether dependants, debts and estate needs warrant a coverage review.' },
  { title: 'Income protection', question: 'How well do you understand your disability and critical illness coverage?', options: ['I do not know what I have', 'I have limited coverage', 'I have some coverage but need a review', 'I have reviewed coverage and limitations'], tip: 'Check income replacement, waiting periods, exclusions and employer benefits.' },
  { title: 'Estate planning', question: 'How current are your will, powers of attorney and beneficiary designations?', options: ['Not in place or unsure', 'Outdated', 'Some items are current', 'Reviewed after major life changes'], tip: 'Review estate documents and beneficiaries with qualified professionals.' },
  { title: 'Financial goals', question: 'How clearly have you defined your main financial goals?', options: ['Not yet defined', 'General ideas', 'Specific goals', 'Specific goals with timelines and progress reviews'], tip: 'Write down your priorities, target dates and approximate funding requirements.' },
  { title: 'Plan reviews', question: 'How often do you review your overall financial plan?', options: ['Never', 'Only after a major event', 'Every few years', 'At least annually and after major changes'], tip: 'Revisit your plan as your family, work, taxes and financial circumstances change.' },
] as const

export default function FinancialHealthScore() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const completed = answers.filter(a => a >= 0).length
  const score = Math.round(answers.reduce((sum, answer) => sum + (answer < 0 ? 0 : answer), 0) / (questions.length * 3) * 100)
  const areas = questions.map((q, i) => ({ ...q, answer: answers[i] })).filter(q => q.answer <= 1)
  function choose(index: number, value: number) {
    setAnswers(previous => previous.map((answer, i) => i === index ? value : answer))
    setShowResults(false)
  }
  return <main className="min-h-screen bg-[#faf9f6]">
    <section className="bg-[#102c49] px-6 py-16 text-white"><div className="mx-auto max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d7b77d]">Legacy Financial Tools</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">What's Your Financial Health Score?</h1>
      <p className="mt-5 max-w-2xl leading-8 text-white/85">Answer ten quick questions about your savings, cash flow, retirement, insurance and estate planning. Get an educational snapshot of areas you may want to review.</p>
      <p className="mt-3 text-sm text-white/65">About 3 minutes · No email required · Answers stay in your browser</p>
    </div></section>
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8 rounded-xl border border-[#e5e1d8] bg-white p-5">
        <div className="flex items-center justify-between gap-4"><span className="text-sm font-semibold text-[#102c49]">Your progress</span><span className="text-sm text-[#53616c]">{completed} of {questions.length} answered</span></div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e9e5dd]"><div className="h-full rounded-full bg-[#b99a5e] transition-all" style={{ width: `${completed / questions.length * 100}%` }}/></div>
      </div>
      <div className="space-y-5">{questions.map((item, index) => <fieldset key={item.title} className="rounded-xl border border-[#e5e1d8] bg-white p-5 sm:p-7">
        <legend className="sr-only">{item.question}</legend>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#997b48]">Question {index + 1} · {item.title}</p>
        <h2 className="mt-2 text-lg font-semibold leading-7 text-[#102c49]">{item.question}</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">{item.options.map((option, value) => <label key={option} className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${answers[index] === value ? 'border-[#a7864b] bg-[#f7f0e2] text-[#102c49]' : 'border-[#e5e1d8] hover:border-[#b99a5e] text-[#53616c]'}`}>
          <input type="radio" name={`financial-question-${index}`} value={value} checked={answers[index] === value} onChange={() => choose(index, value)} className="accent-[#102c49]" />{option}
        </label>)}</div>
      </fieldset>)}</div>
      <button type="button" disabled={completed !== questions.length} onClick={() => {setShowResults(true); window.setTimeout(() => document.getElementById('financial-health-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)}} className="mt-8 w-full rounded-lg bg-[#102c49] px-6 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#234e70]">See My Financial Health Score</button>
      {showResults && <section id="financial-health-results" aria-live="polite" className="mt-10 scroll-mt-24 rounded-xl border border-[#e5e1d8] bg-white p-6 sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#997b48]">Your educational snapshot</p>
        <div className="mt-4 flex flex-wrap items-end gap-4"><span className="font-serif text-6xl text-[#102c49]">{score}<span className="text-2xl text-[#53616c]">/100</span></span><p className="max-w-sm pb-2 text-sm text-[#53616c]">{score >= 75 ? 'Several positive planning indicators. Continue reviewing your plan as circumstances change.' : score >= 50 ? 'Some planning foundations are in place, with opportunities for further review.' : 'Your answers suggest several planning areas worth prioritising.'}</p></div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#e9e5dd]"><div className="h-full rounded-full bg-[#b99a5e]" style={{ width: `${score}%` }}/></div>
        <p className="mt-5 text-sm leading-7 text-[#53616c]">This is a simple self-reported checklist score, not a validated financial health rating or personalized recommendation. All ten questions carry equal weight; your actual priorities may differ.</p>
        <h2 className="mt-8 font-serif text-2xl text-[#102c49]">Areas to consider reviewing</h2>
        {areas.length ? <ul className="mt-4 space-y-4">{areas.map(area => <li key={area.title} className="border-l-2 border-[#b99a5e] pl-4"><strong className="text-[#102c49]">{area.title}</strong><p className="mt-1 text-sm leading-6 text-[#53616c]">{area.tip}</p></li>)}</ul> : <p className="mt-3 text-sm leading-7 text-[#53616c]">Your answers indicate that you review these planning areas regularly. Consider checking whether your plans still match your circumstances.</p>}
        <div className="mt-9 rounded-lg bg-[#f5f0e6] p-6"><h3 className="font-serif text-2xl text-[#102c49]">Want to review your bigger financial picture?</h3><p className="mt-2 text-sm leading-7 text-[#53616c]">Discuss how your retirement, protection, investments and estate goals fit together.</p><a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="mt-5 inline-flex rounded bg-[#102c49] px-5 py-3 text-sm font-semibold text-white">Book an Introductory Consultation →</a></div>
        <button type="button" onClick={() => {setAnswers(Array(questions.length).fill(-1));setShowResults(false);window.scrollTo({top:0,behavior:'smooth'})}} className="mt-5 text-sm font-semibold text-[#102c49] underline underline-offset-4">Start again</button>
      </section>}
      <p className="mt-8 text-xs leading-6 text-[#53616c]">For educational use only. This tool does not collect or transmit your answers and does not replace individualized financial, investment, insurance, tax or legal advice. <Link href="/resources/calculators" className="underline">Explore other financial tools</Link>.</p>
    </section>
  </main>
}

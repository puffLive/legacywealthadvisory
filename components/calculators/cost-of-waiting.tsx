'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

const money = (n: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(n)
const delay = 5
function balance(monthly: number, annualReturn: number, years: number, waitYears: number) {
  const rate = Math.pow(1 + annualReturn / 100, 1 / 12) - 1
  let value = 0
  for (let m = 0; m < years * 12; m++) {
    value *= 1 + rate
    if (m >= waitYears * 12) value += monthly
  }
  return value
}
function Graph({ monthly, annualReturn, horizon }: { monthly: number; annualReturn: number; horizon: number }) {
  const { now, later, maximum } = useMemo(() => {
    const now = Array.from({ length: horizon + 1 }, (_, year) => balance(monthly, annualReturn, year, 0))
    const later = Array.from({ length: horizon + 1 }, (_, year) => balance(monthly, annualReturn, year, delay))
    return { now, later, maximum: Math.max(1, now[horizon]) }
  }, [monthly, annualReturn, horizon])
  const left = 66, top = 22, right = 746, bottom = 302
  const points = (values: number[]) => values.map((value, year) => `${left + (right - left) * year / horizon},${bottom - (bottom - top) * value / maximum}`).join(' ')
  return <div className="overflow-hidden rounded-xl border border-[#e7e1d7] bg-white p-4 sm:p-6">
    <div className="mb-4 flex flex-wrap gap-5 text-sm"><span className="flex items-center gap-2 text-[#102c49]"><span className="h-1 w-7 rounded bg-[#1d6a7a]"/>Start today</span><span className="flex items-center gap-2 text-[#7b6136]"><span className="h-1 w-7 rounded bg-[#c49a51]"/>Wait five years</span></div>
    <svg viewBox="0 0 780 355" role="img" aria-label="Line chart comparing projected savings growth over thirty years when starting now versus waiting five years" className="w-full">
      {[0,.25,.5,.75,1].map((fraction) => { const y = bottom - (bottom-top)*fraction; return <g key={fraction}><line x1={left} x2={right} y1={y} y2={y} stroke="#e5e7eb"/><text x={left-12} y={y+5} fontSize="13" textAnchor="end" fill="#566473">{money(maximum*fraction).replace('CA','')}</text></g> })}
      {Array.from({ length: horizon / 5 + 1 }, (_, i) => i * 5).map(year => <g key={year}><text x={left+(right-left)*year/horizon} y={bottom+27} fontSize="14" textAnchor="middle" fill="#566473">{year}</text></g>)}
      <text x="406" y="350" textAnchor="middle" fontSize="14" fill="#566473">Years from today</text>
      <polyline key={`now-${monthly}-${annualReturn}`} fill="none" stroke="#1d6a7a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" points={points(now)} style={{strokeDasharray:1800,strokeDashoffset:1800,animation:'drawGrowth 1.3s ease-out forwards'}}/>
      <polyline key={`later-${monthly}-${annualReturn}`} fill="none" stroke="#c49a51" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" points={points(later)} style={{strokeDasharray:1800,strokeDashoffset:1800,animation:'drawGrowth 1.5s ease-out .15s forwards'}}/>
      <circle cx={right} cy={bottom-(bottom-top)*now[horizon]/maximum} r="5" fill="#1d6a7a"/>
      <circle cx={right} cy={bottom-(bottom-top)*later[horizon]/maximum} r="5" fill="#c49a51"/>
    </svg>
    <style>{`@keyframes drawGrowth { to { stroke-dashoffset: 0; } } @media (prefers-reduced-motion: reduce) { polyline { animation: none !important; stroke-dashoffset: 0 !important; } }`}</style>
  </div>
}
export default function CostOfWaiting() {
  const [monthly, setMonthly] = useState(300)
  const [annualReturn, setAnnualReturn] = useState(5)
  const [years, setYears] = useState(30)
  const startNow = useMemo(() => balance(monthly, annualReturn, years, 0), [monthly, annualReturn, years])
  const startLater = useMemo(() => balance(monthly, annualReturn, years, delay), [monthly, annualReturn, years])
  const difference = startNow - startLater
  return <main className="min-h-screen bg-[#faf9f6]">
    <section className="bg-[#102c49] px-6 py-16 text-white"><div className="mx-auto max-w-6xl">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d7b77d]">Legacy Financial Tools</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">The Cost of Waiting Calculator</h1>
      <p className="mt-5 max-w-2xl leading-8 text-white/85">What could five years of waiting cost you? Compare starting monthly savings today with starting five years later, using an adjustable hypothetical return.</p>
    </div></section>
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[310px_1fr]">
        <aside className="self-start rounded-xl border border-[#e7e1d7] bg-white p-6">
          <h2 className="font-serif text-2xl text-[#102c49]">Adjust your assumptions</h2>
          <div className="mt-7 space-y-8">
            <label className="block"><span className="flex justify-between gap-3 text-sm font-semibold text-[#102c49]"><span>Monthly savings</span><output>{money(monthly)}</output></span><input className="mt-4 w-full accent-[#1d6a7a]" type="range" min="50" max="2000" step="50" value={monthly} onChange={e=>setMonthly(Number(e.target.value))}/><span className="mt-1 flex justify-between text-xs text-[#64717a]"><span>$50</span><span>$2,000</span></span></label>
            <label className="block"><span className="flex justify-between gap-3 text-sm font-semibold text-[#102c49]"><span>Assumed annual return</span><output>{annualReturn.toFixed(1)}%</output></span><input className="mt-4 w-full accent-[#1d6a7a]" type="range" min="0" max="10" step="0.5" value={annualReturn} onChange={e=>setAnnualReturn(Number(e.target.value))}/><span className="mt-1 flex justify-between text-xs text-[#64717a]"><span>0%</span><span>10%</span></span></label>
            <label className="block"><span className="flex justify-between gap-3 text-sm font-semibold text-[#102c49]"><span>Time horizon</span><output>{years} years</output></span><input className="mt-4 w-full accent-[#1d6a7a]" type="range" min="10" max="30" step="5" value={years} onChange={e=>setYears(Number(e.target.value))}/><span className="mt-1 flex justify-between text-xs text-[#64717a]"><span>10 years</span><span>30 years</span></span></label>
          </div>
          <button type="button" onClick={()=>{setMonthly(300);setAnnualReturn(5);setYears(30)}} className="mt-8 text-sm font-semibold text-[#102c49] underline underline-offset-4">Reset assumptions</button>
        </aside>
        <div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[#dce8e8] bg-white p-5"><p className="text-sm text-[#53616c]">Start today</p><p className="mt-2 text-2xl font-semibold text-[#1d6a7a]">{money(startNow)}</p></div>
            <div className="rounded-xl border border-[#f0e5d2] bg-white p-5"><p className="text-sm text-[#53616c]">Wait five years</p><p className="mt-2 text-2xl font-semibold text-[#99733e]">{money(startLater)}</p></div>
            <div className="rounded-xl border border-[#e5e1d8] bg-[#f5f0e6] p-5"><p className="text-sm text-[#53616c]">Projected difference</p><p className="mt-2 text-2xl font-semibold text-[#102c49]">{money(difference)}</p></div>
          </div>
          <div className="mt-6"><Graph monthly={monthly} annualReturn={annualReturn} horizon={years}/></div>
          <p className="mt-3 text-sm leading-7 text-[#53616c]">The graph and figures show your selected {years}-year horizon. Starting later also means making 60 fewer monthly contributions.</p>
          <div className="mt-8 rounded-xl bg-[#102c49] p-7 text-white"><h2 className="font-serif text-2xl">Small steps today can make a difference.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">A coordinated plan can help you decide how much to save, which accounts to consider and how your goals fit together.</p><a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="mt-5 inline-flex rounded-lg bg-[#d7b77d] px-5 py-3 text-sm font-semibold text-[#102c49]">Book an Introductory Consultation →</a></div>
        </div>
      </div>
      <p className="mt-10 max-w-5xl text-xs leading-6 text-[#53616c]">Illustrative estimates only, not a prediction or guaranteed investment return. Assumes deposits are made at the end of each month and a constant annual effective return compounded monthly, with no initial balance, fees, taxes, inflation or market volatility. Real investments fluctuate and may lose value. This tool does not recommend an investment product or replace personalized advice. <Link href="/resources/calculators" className="underline">Explore other calculators</Link>.</p>
    </section>
  </main>
}

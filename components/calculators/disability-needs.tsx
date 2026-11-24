'use client'
import { useState } from 'react'
const fields = [
 {label:'Monthly take-home employment income',value:5000,help:'Income that would stop if you could not work.'},
 {label:'Essential monthly living expenses and debt payments',value:3500,help:'Include housing, food, utilities and minimum debt payments once.'},
 {label:'Additional monthly disability-related expenses',value:500,help:'Allow for ongoing care, transportation or rehabilitation.'},
 {label:'Other reliable monthly household income available',value:0,help:'Only income available to meet these expenses during disability.'},
 {label:'Workplace disability benefit per month (after tax)',value:2000,help:'Enter the estimated net benefit after its waiting period.'},
 {label:'Personal disability benefit per month (after tax)',value:0,help:'Enter existing coverage, not a proposed policy.'},
 {label:'Emergency savings available for disability',value:10000,help:'Exclude savings reserved for other commitments.'},
]
const money=(n:number)=>n.toLocaleString('en-CA',{style:'currency',currency:'CAD',maximumFractionDigits:0})
export default function DisabilityNeeds(){
 const [values,setValues]=useState(fields.map(f=>f.value))
 const [waiting,setWaiting]=useState(90)
 const [income,expenses,extra,other,work,personal,savings]=values
 const budget=Math.max(0,expenses+extra-other)
 const benefits=work+personal
 const gap=Math.max(0,budget-benefits)
 const waitingNeed=budget*waiting/(365.25/12)
 const reserveGap=Math.max(0,waitingNeed-savings)
 const remaining=Math.max(0,savings-waitingNeed)
 const runway=budget>0?savings/budget:null
 const laterRunway=gap>0?remaining/gap:null
 const replacement=income>0?benefits/income*100:null
 return <main className="min-h-screen bg-[#faf9f6]"><section className="bg-[#102c49] px-6 py-16 text-white"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-widest text-[#d7b77d]">Free planning tools</p><h1 className="mt-4 font-serif text-4xl sm:text-5xl">Disability Insurance Needs Analysis</h1><p className="mt-5 max-w-3xl leading-8 text-white/80">If an illness or injury prevented you from working, how would you pay your monthly bills? Explore your income protection gap and emergency savings needs.</p></div></section><section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-2"><div className="space-y-5 border bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-[#102c49]">Your income and expenses</h2>{fields.map((f,i)=><div key={f.label}><label htmlFor={'di-'+i} className="block text-sm font-medium text-[#102c49]">{f.label} (CAD)</label><p id={'di-help-'+i} className="mt-1 text-xs text-[#53616c]">{f.help}</p><input id={'di-'+i} aria-describedby={'di-help-'+i} type="number" min={0} max={100000000} step={100} value={values[i]} onChange={e=>setValues(v=>v.map((x,j)=>j===i?Math.min(100000000,Math.max(0,Number(e.target.value)||0)):x))} className="mt-2 w-full rounded border p-3"/></div>)}<div><label htmlFor="di-wait" className="block text-sm font-medium">Assumed waiting period: {waiting} days</label><input id="di-wait" type="range" min={0} max={365} step={5} value={waiting} onChange={e=>setWaiting(Number(e.target.value))} className="mt-3 w-full accent-[#102c49]"/><p className="text-xs text-[#53616c]">Assumes neither disability benefit pays during this period. Adjust for your actual coverage.</p></div></div><div className="space-y-5 border bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-[#102c49]">Your estimated income protection gap</h2><div aria-live="polite" className="bg-[#102c49] p-6 text-white"><p>Additional monthly income needed</p><p className="mt-2 text-4xl font-semibold text-[#d7b77d]">{money(gap)}<span className="text-lg"> / month</span></p></div>{[['Monthly expenses after other income',money(budget)],['Existing monthly disability benefits',money(benefits)],['Employment income replaced by existing benefits',replacement===null?'Not applicable':replacement.toFixed(0)+'%'],['Savings needed during waiting period',money(waitingNeed)],['Additional waiting-period savings needed',money(reserveGap)],['Savings runway before benefits',runway===null?'No monthly shortfall':runway.toFixed(1)+' months'],['Remaining savings runway after waiting period',laterRunway===null?'No monthly shortfall':laterRunway.toFixed(1)+' months']].map(([label,value])=><div key={label} className="flex justify-between gap-4 border-b pb-3 text-sm"><span>{label}</span><strong className="text-right">{value}</strong></div>)}<div><p className="text-sm font-medium">Monthly expense coverage after waiting period</p><div className="mt-2 h-3 rounded bg-gray-200"><div className="h-3 rounded bg-[#b99a5e]" style={{width:(budget>0?Math.min(100,benefits/budget*100):100)+'%'}}/></div></div><a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="block bg-[#102c49] p-4 text-center font-semibold text-white">Discuss My Disability Insurance Needs</a><p className="text-sm leading-6 text-[#53616c]">Educational cash-flow estimate, not an insurance quote or personalized recommendation. Actual benefits depend on income, occupation, underwriting, tax treatment, policy definitions, offsets, waiting and benefit periods. Benefits may not cover the full calculated gap or be payable together. Verify your workplace and personal coverage. Calculations remain in your browser.</p></div></section></main>
}

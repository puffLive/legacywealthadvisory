'use client'
import { useState } from 'react'
const fields = [
 {label:'Monthly income replacement needed (after other income and benefits)',value:5000},
 {label:'Additional medical and rehabilitation expenses',value:15000},
 {label:'Additional debt or mortgage reduction',value:20000},
 {label:'Caregiving and family support',value:10000},
 {label:'Other additional expenses',value:5000},
 {label:'Available savings allocated to recovery',value:10000},
 {label:'Existing critical illness coverage',value:0},
]
const money=(n:number)=>n.toLocaleString('en-CA',{style:'currency',currency:'CAD',maximumFractionDigits:0})
export default function CriticalIllnessNeeds(){
 const [values,setValues]=useState(fields.map(f=>f.value))
 const [months,setMonths]=useState(12)
 const costs=[values[0]*months,...values.slice(1,5)]
 const total=costs.reduce((a,b)=>a+b,0)
 const need=Math.max(0,total-values[5]-values[6])
 return <main className="min-h-screen bg-[#faf9f6]"><section className="bg-[#102c49] px-6 py-16 text-white"><div className="mx-auto max-w-6xl"><p className="text-xs uppercase tracking-widest text-[#d7b77d]">Free planning tools</p><h1 className="mt-4 font-serif text-4xl sm:text-5xl">Critical Illness Insurance Needs Analysis</h1><p className="mt-5 max-w-3xl leading-8 text-white/80">Estimate the financial resources you may need to recover from a serious illness. Adjust the illustrative amounts to reflect your circumstances.</p></div></section><section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-2"><div className="space-y-5 border bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-[#102c49]">Your financial needs</h2>{fields.map((f,i)=><div key={f.label}><label htmlFor={'ci-'+i} className="block text-sm font-medium text-[#102c49]">{f.label} (CAD)</label><input id={'ci-'+i} type="number" min={0} max={100000000} step={100} value={values[i]} onChange={e=>setValues(v=>v.map((x,j)=>j===i?Math.min(100000000,Math.max(0,Number(e.target.value)||0)):x))} className="mt-2 w-full rounded border p-3"/>{i===0&&<div className="mt-4"><label htmlFor="ci-months" className="block text-sm">Recovery period: {months} months</label><input id="ci-months" type="range" min={3} max={36} step={3} value={months} onChange={e=>setMonths(Number(e.target.value))} className="w-full accent-[#102c49]"/></div>}</div>)}</div><div className="space-y-5 border bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-[#102c49]">Your estimated protection gap</h2><p>Total estimated needs: <strong>{money(total)}</strong></p><p>Available savings and existing coverage: <strong>{money(values[5]+values[6])}</strong></p><div aria-live="polite" className="bg-[#102c49] p-6 text-white"><p>Additional coverage to consider</p><p className="mt-2 text-4xl font-semibold text-[#d7b77d]">{money(need)}</p></div>{costs.map((v,i)=><div key={i}><div className="flex justify-between gap-2 text-sm"><span>{['Income replacement','Medical and rehabilitation','Debt reduction','Family support','Other expenses'][i]}</span><strong>{money(v)}</strong></div><div className="mt-2 h-2 rounded bg-gray-100"><div className="h-2 rounded bg-[#b99a5e]" style={{width:(total?v/total*100:0)+'%'}}/></div></div>)}<a href="https://calendly.com/planningwithdamian/30-min-with-damian" className="block bg-[#102c49] p-4 text-center font-semibold text-white">Discuss My Critical Illness Needs</a><p className="text-sm leading-6 text-[#53616c]">Educational estimate only, not a quote or personalized recommendation. Avoid double-counting debt payments and income needs. Actual coverage depends on underwriting, policy definitions, exclusions and eligibility. Calculations remain in your browser.</p></div></section></main>
}

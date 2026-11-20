import type { Metadata } from 'next'
import Calculator from '@/components/calculators/financial-calculator'
export const metadata:Metadata={title:'Cash Flow Calculator | Legacy Wealth Advisory',description:'Estimate your monthly household surplus or deficit with an interactive budget.',alternates:{canonical:'https://legacywealthadvisory.ca/resources/calculators/cash-flow'}}
export default function Page(){return <Calculator kind="cash-flow"/>}

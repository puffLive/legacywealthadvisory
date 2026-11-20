import type { Metadata } from 'next'
import Calculator from '@/components/calculators/financial-calculator'
export const metadata:Metadata={title:'Insurance Needs Analysis | Legacy Wealth Advisory',description:'Estimate life insurance needs and compare coverage with debts, income replacement and assets.',alternates:{canonical:'https://legacywealthadvisory.ca/resources/calculators/insurance-needs'}}
export default function Page(){return <Calculator kind="insurance"/>}

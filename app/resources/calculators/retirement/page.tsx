import type { Metadata } from 'next'
import Calculator from '@/components/calculators/financial-calculator'
export const metadata:Metadata={title:'Retirement Calculator | Legacy Wealth Advisory',description:'Project retirement savings and monthly income using adjustable assumptions.',alternates:{canonical:'https://legacywealthadvisory.ca/resources/calculators/retirement'}}
export default function Page(){return <Calculator kind="retirement"/>}

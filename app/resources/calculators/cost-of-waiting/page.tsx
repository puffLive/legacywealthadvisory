import type { Metadata } from 'next'
import CostOfWaiting from '@/components/calculators/cost-of-waiting'
export const metadata: Metadata = { title: 'Cost of Waiting Calculator | Legacy Wealth Advisory', description: 'See how starting to save today compares with waiting five years. Adjust monthly contributions and hypothetical returns in this free Canadian savings calculator.', alternates: { canonical: 'https://legacywealthadvisory.ca/resources/calculators/cost-of-waiting' } }
export default function Page() { return <CostOfWaiting /> }

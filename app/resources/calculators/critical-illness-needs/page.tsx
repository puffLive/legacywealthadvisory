import type { Metadata } from 'next'
import CriticalIllnessNeeds from '@/components/calculators/critical-illness-needs'
export const metadata: Metadata = { title: 'Critical Illness Insurance Needs Calculator | Legacy Wealth Advisory', description: 'Estimate your critical illness insurance protection gap in Canada based on income replacement, recovery expenses, savings and existing coverage.', alternates: { canonical: 'https://www.legacywealthadvisory.ca/resources/calculators/critical-illness-needs' } }
export default function Page(){return <CriticalIllnessNeeds/>}

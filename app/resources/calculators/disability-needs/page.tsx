import type { Metadata } from 'next'
import DisabilityNeeds from '@/components/calculators/disability-needs'
export const metadata: Metadata = { title: 'Disability Insurance Needs Calculator | Legacy Wealth Advisory', description: 'Estimate your monthly disability income protection gap and waiting-period savings needs in Canada.', alternates: { canonical: 'https://www.legacywealthadvisory.ca/resources/calculators/disability-needs' } }
export default function Page(){return <DisabilityNeeds/>}

import type { Metadata } from 'next'
import FinancialHealthScore from '@/components/calculators/financial-health-score'
export const metadata: Metadata = { title: 'What’s Your Financial Health Score? | Legacy Wealth Advisory', description: 'Take a free ten-question financial health check covering retirement, savings, debt, insurance and estate planning. See areas to review in minutes.', alternates: { canonical: 'https://legacywealthadvisory.ca/resources/calculators/financial-health-score' } }
export default function Page() { return <FinancialHealthScore /> }

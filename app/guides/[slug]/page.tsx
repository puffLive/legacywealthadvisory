import { notFound } from 'next/navigation'
import { TopicPage, topicMetadata, topics } from '@/components/seo/topic-pages'
const slugs = ['estate-planning-business-owners','critical-illness-vs-disability-insurance','pension-options-after-leaving-employer','rrsp-vs-tfsa-vs-fhsa']
export function generateStaticParams() { return slugs.map(slug => ({slug})) }
export function generateMetadata({params}:{params:{slug:string}}) { if (!slugs.includes(params.slug)) return {robots:{index:false}}; return topicMetadata(params.slug) }
export default function Page({params}:{params:{slug:string}}) { if (!slugs.includes(params.slug) || !topics[params.slug]) notFound(); return <TopicPage slug={params.slug}/> }

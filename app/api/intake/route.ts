import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export const runtime = 'nodejs'

const schema = z.object({
  fullName: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(40),
  consent: z.literal('yes'),
}).passthrough()

const maxBodyBytes = 30000
const labels: Record<string,string> = {
  completedBy:'Completed by',date:'Date',fullName:'Full name',dateOfBirth:'Date of birth',
  address:'Address',email:'Email',phone:'Phone',spouseName:'Spouse/partner name',
  spouseDob:'Spouse/partner date of birth',jobTitle:'Your job title',
  spouseJobTitle:'Spouse/partner job title',ownershipPercentage:'Your business ownership percentage',
  spouseOwnershipPercentage:'Spouse/partner ownership percentage',businessName:'Your business name',
  spouseBusinessName:'Spouse/partner business name',businessAddress:'Your business address',
  spouseBusinessAddress:'Spouse/partner business address',childrenUnder18:'Children under 18',
  childrenOver18:'Children 18 or older',dependents:'Other dependents',housing:'Housing',
  futureOther:'Other future plans',notes:'Notes, comments, referrals',consent:'Consent',
}
const opinions = ['Saving regularly','Education funding','Professional advisor','Strategic financial plan','Will and power of attorney','Death: family lifestyle','Death: mortgage and debt','Death: education','Disability: bills','Disability: lifestyle','Disability: medical expenses','Inflation and taxes','Retirement funds']
const opinionKeys = ['saving','education','advisor','plan','will','deathLifestyle','deathDebt','deathEducation','disabilityBills','disabilityLifestyle','disabilityMedical','taxInflation','retirementFreedom']
const financial = ['Professional financial advisor','Know group benefits and pension','Regular savings program','Education funding plans','Know disability income','Critical illness preparedness','Long-term care affordability']
const retirement = ['Know retirement capital needed','Pension/retirement fund optimized','Maximize RRSP contributions','Savings sufficient for retirement','Know group benefits at retirement']
const estate = ['Important documents list','Understand estate tax implications','Up-to-date will and POA','Life insurance sustains family lifestyle']
const interests = ['Review savings and investments','Maximize retirement income','Education funding','Financial plan','Protect family after death or disability','Charitable gifting','Reduce taxes','Mortgage insurance','Critical illness costs','Long-term care costs','Capital gains and estate taxes','Business value protection']
const coverage = ['Life insurance','Disability insurance','Critical illness insurance','Long-term care insurance']
const persons = ['Myself','Spouse/partner','Children/grandchildren']
function fieldLabel(key:string) {
  if (labels[key]) return labels[key]
  if (key.startsWith('opinion_')) { const i=opinionKeys.indexOf(key.slice(8)); return i>=0?'Importance: '+opinions[i]:key }
  for (const [prefix,items] of [['financial_',financial],['retirement_',retirement],['estate_',estate],['interest_',interests]] as const) {
    if (key.startsWith(prefix)) { const i=Number(key.slice(prefix.length)); if(Number.isInteger(i)&&i>=0&&i<items.length)return prefix.replace('_','')+': '+items[i] }
  }
  if(key.startsWith('coverage_')) {const parts=key.split('_');return 'Coverage: '+(coverage[Number(parts[1])]||'Other')+' — '+(persons[Number(parts[2])]||'Other')}
  if(key.startsWith('future_')) return 'Future plans: '+key.slice(7).replace(/_\d+$/,'')
  return key
}
export async function POST(request:NextRequest) {
  try {
    const raw = await request.text()
    if (raw.length > maxBodyBytes) return NextResponse.json({success:false,error:'Submission is too large.'},{status:413})
    const parsed = schema.safeParse(JSON.parse(raw))
    if (!parsed.success) return NextResponse.json({success:false,error:'Please provide your name, email, phone and consent.'},{status:400})
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Intake form SMTP credentials are not configured')
      return NextResponse.json({success:false,error:'Online submission is not available right now. Please contact our office.'},{status:503})
    }
    const data = parsed.data as Record<string,unknown>
    const rows = Object.entries(data).filter(([k,v])=>k!=='consent'&&typeof v==='string'&&v.length>0&&v.length<=4000)
    if(rows.length>110) return NextResponse.json({success:false,error:'Too many fields.'},{status:400})
    const body = [
      'LEGACY WEALTH ADVISORY INTAKE FORM',
      'Submitted from the website',
      '',
      ...rows.map(([key,value])=>fieldLabel(key)+': '+String(value)),
      '',
      'Client consent: yes',
      'Handle as confidential client discovery information. Do not forward through unsecured channels.',
    ].join('\n')
    const transporter = nodemailer.createTransport({
      host:process.env.SMTP_HOST,
      port:Number(process.env.SMTP_PORT||587),
      secure:process.env.SMTP_SECURE==='true',
      auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD},
    })
    await transporter.sendMail({
      from:process.env.SMTP_FROM||process.env.SMTP_USER,
      to:process.env.INTAKE_FORM_RECIPIENT||'damian@legacywealthadvisory.ca',
      replyTo:String(data.email),
      subject:'Legacy Wealth Advisory Intake Form — '+String(data.fullName).replace(/[\r\n]/g,' '),
      text:body,
    })
    return NextResponse.json({success:true})
  } catch (error) {
    console.error('Intake form delivery error',error)
    return NextResponse.json({success:false,error:'We could not deliver your intake form. Please contact our office.'},{status:500})
  }
}

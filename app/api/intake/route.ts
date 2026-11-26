import { NextRequest, NextResponse } from 'next/server'
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
    const {ZOHO_CLIENT_ID,ZOHO_CLIENT_SECRET,ZOHO_REFRESH_TOKEN}=process.env
    if(!ZOHO_CLIENT_ID||!ZOHO_CLIENT_SECRET||!ZOHO_REFRESH_TOKEN)return NextResponse.json({success:false,error:'Online submission is temporarily unavailable.'},{status:503})
    const token=await fetch('https://accounts.zohocloud.ca/oauth/v2/token',{method:'POST',body:new URLSearchParams({client_id:ZOHO_CLIENT_ID,client_secret:ZOHO_CLIENT_SECRET,refresh_token:ZOHO_REFRESH_TOKEN,grant_type:'refresh_token'})})
    const auth=await token.json()
    if(!token.ok||!auth.access_token)throw new Error('CRM authorization failed')
    const names=parsed.data.fullName.split(/\s+/)
    const lastName=names.pop()!
    const description='Client Intake | Consent recorded '+new Date().toISOString()
    const headers={Authorization:'Zoho-oauthtoken '+auth.access_token,'Content-Type':'application/json'}
    const lead=await fetch('https://www.zohoapis.ca/crm/v2/Leads',{method:'POST',headers,body:JSON.stringify({data:[{First_Name:names.join(' ')||undefined,Last_Name:lastName,Email:parsed.data.email,Phone:parsed.data.phone,Company:'Individual',Lead_Source:'Website',Description:description}]})})
    const result=await lead.json()
    const id=result.data?.[0]?.details?.id
    if(!lead.ok||result.data?.[0]?.code!=='SUCCESS'||!id)throw new Error('CRM lead creation failed')
    const attachment=new FormData()
    attachment.append('file',new Blob([body],{type:'text/plain'}),'Client-intake.txt')
    const uploaded=await fetch('https://www.zohoapis.ca/crm/v2/Leads/'+encodeURIComponent(id)+'/Attachments',{method:'POST',headers:{Authorization:headers.Authorization},body:attachment})
    const uploadResult=await uploaded.json()
    if(!uploaded.ok||uploadResult.data?.[0]?.code!=='SUCCESS')return NextResponse.json({success:false,error:'Your contact details were saved, but the intake document could not be attached. Please contact our office before resubmitting.'},{status:502})
    return NextResponse.json({success:true})
  } catch (error) {
    console.error('Intake form delivery failed')
    return NextResponse.json({success:false,error:'We could not deliver your intake form. Please contact our office.'},{status:500})
  }
}

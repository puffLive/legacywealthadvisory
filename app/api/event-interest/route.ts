import {NextRequest,NextResponse} from 'next/server'
import {z} from 'zod'
const schema=z.object({firstName:z.string().trim().min(1).max(100),lastName:z.string().trim().min(1).max(100),phone:z.string().trim().min(7).max(40).regex(/^[+0-9() .-]+$/),email:z.string().trim().email().max(254),consent:z.literal(true),website:z.string().max(0).optional()})
export async function POST(req:NextRequest){
 try{
 const d=schema.parse(await req.json())
 const {ZOHO_CLIENT_ID,ZOHO_CLIENT_SECRET,ZOHO_REFRESH_TOKEN}=process.env
 if(!ZOHO_CLIENT_ID||!ZOHO_CLIENT_SECRET||!ZOHO_REFRESH_TOKEN)return NextResponse.json({success:false},{status:503})
 const token=await fetch('https://accounts.zohocloud.ca/oauth/v2/token',{method:'POST',body:new URLSearchParams({client_id:ZOHO_CLIENT_ID,client_secret:ZOHO_CLIENT_SECRET,refresh_token:ZOHO_REFRESH_TOKEN,grant_type:'refresh_token'})})
 const t=await token.json();if(!token.ok||!t.access_token)throw new Error('CRM authorization failed')
 const result=await fetch('https://www.zohoapis.ca/crm/v2/Leads',{method:'POST',headers:{Authorization:'Zoho-oauthtoken '+t.access_token,'Content-Type':'application/json'},body:JSON.stringify({data:[{First_Name:d.firstName,Last_Name:d.lastName,Phone:d.phone,Email:d.email,Company:'Individual',Lead_Source:'Website',Description:'Future events interest | Explicit email consent: '+new Date().toISOString()+' | Source: /events/join | Consent wording: I agree to receive emails from Legacy Wealth Advisory about future webinars, seminars and educational events. I can unsubscribe at any time.'}]})})
 const body=await result.json();if(!result.ok||body.data?.[0]?.code!=='SUCCESS')throw new Error('CRM did not confirm lead creation')
 return NextResponse.json({success:true})
 }catch(e){return NextResponse.json({success:false},{status:e instanceof z.ZodError?400:502})}
}

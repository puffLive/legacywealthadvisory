import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
const sections: {title:string; lines:string[]}[] = [
  {title:'GENERAL INFORMATION',lines:['Completed By: __________________________________    Date: __________________','Full Name: ______________________________________    Date of Birth: __________','Address: ______________________________________________________________','Email: __________________________________________    Phone: ______________','Spouse/Partner Name: ___________________________    Date of Birth: __________']},
  {title:'EMPLOYMENT',lines:['Your Job Title: _________________________________','Spouse/Partner Job Title: ________________________','Your Ownership Percentage: __________    Spouse/Partner Ownership: __________','Your Business Name: ____________________________','Spouse/Partner Business Name: ___________________','Your Business Address: __________________________','Spouse/Partner Business Address: _________________']},
  {title:'ADDITIONAL INFORMATION',lines:['Children under 18: ________    Children 18 or older: ________','Other Dependents: ______________________________','Housing: [ ] Own our house     [ ] Renting     [ ] Other']},
  {title:'MY OPINIONS - Very Important / Important / Of little value',lines:[
    'Saving and accumulating money regularly','Education funding for children','Professional advisor for insurance, investment and retirement','Strategic financial plan','Up-to-date will and power of attorney','Premature death: maintaining family lifestyle','Premature death: paying off mortgage and debts','Premature death: education funding','Disability or critical illness: paying major bills','Disability or critical illness: maintaining lifestyle','Disability or critical illness: medical expenses','Minimizing inflation and taxes','Sufficient funds for retirement'].map(x=>'[ ] [ ] [ ]  '+x)},
  {title:'IN THE NEAR FUTURE - Check all that apply',lines:['Occupationally: [ ] Raise  [ ] Change employment  [ ] Start business','                     [ ] Retire  [ ] Other','Personally:       [ ] Get married  [ ] Start family  [ ] Care for parent','                     [ ] Other','Financially:      [ ] Buy/sell property  [ ] Borrow money  [ ] Pay off loan','                     [ ] Buy/sell business  [ ] Other']},
  {title:'FINANCIAL OVERVIEW - Yes / No / Not Sure',lines:['Professional advisor for financial planning','Know group benefits and pension entitlements','Regular savings and accumulation program','Plans for post-secondary education','Know disability income available','Critical illness financial preparedness','Long-term care affordability'].map(x=>'[ ] [ ] [ ]  '+x)},
  {title:'RETIREMENT OVERVIEW - Yes / No / Not Sure',lines:['Know capital needed for retirement','Pension/retirement fund structured to maximize benefits','Maximize RRSP contributions','Savings and investments sufficient for retirement','Know group benefits at retirement'].map(x=>'[ ] [ ] [ ]  '+x)},
  {title:'ESTATE OVERVIEW - Yes / No / Not Sure',lines:['List of important documents and locations','Understand estate tax implications','Up-to-date will and power of attorney','Life insurance sustains family lifestyle after death'].map(x=>'[ ] [ ] [ ]  '+x)},
  {title:'INTERESTED IN DISCUSSING / REVIEWING - Yes / No',lines:['Review savings and investment programs','Maximize pension and retirement income','Fund post-secondary education','Put a financial plan in place','Maintain family lifestyle after death or disability','Maximize charitable gifting','Strategies to reduce taxes','Mortgage payoff insurance','Critical illness costs','Long-term care costs','Capital gains and estate taxes','Protect business value for family'].map(x=>'[ ] [ ]  '+x)},
  {title:'INSURANCE INTEREST - Check people to insure',lines:['Life insurance: [ ] Myself  [ ] Spouse/Partner  [ ] Children/Grandchildren','Disability: [ ] Myself  [ ] Spouse/Partner  [ ] Children/Grandchildren','Critical illness: [ ] Myself  [ ] Spouse/Partner  [ ] Children/Grandchildren','Long-term care: [ ] Myself  [ ] Spouse/Partner  [ ] Children/Grandchildren']},
  {title:'NOTES, COMMENTS, REFERRALS',lines:['________________________________________________________________________','________________________________________________________________________','________________________________________________________________________','________________________________________________________________________']},
]
function pdfEscape(s:string) {return s.replace(/[^\x20-\x7E]/g,' ').replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)')}
export async function GET() {
  const pages:string[][]=[]
  let lines:string[]=[]
  const push=(s:string)=>{if(lines.length>=48){pages.push(lines);lines=[]}lines.push(s)}
  for(const section of sections){if(lines.length+section.lines.length+3>48){pages.push(lines);lines=[]}push('');push('## '+section.title);for(const line of section.lines)push(line)}
  if(lines.length)pages.push(lines)
  const objects:string[]=[]
  const add=(s:string)=>{objects.push(s);return objects.length}
  const catalog=add('')
  const pagesRoot=add('')
  const font=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
  const pageIds:number[]=[]
  for(let p=0;p<pages.length;p++){
    let stream='BT\n'
    stream+='/F1 17 Tf 50 754 Td (Legacy Wealth Advisory Intake Form) Tj\n'
    stream+='/F1 9 Tf 0 -18 Td (Client Discovery & Financial Planning) Tj\n'
    stream+='/F1 10 Tf\n'
    for(const line of pages[p]){stream+='0 -13 Td ('+pdfEscape(line.replace(/^## /,''))+') Tj\n'}
    stream+='0 -18 Td (Page '+(p+1)+' of '+pages.length+') Tj\nET'
    const length=new TextEncoder().encode(stream).length
    const contentId=add('<< /Length '+length+' >>\nstream\n'+stream+'\nendstream')
    const pageId=add('<< /Type /Page /Parent '+pagesRoot+' 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 '+font+' 0 R >> >> /Contents '+contentId+' 0 R >>')
    pageIds.push(pageId)
  }
  objects[catalog-1]='<< /Type /Catalog /Pages '+pagesRoot+' 0 R >>'
  objects[pagesRoot-1]='<< /Type /Pages /Kids ['+pageIds.map(i=>i+' 0 R').join(' ')+'] /Count '+pageIds.length+' >>'
  let pdf='%PDF-1.4\n'
  const offsets=[0]
  for(let i=0;i<objects.length;i++){offsets.push(pdf.length);pdf+=(i+1)+' 0 obj\n'+objects[i]+'\nendobj\n'}
  const xref=pdf.length
  pdf+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n'
  for(const offset of offsets.slice(1))pdf+=String(offset).padStart(10,'0')+' 00000 n \n'
  pdf+='trailer\n<< /Size '+(objects.length+1)+' /Root '+catalog+' 0 R >>\nstartxref\n'+xref+'\n%%EOF'
  return new NextResponse(new TextEncoder().encode(pdf),{headers:{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="Legacy_Wealth_Advisory_Intake_Form.pdf"','Cache-Control':'public, max-age=3600'}})
}

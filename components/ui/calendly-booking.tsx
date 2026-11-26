'use client'

import * as React from 'react'
import { InlineWidget, PopupModal, useCalendlyEventListener } from 'react-calendly'

function ConsultationGate({onSaved}:{onSaved:(data:{firstName:string;lastName:string;email:string;phone:string})=>void}){
 const [busy,setBusy]=React.useState(false);const [error,setError]=React.useState(false)
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();if(busy)return;const f=new FormData(e.currentTarget);const data={firstName:String(f.get('firstName')),lastName:String(f.get('lastName')),email:String(f.get('email')),phone:String(f.get('phone'))};setBusy(true);setError(false);try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,source:'consultation'})});const result=await r.json();if(!r.ok||!result.success)throw new Error();onSaved(data)}catch{setError(true)}finally{setBusy(false)}}
 return <form onSubmit={submit} className="p-6 space-y-4 bg-white text-primary-950"><h2 className="font-serif text-2xl">Book your consultation</h2><p className="text-sm">Enter your contact details, then choose an appointment time.</p><div className="grid gap-4 sm:grid-cols-2">{[{name:'firstName',label:'First name',type:'text'},{name:'lastName',label:'Last name',type:'text'},{name:'email',label:'Email address',type:'email'},{name:'phone',label:'Phone number',type:'tel'}].map(f=><label key={f.name} className="text-sm">{f.label}<input required minLength={f.name==='phone'?10:2} maxLength={254} name={f.name} type={f.type} className="block w-full border rounded p-3 mt-1"/></label>)}</div><p className="text-xs">By continuing, you agree to be contacted about your consultation request. <a href="/privacy-policy" className="underline">Privacy policy</a>.</p>{error&&<p role="alert" className="text-red-700">Unable to save your request. Please retry or call (905) 840-2222.</p>}<button disabled={busy} className="bg-primary-950 text-white rounded px-5 py-3">{busy?'Saving…':'Continue to appointment booking'}</button></form>
}

interface CalendlyInlineProps {
  url: string
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
    customAnswers?: Record<string, string>
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

export function CalendlyInline({ url, prefill, utm, pageSettings }: CalendlyInlineProps) {
  const [lead,setLead]=React.useState<{firstName:string;lastName:string;email:string;phone:string}|null>(null)
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('Event scheduled:', e.data.payload)
      // You can add analytics tracking or other actions here
    },
  })

  if(!lead)return <ConsultationGate onSaved={setLead}/>
  return (
    <div className="calendly-inline-widget-container">
      <InlineWidget
        url={url}
        prefill={{...prefill,firstName:lead.firstName,lastName:lead.lastName,email:lead.email}}
        utm={utm}
        pageSettings={pageSettings}
        styles={{ minWidth: '100%', height: '700px' }}
      />
    </div>
  )
}

interface CalendlyButtonProps {
  url: string
  text?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

export function CalendlyButton({
  url,
  text = 'Schedule Meeting',
  variant = 'primary',
  size = 'md',
  className = '',
  prefill,
  utm,
  pageSettings,
}: CalendlyButtonProps) {
  const [rootElement, setRootElement] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    setRootElement(document.getElementById('__next') || document.body)
  }, [])

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses = {
    primary: 'bg-primary-950 text-white hover:bg-primary-800 focus:ring-primary-500',
    secondary: 'bg-gold-500 text-primary-950 hover:bg-gold-400 focus:ring-gold-500',
    outline: 'border-2 border-primary-950 text-primary-950 hover:bg-primary-50 focus:ring-primary-500',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (!rootElement) return null

  return (
    <button className={buttonClasses} onClick={()=>{window.location.href='/contact#calendly-booking'}}>{text}</button>
  )
}

interface CalendlyModalProps {
  url: string
  isOpen: boolean
  onClose: () => void
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    backgroundColor?: string
  }
}

export function CalendlyModal({
  url,
  isOpen,
  onClose,
  prefill,
  utm,
  pageSettings,
}: CalendlyModalProps) {
  const [rootElement, setRootElement] = React.useState<HTMLElement | null>(null)

  React.useEffect(() => {
    setRootElement(document.getElementById('__next') || document.body)
  }, [])

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('Event scheduled:', e.data.payload)
      onClose()
    },
  })

  if (!rootElement) return null
  if(isOpen&&!lead)return <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"><div role="dialog" aria-modal="true" className="bg-white w-full max-w-xl max-h-[90vh] overflow-auto rounded-lg"><button onClick={onClose} className="float-right p-4" aria-label="Close">×</button><ConsultationGate onSaved={setLead}/></div></div>
  if(!lead)return null

  return (
    <PopupModal
      url={url}
      open={isOpen}
      onModalClose={onClose}
      rootElement={rootElement}
      prefill={prefill}
      utm={utm}
      pageSettings={pageSettings}
    />
  )
}

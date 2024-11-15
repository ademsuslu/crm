import  ReminderForm  from '@/components/shared/reminder/reminder-form'
import React from 'react'


export default async function CustomerDetails({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/customers/${id}`,{ cache: 'no-cache' })
    const data = await response.json()
     let email = String(data?.iletisim_bilgileri?.email)
   
  return (
    <div>
        <ReminderForm email={email}/>
    </div>
  )
}

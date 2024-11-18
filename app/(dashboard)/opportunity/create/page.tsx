import { OpportunityCreate } from '@/components/shared/forms/oppornuty-form'
import React from 'react'

export default async function OpportunityCreatePage() {
    const url = `https://crm-backend-production-e80f.up.railway.app/api/users`
    const response = await fetch(url,{
       method: 'GET',
       cache:"no-cache",
    })  
    const res = await response.json()
  return (
    <div>
        <OpportunityCreate user={res}/>
    </div>
  )
}

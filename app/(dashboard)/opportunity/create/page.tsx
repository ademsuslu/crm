import { OpportunityCreate } from '@/components/shared/forms/oppornuty-form'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default async function OpportunityCreatePage() {
    const url = `https://crm-backend-production-e80f.up.railway.app/api/users`
    const response = await fetch(url,{
       method: 'GET',
       cache:"no-cache",
    })  
    const res = await response.json()
  return (
    <div className='flex flex-col'>
      <div>
        <Link href={"/opportunity"} className={buttonVariants({})}>Back</Link>
      </div>
        <OpportunityCreate user={res}/>
    </div>
  )
}

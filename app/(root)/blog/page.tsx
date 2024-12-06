import Blogs from '@/components/shared/blog/blogs'
import React from 'react'

export default async function BlogPage() {
   // create a fetch
   const response = await fetch('https://crm-backend-production-e80f.up.railway.app/api/blogs', { cache: 'no-store' })
   const data = await response.json()
 

  return (
    <div className='space-y-4 h-full'>
        <h1 className='mt-4 text-xl font-bold'>Blogs For SusluCrm</h1>
      <Blogs data={data}/>
    </div>
  )
}

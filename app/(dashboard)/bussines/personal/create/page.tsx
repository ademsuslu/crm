import { PersonalCreate } from '@/components/shared/forms/personal/personal-create'
import React from 'react'

export default async function CreatePersonalPage() {
  const response =  await fetch(`${process.env.NEXT_API_URL}/businesses`,{cache:"no-store"})
  const data = await response.json()
  return (
    <div><PersonalCreate data={data}/></div>
  )
}

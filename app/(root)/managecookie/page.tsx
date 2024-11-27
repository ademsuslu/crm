import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function ManageCookiePage() {
  return (
    <div className='flex flex-col my-10 w-full gap-8 justify-center items-start'>
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl'>Security, Privacy, and Control</h1>
      <span>Your business runs on trust, that's why it runs on SusluCrm.</span>
    </div>
    <span>With SusluCrm’s end-to-end approach to data security, privacy, and control, each product includes tools that empower your teams to achieve compliance with confidence and security infrastructure that keeps your data safe.</span>

    <div className='flex items-center justify-start space-x-3'>
      <Button asChild variant={"outline"} size={"default"} className="rounded  mt-3">
        <Link href="/sign-in" className='text-lg'>Get Started free</Link>
      </Button>
      </div>
      <span>Last Modified: November 28, 2024</span>
    </div>
  )
}

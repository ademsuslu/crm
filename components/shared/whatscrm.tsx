import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Whatscrm = () => {
  return (
    <>
<div className="mt-6"></div>
    <div className='flex flex-col md:flex-row items-center gap-4 bg-secondary rounded p-4 justify-between'>
       <div className='w-full h-[240px] rounded-lg'>

           <video src="/assets/crm.mp4" className="w-full h-full" controls ></video>
       </div>
        <div className='flex flex-col  h-[240px]'>
            <h2 className='text-2xl '>What is Crm?</h2>
            <span className='my-4 '>Customer relationship management is an approach to managing a company's interactions with existing and potential customers.</span>
            <div className='flex items-center justify-start space-x-3'>
                <Button asChild variant={"outline"} size={"default"} className="rounded  mt-3">
                    <Link href="/sign-in" className='text-lg'>Get Started free</Link>
                </Button>
                <Button asChild size={"default"}  variant={"secondary"} className="rounded  border border-slate-400 px-10  mt-3">
                    <Link href="/sign-in" className='text-lg'>Get a demo</Link>
                </Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Whatscrm
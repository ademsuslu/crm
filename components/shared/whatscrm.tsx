import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Whatscrm = () => {
  return (
    <>
<div className="mt-6"></div>
    <div className='flex flex-col md:flex-row items-center gap-4 justify-between'>
       <div className='w-[740px] h-[240px] rounded-lg'>

           <video src="/assets/crm.mp4" className="w-full h-full" controls ></video>
       </div>
        <div className='flex flex-col  h-[240px]'>
            <h2 className='text-2xl font-mono'>What is Crm?</h2>
            <span className='my-4 font-mono'>Customer relationship management is an approach to managing a company's interactions with existing and potential customers.</span>
            <div className='flex items-center justify-start space-x-3'>
                <Button asChild variant={"outline"} className="rounded font-mono mt-3">
                    <Link href="/sign-in">Get a demo</Link>
                </Button>
                <Button asChild variant={"outline"} className="rounded font-mono mt-3">
                    <Link href="/sign-in">Get Started free</Link>
                </Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Whatscrm
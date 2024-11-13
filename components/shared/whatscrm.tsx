import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Whatscrm = () => {
  return (
    <>
<div className="mt-6"></div>
    <div className='flex flex-col md:flex-row items-center gap-4 bg-secondary rounded p-4 justify-between'>
       <div className='w-full aspect-video rounded-lg'>

           <video src="/assets/crm.mp4" className="w-full  h-full" controls ></video>
       </div>
        <div className='flex flex-col w-full '>
            <h2 className='text-2xl '>What is Crm?</h2>
            <span className='my-4 '>
            "Customer relationship management", that is, customer relationship management, is an approach to limiting a company's communication with its current and potential customers. This approach aims to increase customer policy, customer appearance and ensure loyalty in the long term. It allows companies to communicate more effectively with their customers, understand their requests and expectations and provide better service accordingly. Customer relationship management also helps increase customer loyalty in areas such as sales, marketing and customer service.
 
            </span>
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
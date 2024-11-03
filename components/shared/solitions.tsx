import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Solitions = () => {
    return (
        <div className='flex flex-col justify-center w-full'>

            <div className='max-w-[1500px] w-full  h-[500px] mx-auto '>
                <img src="/assets/crms.jpeg" className='w-full h-full object-cover rounded' alt="" />
            </div>
            <div className='mt-2 text-center'>
                <h1 className='text-lg my-3 font-mono'>
                    Transform Customer Relationships with a Unified CRM Platform
                </h1>
                <div>
                    <p className='font-mono'>  A unified CRM platform empowers businesses to build stronger, more meaningful relationships with their customers. By consolidating data across marketing, sales, and support teams, a CRM ensures everyone has access to the same insights, streamlining workflows and enhancing customer experiences. With a CRM, companies can track every interaction, anticipate customer needs, and tailor communications effectively. Built-in analytics and automation further drive efficiency, enabling teams to prioritize leads, personalize outreach, and close deals faster. Whether nurturing new prospects or supporting loyal customers, a CRM provides the tools to maximize each customer journey and foster long-term growth.</p>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                <Button asChild variant={"outline"} className="rounded font-mono mt-3">
                    <Link href="/sign-in">Get a demo</Link>
                </Button>
                <Button asChild variant={"secondary"} className="rounded font-mono mt-3">
                    <Link href="/sign-in">Get Started free</Link>
                </Button>
            </div>
            </div>
            <div className="mt-3"></div>

        </div>
    )
}

export default Solitions
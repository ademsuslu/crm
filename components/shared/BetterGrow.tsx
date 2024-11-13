import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const BetterGrow = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center space-y-4'>
            <div className='flex flex-col'>
             <h1 className=' text-2xl my-2'>Grow better with Crm today</h1>
             <div className='flex items-center justify-center space-x-3'>
             <Button asChild variant={"outline"} size={"default"} className="rounded   border border-slate-400  mt-3">
                    <Link href="/sign-in" className='text-lg'>Get Started free</Link>
                </Button>
                <Button asChild size={"default"}  variant={"secondary"} className="rounded border px-10  mt-3">
                    <Link href="/sign-in" className='text-lg'>Get a demo</Link>
                </Button>
            </div>
            </div>
            <div>
            <Image
                  className="rounded"
                  src="/assets/bettergrow.jpeg"
                  alt=""
                  width={350}
                  height={300}
                  loading="lazy"
                />
            </div>
    </div>
  )
}

export default BetterGrow
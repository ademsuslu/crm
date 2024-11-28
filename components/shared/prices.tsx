import Link from 'next/link';
import React from 'react'
import { TiTick } from "react-icons/ti";
import { Button } from '../ui/button';

const Prices = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col'>
                <h1 className='text-2xl  text-start'>
                    Marketing Software That Grows With You
                </h1>
                <span className='text-start  my-2'>
                    Start with free tools and pay as you grow, or hit the ground running with one of our premium editions.
                </span>
            </div>
     
            <div className='flex flex-col md:flex-row   mt-4 gap-3'>
                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-2xl '>
                            Free
                        </h2>
                        <p className=' text-foreground my-2 text-gray-300'>No credit card required</p>
                        <span className='text-center '>
                            $0/month
                        </span>
                        <div className="border w-full mt-4 border-slate-600 "></div>
                        <div className='flex flex-col  mt-6'>

                            <h1 className=' text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span> Email marketing </span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Forms</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Live chat</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Ad management </span>                       </li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /><span>Mobile Optimization</span></li>
                            </ul>
                        </div>
                        <Button asChild size="lg" className="text-lg rounded mt-3">
                    <Link href="/sign-in">👉 Start Now</Link>
                </Button>
                    </div>
                </div>

                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-2xl '>
                            Starter
                        </h2>
                        <p className=' text-foreground my-2 text-gray-300'>Starts at</p>
                        <span className='text-center '>
                            $20/month
                        </span>
                        
                        <div className="border w-full mt-4 border-slate-600 "></div>
                        <div className='flex flex-col mt-6'>
                            <h1 className=' text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span> Everything in Free</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Multiple currencies</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Email health insights</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Calls-to-action</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /><span>No Crm branding </span></li>
                            </ul>
                        </div>
                        <Button asChild size="lg" className="text-lg rounded mt-3">
                    <Link href="/sign-in">👉 Start Now</Link>
                </Button>
                    </div>
                </div>
             
                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-2xl '>
                            Professional
                        </h2>
                        <p className=' text-foreground my-2 text-gray-300'>Starts at</p>
                        <span className='text-center '>
                        $890/month
                        </span>
                        
                        <div className="border w-full mt-4 border-slate-600 "></div>
                        <div className='flex flex-col mt-6'>
                            <h1 className=' text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span> Everything in Starter</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Campaign management</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>SEO</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Predictive lead scoring</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /><span>Custom reporting</span></li>
                            </ul>
                        </div>
                        <Button asChild size="lg" className="text-lg rounded mt-3">
                    <Link href="/sign-in">👉 Start Now</Link>
                </Button>
                    </div>
                </div>
             
                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-2xl '>
                        Enterprise
                        </h2>
                        <p className=' text-foreground my-2 text-gray-300'>Starts at</p>
                        <span className='text-center '>
                        $3,600/month
                        </span>
                        
                        <div className="border w-full mt-4 border-slate-600 "></div>
                        <div className='flex flex-col mt-6'>
                            <h1 className=' text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Everything in Professional</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Adaptive testing</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Multuple revenue attribution</span></li>
                                <li className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>Customer journey analytics</span></li>
                            </ul>
                        </div>
                        <Button   asChild className='rounded w-full  mt-4'>
                            <Link href='/sign-in' className='text-lg font-bold'>Start</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-8  text-center  flex flex-col'>
                <h1>It’s already easy to use. But we’re still here for you.</h1>
                <div className='flex items-center justify-center space-x-3'>
                <Button asChild size="lg" className="text-lg rounded mt-3">
                    <Link href="/sign-in">👉 Start Now</Link>
                </Button>
                <Button asChild size={"default"}  variant={"secondary"} className="rounded  border border-slate-400 px-10  mt-3">
                    <Link href="/sign-in" className='text-lg'>Get a demo</Link>
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Prices
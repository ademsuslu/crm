import Link from 'next/link';
import React from 'react'
import { TiTick } from "react-icons/ti";
import { Button } from '../ui/button';

const Prices = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-mono text-start'>
                    Marketing Software That Grows With You
                </h1>
                <span className='text-start font-mono my-2'>
                    Start with free tools and pay as you grow, or hit the ground running with one of our premium editions.
                </span>
            </div>
            <div className='flex flex-col md:flex-row  mt-4 gap-3'>
                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-3xl font-mono'>
                            Free
                        </h2>
                        <p className='font-mono text-foreground my-2 text-gray-300'>No credit card required</p>
                        <span className='text-center font-mono'>
                            $0/month
                        </span>
                        <div className='flex flex-col mt-6'>

                            <h1 className='font-mono text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span> Email marketing </span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Forms</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Live chat</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Ad management </span>                       </li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /><span>Mobile Optimization</span></li>
                            </ul>
                        </div>
                        <Button asChild className='rounded font-mono mt-3'>
                            <Link href='/sign-in'>Start</Link>
                        </Button>
                    </div>
                </div>

                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-3xl font-mono'>
                            Starter
                        </h2>
                        <p className='font-mono text-foreground my-2 text-gray-300'>Starts at</p>
                        <span className='text-center font-mono'>
                            $20/month
                        </span>
                        <div className='flex flex-col mt-6'>
                            <h1 className='font-mono text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span> Everything in Free</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Multiple currencies</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Email health insights</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Calls-to-action</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /><span>No Crm branding </span></li>
                            </ul>
                        </div>
                        <Button asChild className='rounded font-mono mt-3'>
                            <Link href='/sign-in'>Start</Link>
                        </Button>
                    </div>
                </div>
             
                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-3xl font-mono'>
                            Professional
                        </h2>
                        <p className='font-mono text-foreground my-2 text-gray-300'>Starts at</p>
                        <span className='text-center font-mono'>
                        $890/month
                        </span>
                        <div className='flex flex-col mt-6'>
                            <h1 className='font-mono text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span> Everything in Starter</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Campaign management</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>SEO</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Predictive lead scoring</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /><span>Custom reporting</span></li>
                            </ul>
                        </div>
                        <Button asChild className='rounded font-mono mt-3'>
                            <Link href='/sign-in'>Start</Link>
                        </Button>
                    </div>
                </div>
             
                <div className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                    <div className='flex flex-col items-start justify-start p-4'>
                        <h2 className='text-3xl font-mono'>
                        Enterprise
                        </h2>
                        <p className='font-mono text-foreground my-2 text-gray-300'>Starts at</p>
                        <span className='text-center font-mono'>
                        $3,600/month
                        </span>
                        <div className='flex flex-col mt-6'>
                            <h1 className='font-mono text-xl my-2'>Popular features</h1>
                            <ul className=' space-y-1'>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Everything in Professional</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Adaptive testing</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Multuple revenue attribution</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /> <span>Customer journey analytics</span></li>
                                <li className='flex items-center font-mono'> <TiTick className='mr-2 text-xl' /><span>Social media                                </span></li>
                            </ul>
                        </div>
                        <Button asChild className='rounded font-mono mt-3'>
                            <Link href='/sign-in'>Start</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-3 font-mono text-xl text-center flex flex-col'>
                <h1>It’s already easy to use. But we’re still here for you.</h1>
                <div className='flex items-center justify-center space-x-3'>
                    <Button asChild variant={"secondary"} className="rounded font-mono mt-3">
                        <Link href="/sign-in">Get a demo</Link>
                    </Button>
                    <Button asChild variant={"secondary"} className="rounded font-mono mt-3">
                        <Link href="/sign-in">Get Started free</Link>
                    </Button>
            </div>
            </div>
        </div>
    )
}

export default Prices
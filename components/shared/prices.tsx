import Link from 'next/link';
import React from 'react'
import { TiTick } from "react-icons/ti";
import { Button } from '../ui/button';

const Prices = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-mono text-center'>
            Marketing Software That Grows With You
            </h1>
            <span className='text-center font-mono mt-3'>
            Start with free tools and pay as you grow, or hit the ground running with one of our premium editions.
            </span>
        </div>
        <div className='flex flex-col md:flex-row my-4 gap-3'>
            <div className='flex  border flex-col w-full rounded-lg md:w-1/4'>
                <div className='flex flex-col items-start justify-start p-4'>
                    <h2 className='text-3xl font-mono'>
                      Free
                    </h2>
                    <p className='font-mono text-foreground my-2 text-gray-300'>No credit card required</p>
                    <span className='text-center font-mono'>
                    $0/month
                    </span>
                    <ul className='mt-6 space-y-1'>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/>  Unlimited contacts</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Email marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> SMS marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Calendar and task management</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Customer support</li>
                    </ul>
                    <Button asChild className='rounded font-mono mt-3'>
                        <Link href='/sign-in'>Start free</Link>
                    </Button>
                </div>
            </div>
            <div className='flex  border flex-col w-full rounded-lg md:w-1/4'>
                <div className='flex flex-col items-start justify-start p-4'>
                    <h2 className='text-3xl font-mono'>
                      Free
                    </h2>
                    <p className='font-mono text-foreground my-2 text-gray-300'>No credit card required</p>
                    <span className='text-center font-mono'>
                    $0/month
                    </span>
                    <ul className='mt-6 space-y-1'>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/>  Unlimited contacts</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Email marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> SMS marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Calendar and task management</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Customer support</li>
                    </ul>
                    <Button asChild className='rounded font-mono mt-3'>
                        <Link href='/sign-in'>Start free</Link>
                    </Button>
                </div>
            </div>
            <div className='flex  border flex-col w-full rounded-lg md:w-1/4'>
                <div className='flex flex-col items-start justify-start p-4'>
                    <h2 className='text-3xl font-mono'>
                      Free
                    </h2>
                    <p className='font-mono text-foreground my-2 text-gray-300'>No credit card required</p>
                    <span className='text-center font-mono'>
                    $0/month
                    </span>
                    <ul className='mt-6 space-y-1'>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/>  Unlimited contacts</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Email marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> SMS marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Calendar and task management</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Customer support</li>
                    </ul>
                    <Button asChild className='rounded font-mono mt-3'>
                        <Link href='/sign-in'>Start free</Link>
                    </Button>
                </div>
            </div>
            <div className='flex  border flex-col w-full rounded-lg md:w-1/4'>
                <div className='flex flex-col items-start justify-start p-4'>
                    <h2 className='text-3xl font-mono'>
                      Free
                    </h2>
                    <p className='font-mono text-foreground my-2 text-gray-300'>No credit card required</p>
                    <span className='text-center font-mono'>
                    $0/month
                    </span>
                    <ul className='mt-6 space-y-1'>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/>  Unlimited contacts</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Email marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> SMS marketing</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Calendar and task management</li>
                        <li className='inline-flex items-center font-mono'> <TiTick className='mr-2 text-xl'/> Customer support</li>
                    </ul>
                    <Button asChild className='rounded font-mono mt-3'>
                        <Link href='/sign-in'>Start free</Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prices
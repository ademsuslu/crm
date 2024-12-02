import Link from 'next/link';
import React from 'react'
import { TiTick } from "react-icons/ti";
import { Button } from '../ui/button';

import { Plans } from "@/types/plans/model"

interface Props {
    data: Plans[]
}
const Prices: React.FC<Props> = ({ data }) => {


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

                {
                    data?.map((item, index: number) => {
                        return <div key={index} className='flex  border flex-col w-full rounded-lg md:w-1/4 hover:scale-105 transition-all'>
                            <div className='flex flex-col items-start justify-between h-full p-4'>
                                <h2 className='text-2xl '>
                                    {item.plan}
                                </h2>
                                <p className=' text-foreground my-2 text-gray-300'> {
                                    item.plan === "Free" ? "No credit card required" :
                                        "Credit card required"
                                }
                                </p>
                                <span className='text-center '>
                                    ${item.price}/month
                                </span>
                                <div className="border w-full mt-4 border-slate-600 "></div>
                                <div className='flex flex-col  mt-6'>

                                    <h1 className=' text-xl my-2'>Popular features</h1>
                                    <ul className=' space-y-1'>
                                        {
                                            item.features.map((feature, index: number) => {
                                                return <li key={index} className='flex items-center '> <TiTick className='mr-2 text-xl' /> <span>{feature}</span></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='p-1'>

                                <Button asChild size="lg" className="text-lg rounded mt-3   w-full">
                                    <Link href={`/checkout/${item._id}`}>👉 Start Now</Link>
                                </Button>
                            </div>
                        </div>

                    })
                }

            </div>
            <div className='mt-8  text-center  flex flex-col'>
                <h1>It’s already easy to use. But we’re still here for you.</h1>
                <div className='flex items-center justify-center space-x-3'>
                    <Button asChild size="lg" className="text-lg rounded mt-3">
                        <Link href={`/checkout/${"Free"}`}>👉 Start Now</Link>
                    </Button>
                    <Button asChild size={"default"} variant={"secondary"} className="rounded  border border-slate-400 px-10  mt-3">
                        <Link href="/sign-in" className='text-lg'>Get a demo</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Prices
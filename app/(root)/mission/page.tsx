import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
const MissionPage = () => {
  return (
    <div className='my-8 gap-6 flex flex-col'>
      <div className='space-y-3 flex flex-col'>
        <h1 className='text-2xl'>Why Do We Exist?</h1>
        <span>Our CRM platform was developed to strengthen customer experience and enable businesses to work more efficiently and effectively. We aim to enable businesses to establish stronger bonds with their customers through the opportunities offered by technology.</span>
      </div>
      <div className='space-y-3 flex flex-col'>
        <h1 className='text-xl'>Our Vision</h1>
        <span>We aim to offer an innovative CRM solution that is customizable to every business and makes customer relationship management easier in the digitalizing world. In the future, our greatest desire is to ensure that all businesses use technology with a human-centered approach.</span>
      </div>
      <div className='space-y-3 flex flex-col'>
        <h1 className='text-xl'>Our Values</h1>
        <ul className='list-disc px-6 space-y-2'>
          <li> <strong>Innovation</strong>: We add value to our customers by using continuous development and the latest technologies. </li>
          <li> <strong>Transparency</strong>:  Your data is safe and we prioritize transparency in all processes.</li>
          <li> <strong>Customer Focus</strong>: Understanding the needs of our customers and providing the most appropriate solution is our priority.</li>
          <li> <strong>Accessibility</strong>:We design solutions that every business, big or small, can easily use.</li>
        </ul>
      </div>
      <div className='space-y-3 bg-slate-600 p-6 rounded mx-auto text-center flex flex-col'>
        <span className='text-md'>Our client, a fashion store, increased their sales by 40% with our CRM platform. <br /> By analyzing customer behavior, they created better campaigns and strengthened customer loyalty</span>
      </div>
      <div className='space-y-3 flex flex-col'>
        <h1 className='text-xl'>Why Choose Us?</h1>
        <ul className='list-disc px-6 space-y-2'>
          <li>A user-friendly and fast interface.</li>
          <li>Comprehensive features to help you organize your customer relations.</li>
          <li>Flexible package options for every business.</li>
          <li>24/7 technical support and expert consultancy.</li>
        </ul>
      </div>
      <div className='space-y-3 flex flex-col'>
        <div className='flex items-center justify-start space-x-3 mt-2'>
          <Button asChild variant={"outline"} size={"default"} className="rounded  mt-3">
            <Link href="/sign-in" className='text-lg'>👉 Start Now </Link>
          </Button>

        </div>
      </div>
    </div>
  )
}

export default MissionPage



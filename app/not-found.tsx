"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function NotFound() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // Bir önceki sayfaya döner
  };
  return (
    <div className='flex flex-col w-full min-h-screen space-y-6 items-center justify-center'>
      <h1 className='text-xl font-bold'>404 - Not Found</h1>
      <p className='text-gray-400'>The page you're looking for doesn't exist.</p>
      <div className='flex flex-col space-y-2  items-center justify-center'>
        <svg className="animate-bounce w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <Button
      className={buttonVariants({ className: 'capitalize', variant: 'secondary' })}
      onClick={handleGoBack}
    >
      Back Home
    </Button>
      </div>
    </div>
  )
}

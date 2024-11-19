import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center'>
        <h1>404 - Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link href="/"></Link>
    </div>
  )
}

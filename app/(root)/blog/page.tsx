import Blogs from '@/components/shared/blog/blogs'
import React from 'react'
import { blogs } from '@/data/projects' 

export default async function BlogPage() {

// // create a fetch
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
//   const data = await response.json()

//   // map through the data and return the Blog component for each post

  return (
    <div>
      <Blogs data={blogs}/>
    </div>
  )
}

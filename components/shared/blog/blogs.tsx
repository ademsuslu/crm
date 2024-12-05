import React from 'react'
import BlogItems from './blog-items'
import { blogs } from '@/data/projects'

const Blogs = () => {
  return (
    <div>
        {blogs.map((blogItem,index:number) => {
                return    <BlogItems key={index} data={blogItem} />
        }
        )}
    </div>
  )
}

export default Blogs
import React from 'react'
import BlogItems from './blog-items'

const Blogs = () => {
  return (
    <div>
        {[1,2].map((blogItem,index) =>(
                    <BlogItems key={index} data={blogItem} />
        ))}
    </div>
  )
}

export default Blogs
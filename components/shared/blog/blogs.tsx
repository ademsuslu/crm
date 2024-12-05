import React from 'react'
import BlogItems from './blog-items'



interface Props {
    data: {
        _id: number;
        title: string;
        desc: string;
        img: string;
        tags: string[];
        link: string;
        createdAt: string;
        updatedAt: string;
    }[]
}
const Blogs: React.FC<Props> = ({ data }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {data.map((blogItem, index: number) => {
                return <BlogItems key={index} data={blogItem} />
            }
            )}
        </div>
    )
}

export default Blogs
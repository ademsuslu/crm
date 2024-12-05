import React from 'react'
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
    }
}

const BlogItems:React.FC<Props> = ({data}) => {
  return (
    <div className='bg-red-500 rounded'>{data.title}</div>
  )
}

export default BlogItems
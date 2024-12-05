import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsCalendarPlus } from "react-icons/bs";

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

const BlogItems: React.FC<Props> = ({ data }) => {
    return (
        <Link className='border border-white shadow-sm rounded-md p-1' href={`blog/${data.title}`}>
            <div className="aspect-[800/600] overflow-hidden rounded-md ">
                <div className=''>
                    <Image src={data.img} alt={data.title} loading="lazy" width={800} height={600} decoding="async" data-nimg="1" />
                </div>
            </div>
            <h2 className="mt-1 line-clamp-2 text-balance font-medium capitalize leading-tight">{data.title}</h2>
            <p className="mt-1 flex items-center text-xs leading-none text-muted-foreground">
             <BsCalendarPlus className='w-3 h-3 mr-2'/>   {data.createdAt}
            </p>
        </Link>
    )
}

export default BlogItems
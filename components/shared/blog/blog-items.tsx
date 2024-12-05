"use client"
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
    },

}

const BlogItems: React.FC<Props> = ({ data }) => {
    return (
        <div className="max-w-xs w-full group/card">
            <div
                className={cn(
                    " overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                )}
                style={{
                    backgroundImage: `url(${data.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {data.title}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        {data.createdAt}
                    </p>
                </div>
                <Link className={buttonVariants({
                    variant:"outline",
                    className:"underline z-20 font-bold",
                })} href={`/blog/${data.title}`}>
                    Read More
                </Link>
            </div>
        </div>

    )
}

export default BlogItems
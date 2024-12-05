import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ title: string }>
}) {
  const title = (await params).title
  //   const response = await fetch(`${process.env.NEXT_API_URL}/blogs/${title}`, { cache: 'no-store' })
  //   const data = await response.json()
  //   console.log(data)
  return (
    <div className=" mx-auto  gap-2">
      <div className="mt-6"></div>
      <div className=" w-full">
        <div className=" p-0 m-0">
          <Link className={buttonVariants({ className: "inline-flex items-start justify-start" })} href="/blog"> <FaChevronLeft className="w-4 h-4 ml-2" />Blog</Link>
        </div>
      <div className="mt-10"></div>
        <h1>{title}</h1>
      <div className=" relative max-w-[768px]">

       <Image fill style={{objectFit:"contain"}} src="https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
        <span >

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed laudantium dolorem id, a voluptas illo.
        </span>
      </div>
    </div>

  )
} 
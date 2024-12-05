import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
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
  return (<div className="flex flex-col items-center justify-center  gap-2">
    <div>
      <Link className={buttonVariants({className:"inline-flex"})} href="/blog"> <FaChevronLeft className="w-4 h-4 ml-2" />Blog</Link>
    </div>
   {title}

  </div>)
}
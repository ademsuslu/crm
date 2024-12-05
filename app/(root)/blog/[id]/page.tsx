
export default async function BlogDetails({
  params,
}: {
  params: Promise<{ title: string }>
}) {
  const title = (await params).title
  const response = await fetch(`${process.env.NEXT_API_URL}/blogs/${title}`, { cache: 'no-store' })
  const data = await response.json()
  console.log(data)
  return (<div className="flex flex-col justify-between items-center  gap-2">
   

  </div>)
}
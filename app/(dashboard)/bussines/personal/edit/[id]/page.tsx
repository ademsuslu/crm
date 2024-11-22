import { PersonalEdit } from "@/components/shared/forms/personal/personal-edit"

export default async function PersonalEditPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/employees/${id}`,{ cache: 'no-store' })
  const data = await response.json()
  
  const buss = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/businesses`,{ cache: 'no-store' })
  const bussinesData = await buss.json()

  return <div className="flex flex-col justify-between items-center  gap-2">
    {/* <div className="flex w-full justify-between gap-2">
      <Link href={"/customer"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="customer" data={data} />
    </div> */}
    <div className="w-full">
  
       <PersonalEdit bussines={bussinesData} data={data}/>
    </div>

  </div>
}

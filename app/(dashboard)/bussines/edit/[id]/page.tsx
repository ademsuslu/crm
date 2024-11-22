import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { BussinesEdit } from "@/components/shared/forms/bussines/bussines-edit-form"
export default async function BussinesrDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/businesses/${id}`,{ cache: 'no-store' })
  const data = await response.json()

  return <div className="flex flex-col justify-between items-center  gap-2">
     <div className="flex w-full justify-between gap-2">
      <Link href={"/bussines"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="bussines" id={id}/>
    </div>
    <div className="w-full">
       <BussinesEdit data={data}/>
    </div>

  </div>
}


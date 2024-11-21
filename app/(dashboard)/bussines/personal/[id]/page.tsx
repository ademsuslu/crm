import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default async function PersonalDetails({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const response = await fetch(`${process.env.NEXT_API_URL}/employees/${id}`,{ cache: 'no-store' })
    const data = await response.json()
  
    return <div className="flex flex-col justify-between items-center  gap-2">
     <div className="flex w-full justify-between gap-2">
        <Link href={"/bussines/personal"} className={buttonVariants({})}>Back</Link>
        <ButtonsExport type="personal" data={data} />
      </div> 
      <div className="w-full">
      Personal
        {
          data.name
        }
        {/* <CustomerEditForm data={data}/> */}
      </div>
  
    </div>
  }
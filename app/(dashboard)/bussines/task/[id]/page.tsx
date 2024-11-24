import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"


export default async function BussinesDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/tasks/${id}`, { cache: 'no-store' })
  const data = await response.json()
  console.log(data)
  return (<div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/bussines"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="bussines" id={id} />
    </div>
    <div className="w-full">
      {
        data.map((item: any) => item.name)
      }
      {id}
    </div>


  </div>)
}
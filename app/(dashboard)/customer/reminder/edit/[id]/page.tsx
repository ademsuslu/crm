import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import ReminderEditForm from "@/components/shared/reminder/reminder-edit-form"
export default async function CustomerDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
   const url = process.env.NEXT_API_URL || "http://localhost:5000/api"
  const response = await fetch(`${url}/reminder/${id}`,{ cache: 'no-store' })
  const data = await response.json()

  return <div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/customer/reminder"} className={buttonVariants({})}>Back</Link>
       <ButtonsExport  type="reminder" />
    </div>
    <div className="w-full">
    <ReminderEditForm data={data?.data} />
    </div>
  </div>
}


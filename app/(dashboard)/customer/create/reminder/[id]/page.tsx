import ButtonsExport from "@/components/shared/detay/buttons-export"
import { ReminderForm } from "@/components/shared/reminder/reminder-form"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default async function CustomerCreateReminder({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/customers/${id}`, { cache: 'no-cache' })
  const data = await response.json()

  return <div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/customer"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport data={data} />
    </div>
    <div className="w-full">
      <ReminderForm />
    </div>

  </div>
}

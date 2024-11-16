import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default async function CustomerCreateReminder({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/reminder/${id}`, { cache: 'no-cache' })
  const data = await response.json()

  return <div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/customer/reminder"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport id={id} type="reminder" />
    </div>
    <div className="w-full">
      <div className="flex flex-col">
        <div>
          Sender Mail:
          <span className="ml-2">{data.data.senderMail}</span>
        </div>
        <div>
          Receiver Mail
          <span className="ml-2">{data.data.receiverMail}</span>
        </div>
        <div>
          Send Time:
          <span className="ml-2">{new Date(data.data?.sendTime).toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</span>
        </div>
        <div>
          Content:
          <span className="ml-2">{data.data.content}</span>
        </div>
      </div>
    </div>

  </div>
}


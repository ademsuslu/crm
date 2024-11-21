import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import  CustomerEditForm  from "@/components/shared/forms/customer/customer-edit-form"
export default async function CustomerDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/customers/${id}`,{ cache: 'no-store' })
  const data = await response.json()

  return <div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/customer"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="customer" data={data} />
    </div>
    <div className="w-full">
      <CustomerEditForm data={data}/>
    </div>

  </div>
}


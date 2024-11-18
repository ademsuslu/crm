import DeleteOpportunityButton from "@/components/shared/delete-oppornuty-button"
import { OpportunityEdit } from "@/components/shared/forms/oppornuty-edit-form"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

export default async function OppornutyDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const id = (await params).id
   const url = `https://crm-backend-production-e80f.up.railway.app/api/opportunity`
  const response = await fetch(`${url}/${id}`, { cache: 'no-store' })
  const data = await response.json()

const usersData = await fetch(`${"https://crm-backend-production-e80f.up.railway.app/api/users"}`, { cache:"no-store" })
const users = await usersData.json()
  
  return <div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/opportunity"} className={buttonVariants({})}>Back</Link>
         <DeleteOpportunityButton id={id} />
    </div>
    <div className="w-full space-y-3" >
    <OpportunityEdit data={data} users={users} />
    </div>
  </div>
}


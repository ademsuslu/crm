import BillingDetay from "@/components/shared/billing/billing-detay";
import { BillingFormComponent } from "@/components/shared/forms/billing/billing-form";



export default async function SelectedPlandDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/plans/${id}`,{cache:"no-store"})
  const data = await response.json()
console.log("********************************")
console.log(data)

  return <div className=" w-full  gap-4 grid grid-cols-1 md:grid-cols-2 justify-between p-6">
          <div className="border p-6 border-gray-300 shadow-lg rounded-lg bg-gray-900">
              <BillingFormComponent />
          </div>
          <BillingDetay  planData={data}/>
        </div>
}
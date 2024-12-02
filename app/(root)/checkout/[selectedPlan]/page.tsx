import BillingDetay from "@/components/shared/billing/billing-detay";
import { BillingFormComponent } from "@/components/shared/forms/billing/billing-form";

import { plans } from "@/data/projects"

export default async function BussinesDetails({
  params,
}: {
  params: Promise<{ selectedPlan: string }>
}) {
  const selectedPlan = (await params).selectedPlan
  const planData = plans.find(pland => pland.plan === selectedPlan)

 

  return <div className=" w-full  gap-4 grid grid-cols-1 md:grid-cols-2 justify-between p-6">
        <div className="border p-6 border-gray-300 shadow-lg rounded-lg bg-gray-900">
            <BillingFormComponent/>
        </div>
        <BillingDetay  planData={planData}/>

  </div>
}
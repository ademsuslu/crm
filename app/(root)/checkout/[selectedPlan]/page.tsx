import { plans } from "@/data/projects"

export default async function BussinesDetails({
    params,
  }: {
    params: Promise<{ selectedPlan: string }>
  }) {
    const selectedPlan = (await params).selectedPlan
const planData= plans.find(pland => pland.plan === selectedPlan)

    
return <div>
{planData?.price}
</div> 
}
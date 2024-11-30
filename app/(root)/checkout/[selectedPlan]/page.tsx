export default async function BussinesDetails({
    params,
  }: {
    params: Promise<{ selectedPlan: string }>
  }) {
    const selectedPlan = (await params).selectedPlan
return <div>{selectedPlan}</div> 
}
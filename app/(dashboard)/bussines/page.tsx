import DataTableBussines from "@/components/shared/datatables/bussines/DataTableBussines"

export default async function BussinesPage (){
    const response =  await fetch(`${process.env.NEXT_API_URL}/businesses`,{cache:"no-store"})
    const data = await response.json()
    return <div>
        <DataTableBussines data={data} />
    </div>
}   
import DataTableBussines from "@/components/shared/DataTableBussines"

export default async function BussinesPage (){
    const response =  await fetch(`${process.env.NEXT_API_URL}/businesses`)
    const data = await response.json()
    return <div>
        <DataTableBussines data={data} />
    </div>
}   
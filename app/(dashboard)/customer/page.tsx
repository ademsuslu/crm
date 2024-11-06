import { DataTableDemo } from "@/components/shared/DataTable"

export default async function CustomerPage(){
    const response = await fetch(`${process.env.NEXT_API_URL}/customers`)
    const data = await response.json()
    console.log(data)
    return <div>
        <DataTableDemo/>
    </div>
}
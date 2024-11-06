import { Suspense } from 'react'
import { DataTableDemo } from "@/components/shared/DataTable"

export default async function CustomerPage(){
    const response = await fetch(`${process.env.NEXT_API_URL}/customers`)
    const data = await response.json()
    console.log(data)
    return <div className="w-full">
         <Suspense fallback={<p>Loading feed...</p>}>
            <DataTableDemo />
         </Suspense>
    </div>
}
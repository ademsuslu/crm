import { Suspense } from 'react'
import DataTableDemo  from "@/components/shared/DataTable"

export default async function CustomerPage(){
    
        const response = await fetch(`${process.env.NEXT_API_URL}/customers`,{ cache: 'no-store' });
        const data = await response.json();

    return <div className="w-full">
         <Suspense fallback={<p>Loading feed...</p>}>
        {
            data.lenght > 0 ? <DataTableDemo data={data} /> : <div className='w-full h-full flex justify-center align-center'>
                <h1 className='text-xl font-mono'>Customer notfound</h1>
            </div>
        }
         </Suspense>
    </div>
}
import { Suspense } from 'react'
import DataTableDemo  from "@/components/shared/DataTable"
import TableSkeleton from '@/components/shared/skeletons/table-skeleton';

export default async function CustomerPage(){
    const url = process.env.NEXT_API_URL || "http://localhost:5000/api/customers" 
        const response = await fetch(`${url}/customers`,{ cache: 'no-cache' });
        const data = await response.json();
    return <div className="w-full">
       <Suspense fallback={<TableSkeleton/>}>
         <DataTableDemo data={data} />  
       </Suspense> 
        
    </div>
}
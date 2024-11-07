import { Suspense } from 'react'
import DataTableDemo  from "@/components/shared/DataTable"
import { Customer } from '@/types/customer/model';

export default async function CustomerPage(){
    const response = await fetch(`${process.env.NEXT_API_URL}/customers`);
    const data: Customer[] = await response.json();

    return <div className="w-full">
         <Suspense fallback={<p>Loading feed...</p>}>
            <DataTableDemo data={data} />
         </Suspense>
    </div>
}
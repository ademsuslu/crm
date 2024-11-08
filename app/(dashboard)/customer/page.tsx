import { Suspense } from 'react'
import DataTableDemo  from "@/components/shared/DataTable"
import SearchComponent from '@/components/shared/detay/search';

export default async function CustomerPage(){
    
        const response = await fetch(`${process.env.NEXT_API_URL}/customers`,{ cache: 'no-store' });
        const data = await response.json();

    return <div className="w-full">
        
       <Suspense fallback={<p>Loading feed...</p>}>
        <DataTableDemo data={data} />  
       </Suspense> 
       <SearchComponent />
        
    </div>
}
import KanbanTable from '@/components/shared/drag_drop/Tables'
import React from 'react'


export default async function OpportunityPage() {
  const url = "https://crm-backend-production-e80f.up.railway.app/api";
  const response = await fetch(`${url}/opportunity`,{ cache: 'no-cache' });
  const data = await response.json();

  return (
    <div>
        <KanbanTable  data={data} />
    </div>
  )
}

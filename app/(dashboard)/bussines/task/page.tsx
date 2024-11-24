import TaskTable from '@/components/shared/datatables/task/task-table'
import React from 'react'

export default async function TaskPage() {
    const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/tasks`, { cache: 'no-store' })
    const data = await response.json()
  return (
    <div>
      <TaskTable data={data} />
    </div>
  )
}

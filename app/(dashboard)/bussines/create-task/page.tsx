import { TaskCreate } from '@/components/shared/forms/task/task-form'
import React from 'react'

export default  async function CreateTaskPage() {
  const response = await fetch(`${'https://crm-backend-production-e80f.up.railway.app/api'}/employees`,{
    cache:"no-store"
})
const data = await response.json()
  return (
    <div>
              <TaskCreate personal={data} />
    </div>
  )
}

import React from 'react'

export default async function TaskPage() {
    const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/tasks`, { cache: 'no-store' })
    const data = await response.json()
    console.log(data)
  return (
    <div>TaskPage</div>
  )
}

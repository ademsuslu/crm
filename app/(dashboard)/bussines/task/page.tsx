import React from 'react'

export default async function TaskPage() {
    const response = await fetch(`${process.env.NEXT_API_URL}/tasks/`, { cache: 'no-store' })
    const data = await response.json()
    console.log(data)
  return (
    <div>TaskPage</div>
  )
}

import Cards from '@/components/shared/dashboard/cards'
import DashboardCharts from '@/components/shared/dashboard/dashboard-charts';
import React from 'react'

export const metadata = {
  title: 'Crm Dashboard'
};


export default function DashboardPage() {
  return (
  <div className="space-y-2">
         <Cards/>
       <DashboardCharts/>
  </div>
     
  )
}

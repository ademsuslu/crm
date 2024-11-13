import Cards from '@/components/shared/dashboard/cards'
import DashboardCharts from '@/components/shared/dashboard/dashboard-charts';
import React from 'react'

export const metadata = {
  title: 'Dashboard : Overview'
};

const DashboardPage = () => {
  return (
    <div className='space-y-4'>
      <Cards/>
      <DashboardCharts/>
    </div>
  )
}

export default DashboardPage
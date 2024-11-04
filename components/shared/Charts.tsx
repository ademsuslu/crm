import React from 'react'
import { LineCharts } from './LineChart'
import { SpiderChart } from './SpiderChart'
import { PieCharts } from './PieCharts'

const Charts = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around w-full '>
        <SpiderChart/>
        <LineCharts/>
        <PieCharts/>
    </div>
  )
}

export default Charts
import React from 'react'
import { LineCharts } from './LineChart'
import { SpiderChart } from './SpiderChart'

const Charts = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around w-full '>
        <LineCharts/>
        <SpiderChart/>
    </div>
  )
}

export default Charts
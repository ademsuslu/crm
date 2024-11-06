"use client"
import React from 'react'
import { Customer } from '../DataTable'
import { ExportToCSV } from '@/utils/ExportToCSV'

const ButtonsExport = (data:Customer) => {


    
     const handleCvs =()=>{
         ExportToCSV(data)
       }
          
  return (
    <div>
        <button onClick={handleCvs}>Export Cvs</button>
          {/* <button type="button" onClick={handleCvs}>Export to CSV</button> */}
      
    </div>
  )
}

export default ButtonsExport
"use client"
import React from 'react'
import { ExportToExcel } from '@/utils/ExportToCSV'
import { Button } from '@/components/ui/button'
import { Customer } from '@/types/model'

const ButtonsExport = (data:Customer) => {



     const handleCvs =(data:Customer)=>{
        ExportToExcel(data)
       }
          
  return (
    <div>
        <Button  onClick={()=>handleCvs(data)}>Export Cvs</Button>
          {/* <button type="button" onClick={handleCvs}>Export to CSV</button> */}
      
    </div>
  )
}

export default ButtonsExport
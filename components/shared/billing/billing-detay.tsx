"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FaCheckCircle, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { Plans } from '@/types/plans/model';


interface planDataProps {
    planData:Plans
}

const BillingDetay:React.FC<planDataProps> = ({planData}) => {
    const dateObj = new Date()
    const newDate = dateObj.toLocaleDateString('pt-PT')
    // how to get newDate to 30day after
    const newDateEnd = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-PT')
  return (
    <Card>
    <Card className=" border border-gray-300 shadow-lg rounded-lg bg-gray-900 text-white">
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-bold flex items-center">
          {planData.plan} <FaCheckCircle className="ml-2 text-green-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside">
            {planData?.features?.map((item: string, index: number) => (
              <li key={index} className="text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <p>
            Start Date: <span className="text-gray-400">{newDate}</span>
          </p>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-2 text-red-500" />
          <p>
            End Date: <span className="text-gray-400">{newDateEnd}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 border-t border-gray-700 flex justify-between items-center">
        <p className="text-lg font-semibold flex items-center">
          <FaDollarSign className="mr-2 text-yellow-500" />
          {planData?.price}
        </p>
      </CardFooter>
    </Card>
  </Card>
  )
}

export default BillingDetay
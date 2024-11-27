"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { MdOutlineDelete } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import { IoAlertOutline } from "react-icons/io5";

import { toast } from "@/hooks/use-toast"

interface Props {
  id: string;
}
const DeleteOpportunityButton: React.FC<Props> = (id) => {
  const router = useRouter()
  const handleDelete = async () => {
    try {
      const url = `https://crm-backend-production-e80f.up.railway.app/api/opportunity/${id.id}`
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await response.json()
      toast({ description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500' /></div> })
    } catch (error) {
      toast({ description: <div className="inline-flex items-center">Delete Unsuccess <IoAlertOutline className='w-6 h-6 ml-2 text-red-500' /></div> })
    }
    router.refresh()
    router.back()
  }

  return (
    <Button onClick={() => handleDelete()} size={"icon"} variant={"destructive"} className="border border-white shadow-md">

      <MdOutlineDelete className="w-4 h-4 " />
    </Button>
  )
}

export default DeleteOpportunityButton
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Opportunity } from "@/types/Opportunity/model";
import { useStoreModal } from "@/hooks/use-store-modal";

import { GrFormEdit } from "react-icons/gr";
import { MdOutlineAddBox, MdOutlineDragIndicator } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { IoAlertOutline } from "react-icons/io5";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { TiTick } from "react-icons/ti";
import Link from "next/link";



// Aşamalar için sabit liste
const stages = ["İletişim", "Teklif", "Görüşme", "Kapalı", "Kazandı", "Kaybetti"] as const;

// Tip tanımları
type Stage = typeof stages[number];

interface Props {
  data: Opportunity[];
}

const KanbanTable: React.FC<Props> = ({ data }) => {


  const router = useRouter()
  const storeModal = useStoreModal()
  const [opportunities, setOpportunities] = useState<Opportunity[]>(data);

  // PUT isteği gönderme fonksiyonu
  const updateStage = async (id: string, newStage: Stage) => {
    try {

      const url = `https://crm-backend-production-e80f.up.railway.app/api/opportunity/${id}`
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stage: newStage })
      })
      const res = await response.json()
      console.log(`Fırsat ${id}, ${newStage} aşamasına taşındı.`);
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  // Fırsatın aşamasını güncelleme
  const onDrop = async (event: React.DragEvent<HTMLDivElement>, targetStage: Stage) => {
    const opportunityId = event.dataTransfer.getData("text/plain"); // ID string olarak taşınır

    // Frontend'de güncelleme
    setOpportunities((prev) =>
      prev.map((opp) =>
        opp._id === opportunityId ? { ...opp, stage: targetStage } : opp
      )
    );

    // Backend'e güncelleme isteği gönderme
    await updateStage(opportunityId, targetStage);
  };
  const handleDelete = async (opportunityId: string) => {
    try {
      const url = `https://crm-backend-production-e80f.up.railway.app/api/opportunity/${opportunityId}`
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
  }



  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="">
        <Link href={"/opportunity/create"} className={buttonVariants({
          size: 'sm',
          variant: 'outline',
        })}>
          Add to cart  <MdOutlineAddBox className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="flex   gap-4 p-4 scrollbar overflow-x-scroll max-w-[1070px] app-scrollbar app-scrollbar--dark space-x-4  border rounded	">
        {stages.map((stage) => (
          <div
            key={stage}
            className="flex-1  p-4  bg-secondary-foreground rounded-lg shadow-md"
            onDragOver={(e) => e.preventDefault()} // Drop işlemini etkinleştirme
            onDrop={(e) => onDrop(e, stage)} // Bırakma sırasında çağırılan fonksiyon
          >
            <h2 className="text-lg font-bold mb-4 text-gray-700">{stage}</h2>
            <div className="space-y-4  w-[200px] ">
              {opportunities
                .filter((opp) => opp.stage === stage)
                .map((opp) => (
                  <motion.div
                    key={opp._id}
                    className="p-4 flex items-start justify-start text-sm text-black bg-white rounded-lg shadow-sm cursor-grab"
                    draggable
                    onDragStart={(e: any) => {
                      e.dataTransfer.setData("text/plain", opp._id);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MdOutlineDragIndicator className="w-6 h-6 mr-2" />
                    <div className="flex flex-col w-full gap-2">
                      <p className="text-md font-bold">
                        {opp.name}
                      </p>
                      <p>
                        {opp.assignedTo?.name}
                      </p>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="bg-transparent shadow-none " size={"icon"}>
                          <HiOutlineDotsVertical className="w-6 h-6" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-55 p-3 bg-white">
                        <div className="flex  items-start justify-start gap-2 w-full">
                          <Button onClick={() => handleDelete(opp._id)} size={"icon"} className="border border-white shadow-md">

                            <MdOutlineDelete className="w-4 h-4 " />
                          </Button>
                          <Button size={"icon"} className="border border-white shadow-md">
                            <GrFormEdit className="w-5 h-5" />
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanTable;


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Opportunity } from "@/types/Opportunity/model";

import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineAddBox, MdOutlineDragIndicator } from "react-icons/md";


import { buttonVariants } from "@/components/ui/button";

// Aşamalar için sabit liste
const stages = ["İletişim", "Teklif", "Görüşme", "Kapalı", "Kazandı", "Kaybetti"] as const;

// Tip tanımları
type Stage = typeof stages[number];

interface Props {
  data: Opportunity[];
}

const KanbanTable: React.FC<Props> = ({ data }) => {

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
                    <div className="h-full my-auto">

                    <MdOutlineDragIndicator className="w-6 h-6 mr-2" />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                      <p className="text-md font-bold">
                        {opp.name}
                      </p>
                      <p>
                        {opp.assignedTo?.name}
                      </p>
                    </div>
                    <div className="h-full text-start">

                    <Link href={`/opportunity/${opp._id}`} className={buttonVariants({
                      size: "icon",
                      className:"bg-transparent flex items-start justify-start h-full shadow-none border-none p-0"
                        })} >
                      <CgDetailsMore  className="w-6 h-6" />
                    </Link>
                      </div>
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


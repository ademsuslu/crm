"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Opportunity } from "@/types/Opportunity/model";

// Aşamalar için sabit liste
const stages = ["Görüşme", "Teklif Verildi", "Sözleşme Yapıldı"] as const;

// Tip tanımları
type Stage = typeof stages[number];


// Başlangıç verisi
const initialOpportunities: Opportunity[] = [
  {
    _id: "6738ab78507239385cb71d27",
    name: "Yeni CRM Projesi",
    stage: "Teklif",
    value: 15000,
    assignedTo: {
      _id: "6738aa57507239385cb71d14",
      name: "Adem Süslü",
      email: "ademsuslu9080@gmail.com",
      password: "123456",
      role: "admin",
      createdAt: "2024-11-16T14:21:11.622Z",
      __v: 0
    },
    createdAt: "2024-11-16T14:26:00.744Z",
    updatedAt: "2024-11-16T14:26:00.744Z",
    __v: 0
  },
  {
    _id: "6738ab78507239385cb71d28",
    name: "Yeni CRM Projesi",
    stage: "Teklif",
    value: 15000,
    assignedTo: {
      _id: "6738aa57507239385cb71d14",
      name: "Adem Süslü",
      email: "ademsuslu9080@gmail.com",
      password: "123456",
      role: "admin",
      createdAt: "2024-11-16T14:21:11.622Z",
      __v: 0
    },
    createdAt: "2024-11-16T14:26:00.744Z",
    updatedAt: "2024-11-16T14:26:00.744Z",
    __v: 0
  },
  {
    _id: "6738ab78507239385cb71d29",
    name: "Yeni CRM Projesi",
    stage: "Teklif",
    value: 15000,
    assignedTo: {
      _id: "6738aa57507239385cb71d14",
      name: "Adem Süslü",
      email: "ademsuslu9080@gmail.com",
      password: "123456",
      role: "admin",
      createdAt: "2024-11-16T14:21:11.622Z",
      __v: 0
    },
    createdAt: "2024-11-16T14:26:00.744Z",
    updatedAt: "2024-11-16T14:26:00.744Z",
    __v: 0
  },
  
];

const KanbanTable: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(
    initialOpportunities
  );

  // Fırsatın aşamasını güncelleme
  const onDrop = (event: React.DragEvent<HTMLDivElement>, targetStage: Stage) => {
    const opportunityId = parseInt(event.dataTransfer.getData("text/plain"), 10);
    setOpportunities((prev) =>
      prev.map((opp) =>
        opp?.id === opportunityId ? { ...opp, stage: targetStage } : opp
      )
    );
  };

  return (
    <div className="flex gap-4 p-4">
      {stages.map((stage) => (
        <div
          key={stage}
          className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md"
          onDragOver={(e) => e.preventDefault()} // Drop işlemini etkinleştirme
          onDrop={(e) => onDrop(e, stage)} // Bırakma sırasında çağırılan fonksiyon
        >
          <h2 className="text-lg font-bold mb-4">{stage}</h2>
          <div className="space-y-4">
            {opportunities
              .filter((opp) => opp.stage === stage)
              .map((opp) => (
                <motion.div
                  key={opp.id}
                  className="p-4 bg-white rounded-lg shadow-sm cursor-pointer"
                  draggable // HTML native drag özelliği
                  onDragStart={(e) =>

                    // Fırsatın ID'sini taşı
                    // @ts-ignore
                    e.dataTransfer.setData("text/plain", opp.id.toString())
                  } 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {opp.name}
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanTable;

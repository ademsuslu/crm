"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Opportunity } from "@/types/Opportunity/model";

// Aşamalar için sabit liste
const stages = ["Görüşme", "Teklif Verildi", "Sözleşme Yapıldı"] as const;

// Tip tanımları
type Stage = typeof stages[number];


// Başlangıç verisi


const KanbanTable: React.FC<Opportunity[]> = (data) => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(
    data
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
                  key={opp._id}
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

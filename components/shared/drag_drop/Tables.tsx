"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Opportunity } from "@/types/Opportunity/model";

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

  return (
    <div className="flex gap-4 p-4">
      {stages.map((stage) => (
        <div
          key={stage}
          className="flex-1 bg-gray-500 p-4 rounded-lg shadow-md"
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
                  className="p-4 bg-white rounded-lg shadow-sm cursor-grab"
                  draggable
                  onDragStart={(e: any) => {
                    e.dataTransfer.setData("text/plain", opp._id);
                  }}
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

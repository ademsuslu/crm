"use client";
import React from 'react';
import { ExportToExcel } from '@/utils/ExportToCSV';
import { Button } from '@/components/ui/button';
import { Customer } from '@/types/customer/model';
import { BiSolidFileExport } from "react-icons/bi";
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { TiTick } from "react-icons/ti";


type ButtonsExportProps = {
  data?: Customer
  type?: "reminder" | "customer" | "bussines" | "personal" | "task"
  id?: string
};
const ButtonsExport: React.FC<ButtonsExportProps> = ({ data, type, id }) => {
  const { toast } = useToast()
  const router = useRouter();
  const handleCvs = () => {
    ExportToExcel(data);
  };
  const handleDelete = async () => {
    let ById = id || data?._id;

    console.log("ById")
    console.log(ById)
    let url = "";
    if (type === "customer") {
      url = `https://crm-backend-production-e80f.up.railway.app/api/customers/${ById}`;
    } else if (type === "reminder") {
      url = `https://crm-backend-production-e80f.up.railway.app/api/reminder/${ById}`;
    } else if (type === "bussines") {
      url = `https://crm-backend-production-e80f.up.railway.app/api/businesses/${ById}`;
    }
    else if (type === "personal") {
      url = `https://crm-backend-production-e80f.up.railway.app/api/employees/${ById}`;
    }
    else if (type === "task") {
      url = `https://crm-backend-production-e80f.up.railway.app/api/tasks/${ById}`;
    }

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (!response.ok) {
        toast({
          description: "Silme işlemi başarısız.",
        });
        throw new Error("Bir hata oluştu!");
      }

      toast({
        description: (
          <div className="inline-flex items-center">
            {/* create  type of title */}
            {
              res?.message ? res?.message : "Delete SUCCESS"
            }
            <TiTick className="w-6 h-6 ml-2 text-green-500" />.
          </div>
        ),
      });
      if(type === "task"){
        router.refresh();
        router.back();
      }else{

        router.refresh();
      }
    } catch (error) {
      console.error("Silme işleminde hata:", error);
    }
  };

  return (
    <div className='flex  items-center gap-2 '>
      {type === "customer" &&
        <Button onClick={handleCvs} className='text-sm'>
          <BiSolidFileExport className='w-4 h-4 ml-1' />
        </Button>
      }
      <Button onClick={() => handleDelete()}>
        <AiFillDelete />
      </Button>
    </div>
  );
};

export default ButtonsExport;

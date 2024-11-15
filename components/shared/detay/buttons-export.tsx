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
  data: Customer
type:"reminder"|"customer"
};
const ButtonsExport: React.FC<ButtonsExportProps> = ({ data ,type}) => {
  const { toast } = useToast()
  const router = useRouter();
  const handleCvs = () => {
    ExportToExcel(data);
  };
    const handleDelete = async (id:string) => {
      const url = type !== 'reminder' ? ` ${"https://crm-backend-production-e80f.up.railway.app/api"}/customers/${id} ` :` ${"https://crm-backend-production-e80f.up.railway.app/api"}/reminder/${id}`
      try {
        const response = await fetch(`${url}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          toast({
            description: "Customer not deleted.",
          })
          throw new Error('Bir hata oluştu!');
        }
         toast({
          description: <div className='inline-flex items-center'>{ type  ===  "reminder" ? "Reminder " : "Customer"} deleted <TiTick className='w-6 h-6 ml-2 text-green-500'/>.</div>  ,
        })
        router.refresh();
        router.push( type  === "reminder" ?"/customer/reminder" : "/customer" );
      } catch (error) {
        console.error('Silme işleminde hata:', error);
      }
    };

  

  return (
    <div className='flex  items-center gap-2 '> 
      <Button onClick={handleCvs} className='text-sm'>
        <BiSolidFileExport className='w-4 h-4 ml-1' />
      </Button>
      <Button onClick={()=>handleDelete(data._id)}>
        <AiFillDelete />
       </Button>
    </div>
  );
};

export default ButtonsExport;

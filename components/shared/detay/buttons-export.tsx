"use client";
import React from 'react';
import { ExportToExcel } from '@/utils/ExportToCSV';
import { Button } from '@/components/ui/button';
import { Customer } from '@/types/customer/model';
import { BiSolidFileExport } from "react-icons/bi";
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';


type ButtonsExportProps = {
  data: Customer

};
const ButtonsExport: React.FC<ButtonsExportProps> = ({ data }) => {
  const { toast } = useToast()
  const router = useRouter();
  const handleCvs = () => {
    ExportToExcel(data);
  };
    const handleDelete = async (id:string) => {
      try {
        const response = await fetch(`${"https://crm-backend-production-e80f.up.railway.app/api"}/customers/${id}`, {
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
          description: "Customer deleted.",
        })
        router.refresh();
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

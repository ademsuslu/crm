// components/ButtonsExport.tsx - Export buton bileşeni
"use client";
import React from 'react';
import { ExportToExcel } from '@/utils/ExportToCSV';
import { Button } from '@/components/ui/button';
import { Customer } from '@/types/customer/model';
import { BiSolidFileExport } from "react-icons/bi";
import { Delete } from 'lucide-react';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

type ButtonsExportProps = {
  data: Customer
};

const ButtonsExport: React.FC<ButtonsExportProps> = ({ data }) => {
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
          throw new Error('Bir hata oluştu!');
        }
        console.log("Müşteri başarıyla silindi.");
        alert("Müşteri başarıyla silindi.");
        router.refresh();
      } catch (error) {
        console.error('Silme işleminde hata:', error);
      }
    };

  

  return (
    <div className='flex items-center justify-center gap-2'> 
      <Button onClick={handleCvs} className='text-sm'>
        Export to Excel <BiSolidFileExport className='w-4 h-4 ml-1' />
      </Button>
      <Button onClick={()=>handleDelete(data._id)}>
      Delete <AiFillDelete />
       </Button>
    </div>
  );
};

export default ButtonsExport;

// components/ButtonsExport.tsx - Export buton bileşeni
"use client";
import React from 'react';
import { ExportToExcel } from '@/utils/ExportToCSV';
import { Button } from '@/components/ui/button';
import { Customer } from '@/types/customer/model';
import { BiSolidFileExport } from "react-icons/bi";

type ButtonsExportProps = {
  data: Customer
};

const ButtonsExport: React.FC<ButtonsExportProps> = ({ data }) => {
  const handleCvs = () => {
    ExportToExcel(data);
  };

  return (
    <div> 
      <Button onClick={handleCvs}  >Export to Excel <BiSolidFileExport className='w-4 h-4 ml-1' />
      </Button>
    </div>
  );
};

export default ButtonsExport;

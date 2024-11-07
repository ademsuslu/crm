// components/ButtonsExport.tsx - Export buton bileşeni
"use client";
import React from 'react';
import { ExportToExcel } from '@/utils/ExportToCSV';
import { Button } from '@/components/ui/button';
import { Customer } from '@/types/customer/model';

type ButtonsExportProps = {
  data: Customer[];
};

const ButtonsExport: React.FC<ButtonsExportProps> = ({ data }) => {
  const handleCvs = () => {
    ExportToExcel(data);
  };

  return (
    <div>
      <Button onClick={handleCvs}>Export to Excel</Button>
    </div>
  );
};

export default ButtonsExport;

"use client"
// utils/ExportToCSV.ts - ExportToExcel fonksiyonu
import * as XLSX from "xlsx";
import { Customer } from "@/types/customer/model";

export const ExportToExcel = (data?: Customer) => {
    const headers = ["Adı", "Soyadı", "Cinsiyet", "Müşteri Segmenti", "Telefon", "E-posta"];

    // Müşteri verilerini tablo satırı olarak düzenliyoruz
    const rows = [
        [
            data?.ad,
            data?.soyad,
            data?.cinsiyet,
            data?.segmentasyon?.musteri_segmenti || "",
            data?.iletisim_bilgileri?.telefon || "",
            data?.iletisim_bilgileri?.email || ""
        ]
    ];

    // Başlıkları ve verileri birleştiriyoruz
    const worksheetData = [headers, ...rows];

    // Excel çalışma sayfasını ve kitabını oluşturuyoruz
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Müşteri Verisi");

    // Excel dosyasını indiriyoruz
    XLSX.writeFile(workbook, "musteri_verisi.xlsx");
};

"use client"
import { Customer } from "@/types/model";
import * as XLSX from "xlsx";

export const ExportToExcel = (data: Customer) => {
    const headers = ["Adı", "Soyadı", "Cinsiyet", "Müşteri Segmenti", "Telefon", "E-posta"];
    // Verileri tablo formatında oluşturuyoruz
    const rows = [
        [
            data.ad,
            data.soyad,
            data.cinsiyet,
            data.segmentasyon?.musteri_segmenti || "",
            data.iletisim_bilgileri?.telefon || "",
            data.iletisim_bilgileri?.email || ""
        ]
    ];

    // Verileri `headers` ile birleştiriyoruz
    const worksheetData = [headers, ...rows];

    // `worksheet` ve `workbook` oluşturma
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Müşteri Verisi");

    // Excel dosyasını oluşturup indiriyoruz
    XLSX.writeFile(workbook, "musteri_verisi.xlsx");
};
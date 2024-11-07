"use client"

import * as XLSX from "xlsx";
import { Customer } from "@/types/customer/model";

export const ExportToExcel = (data: Customer[]) => {
    const headers = ["Adı", "Soyadı", "Cinsiyet", "Müşteri Segmenti", "Telefon", "E-posta"];
    console.log("data");
    console.log(data);
    // Her bir müşteri kaydını `rows` içine ekliyoruz
    const rows = data.map((customer) => [
        customer.ad,
        customer.soyad,
        customer.cinsiyet,
        customer.segmentasyon?.musteri_segmenti || "",
        customer.iletisim_bilgileri?.telefon || "",
        customer.iletisim_bilgileri?.email || ""
    ]);

    // Başlıkları ve verileri birleştiriyoruz
    const worksheetData = [headers, ...rows];

    // Excel çalışma sayfasını ve kitabını oluşturuyoruz
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Müşteri Verisi");

    // Excel dosyasını indiriyoruz
    XLSX.writeFile(workbook, "musteri_verisi.xlsx");
};

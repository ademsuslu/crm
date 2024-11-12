"use client"

import { z } from "zod"


export const formSchema = z.object({
    ad: z.string().min(2, "Ad en az 2 karakter olmalıdır").max(50, "Ad en fazla 50 karakter olmalıdır"),
    soyad: z.string().min(2, "Soyad en az 2 karakter olmalıdır").max(50, "Soyad en fazla 50 karakter olmalıdır"),
    cinsiyet: z.enum(['Erkek', 'Kadın', 'Diğer']),
    dogum_tarihi: z.date().optional(),

    iletisim_bilgileri: z.object({
        telefon: z.string({ coerce: true }).min(10, "Telefon numarası en az 10 karakter olmalıdır").max(15, "Telefon numarası en fazla 15 karakter olmalıdır"),
        email: z.string().email("Geçerli bir e-posta adresi girin").optional(),
        adres: z.object({
            sokak: z.string().optional(),
            sehir: z.string().optional(),
            posta_kodu: z.string().optional(),
            ulke: z.string().optional(),
        }).optional(),
        sosyal_medya: z.object({
            twitter: z.string().url().optional(),
            linkedin: z.string().url().optional(),
        }).optional(),
    }),

    sirket_bilgileri: z.object({
        sirket_adi: z.string().optional(),
        gorev: z.string().optional(),
        sirket_adresi: z.object({
            sokak: z.string().optional(),
            sehir: z.string().optional(),
            posta_kodu: z.string().optional(),
            ulke: z.string().optional(),
        }).optional(),
    }).optional(),

    satin_alma_gecmisi: z.array(
        z.object({
            siparis_id: z.string(),
            urun: z.string(),
            miktar: z.number().min(1, "Miktar en az 1 olmalıdır"),
            toplam_fiyat: z.number().min(0, "Toplam fiyat negatif olamaz"),
            tarih: z.date(),
        })
    ).optional(),

    segmentasyon: z.object({
        musteri_segmenti: z.enum(['Bireysel', 'Kurumsal', 'VIP']).optional(),
        ilgi_alanlari: z.string(),
        sadakat_durumu: z.enum(['Yeni Müşteri', 'Sadık Müşteri', 'Potansiyel Müşteri']).optional(),
    }).optional(),

    iliskiler: z.object({
        asama: z.enum(['Yeni', 'Mevcut Müşteri', 'Potansiyel Müşteri']).optional(),
        notlar: z.string().optional(),
    }).optional(),

    pazarlama_izinleri: z.object({
        email_izni: z.boolean().optional(),
        sms_izni: z.boolean().optional(),
        tercih_edilen_kanal: z.enum(['Email', 'SMS', 'Telefon']).optional(),
    }).optional(),
});

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/types/form/customerSchema"


export function CustomerCreateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ad: "",
      soyad: "",
      cinsiyet: "Erkek", // Varsayılan değerler, isteğe göre ayarlanabilir
      iletisim_bilgileri: {
        telefon: "",
        email: "",
        adres: {
          sokak: "",
          sehir: "",
          posta_kodu: "",
          ulke: "",
        },
        sosyal_medya: {
          twitter: "",
          linkedin: "",
        },
      },
      sirket_bilgileri: {
        sirket_adi: "",
        gorev: "",
        sirket_adresi: {
          sokak: "",
          sehir: "",
          posta_kodu: "",
          ulke: "",
        },
      },
      segmentasyon: {
        musteri_segmenti: "Bireysel",
        ilgi_alanlari: [],
        sadakat_durumu: "Yeni Müşteri",
      },
      pazarlama_izinleri: {
        email_izni: false,
        sms_izni: false,
        tercih_edilen_kanal: "Email",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Ad Alanı */}
        <FormField
          control={form.control}
          name="ad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ad</FormLabel>
              <FormControl>
                <Input placeholder="Adınızı girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Soyad Alanı */}
        <FormField
          control={form.control}
          name="soyad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Soyad</FormLabel>
              <FormControl>
                <Input placeholder="Soyadınızı girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cinsiyet Alanı */}
        <FormField
          control={form.control}
          name="cinsiyet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cinsiyet</FormLabel>
              <FormControl>
                <select {...field}>
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Telefon Alanı */}
        <FormField
          control={form.control}
          name="iletisim_bilgileri.telefon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input placeholder="Telefon numaranızı girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Alanı */}
        <FormField
          control={form.control}
          name="iletisim_bilgileri.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="E-posta adresinizi girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* İletişim Adresi Alanı */}
        <FormField
          control={form.control}
          name="iletisim_bilgileri.adres.sokak"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sokak</FormLabel>
              <FormControl>
                <Input placeholder="Sokak adresinizi girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Daha Fazla Alan Eklenebilir */}

        <Button type="submit">Gönder</Button>
      </form>
    </Form>
  );
}

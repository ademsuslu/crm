"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { formSchema } from "@/types/form/customerSchema"
import { Switch } from "../ui/switch"


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
          sokak: "",// okay,
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
        ilgi_alanlari: "", 
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
            <FormLabel>Gender</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Kadın">Kadın</SelectItem>
                <SelectItem value="Erkek">Erkek</SelectItem>
                <SelectItem value="Diğer">Diğer</SelectItem>
              </SelectContent>
            </Select>
          
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
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Telefon numaranızı girin" {...field} />
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
        <FormField
          control={form.control}
          name="iletisim_bilgileri.adres.sehir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sehir</FormLabel>
              <FormControl>
                <Input placeholder="Enter your city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="iletisim_bilgileri.adres.posta_kodu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your zipcode  girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="iletisim_bilgileri.adres.ulke"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your Country  girin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* social media */}
        <FormField
          control={form.control}
          name="iletisim_bilgileri.sosyal_medya.twitter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Twitter</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your X address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="iletisim_bilgileri.sosyal_medya.linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your Linkedin address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
{/* company info */}
        <FormField
          control={form.control}
          name="sirket_bilgileri.sirket_adi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sirket_bilgileri.gorev"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Missinon</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Mission" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sirket_bilgileri.sirket_adresi.sokak"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company  Districk</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Company  distric" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sirket_bilgileri.sirket_adresi.sehir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company City</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Company  city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sirket_bilgileri.sirket_adresi.posta_kodu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company zip kode</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter Company zipcode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sirket_bilgileri.sirket_adresi.ulke"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Country</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter Company Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Segmentasyon */}
        <FormField
          control={form.control}
          name="segmentasyon.musteri_segmenti"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer segmentasyon</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter customer segmentasyon" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="segmentasyon.ilgi_alanlari"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Hobbies</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter customer hobbies" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="segmentasyon.sadakat_durumu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Hobbies</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter customer loyalty status" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
{/* pazarlama izinleri */}
       <FormField
          control={form.control}
          name="pazarlama_izinleri.email_izni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email permissions</FormLabel>
              <FormControl>
              <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="pazarlama_izinleri.sms_izni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sms permissions</FormLabel>
              <FormControl>
              <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="pazarlama_izinleri.tercih_edilen_kanal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Access Channel</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter customer loyalty status" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Gönder</Button>
      </form>
    </Form>
  );
}

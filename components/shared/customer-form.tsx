"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {  Popover,
    PopoverContent,
    PopoverTrigger, } from "../ui/popover"
    import { Calendar } from "@/components/ui/calendar"
    import { Input } from "@/components/ui/input"
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

import { formSchema } from "@/types/form/customerSchema"
import { Switch } from "../ui/switch"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { TiTick } from "react-icons/ti"

import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function CustomerCreateForm() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ad: "",
            soyad: "",
            cinsiyet: "Erkek", // Varsayılan değerler, isteğe göre ayarlanabilir
            dogum_tarihi: new Date(),
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
            iliskiler: {
                asama: "Yeni",
                notlar: "",
            },
            pazarlama_izinleri: {
                email_izni: true,
                sms_izni: true,
                tercih_edilen_kanal: "Email",
            },
        },
    });

  async  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
     const url = `https://crm-backend-production-e80f.up.railway.app/api/customers`
      const response = await fetch(url,{
         method: 'POST',
         cache:"no-cache",
         headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
      })  
     const res = await response.json()
     toast({description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500'/></div>})
     router.push("/customer")   
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Tabs defaultValue="Personal" className="">
                    <TabsList
                        className="items-start justify-start rounded-md bg-muted p-1 gap-3 text-muted-foreground grid h-auto min-h-5 w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-6">
                        <TabsTrigger className="text-sm  p-0 w-full" value="Personal">Personal</TabsTrigger>
                        <TabsTrigger className="text-sm  p-0 w-full" value="Contact">Contact</TabsTrigger>
                        <TabsTrigger className="text-sm  p-0 w-full" value="Company">Company</TabsTrigger>
                        <TabsTrigger className="text-sm  p-0 w-full" value="segmentasyon">Segmentasyon</TabsTrigger>
                        <TabsTrigger className="text-sm  p-0 w-full" value="relations">Relations</TabsTrigger>
                        <TabsTrigger className="text-sm  p-0 w-full" value="marketing">Marketing</TabsTrigger>
                    </TabsList>
                    <TabsContent className="grid grid-cols-1 md:grid-cols-4   gap-2 " value="Personal">
                        <FormField
                            control={form.control}
                            name="ad"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ad</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Name" className="" {...field} />
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
                                        <Input placeholder="Enter Surname" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dogum_tarihi"
                            render={({ field }) => (
                                <FormItem className="flex flex-col mt-2.5">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl className="">
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-[240px] pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                
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
                                                <SelectValue placeholder="Select a gender" />
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
                    </TabsContent>
                    <TabsContent  className="grid grid-cols-1 md:grid-cols-3  gap-2 " value="Contact">
                        <FormField
                            control={form.control}
                            name="iletisim_bilgileri.telefon"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter phone number" {...field} />
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
                                        <Input placeholder="Enter e posta" {...field} />
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
                                    <FormLabel>Districk</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter districk" {...field} />
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
                                    <FormLabel>City</FormLabel>
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
                                        <Input type="number" placeholder="Enter your zipcode " {...field} />
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
                                        <Input type="text" placeholder="Enter your Country " {...field} />
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
                    </TabsContent>
                    <TabsContent value="Company" className="grid grid-cols-1 md:grid-cols-3  gap-2 ">
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
                    </TabsContent>
                    <TabsContent value="segmentasyon" className="grid grid-cols-1 md:grid-cols-3  gap-2 ">
                        <FormField
                            control={form.control}
                            name="segmentasyon.musteri_segmenti"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Customer segmentasyon</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a segmentasyon" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Bireysel">Individual</SelectItem>
                                            <SelectItem value="Kurumsal">Corporate</SelectItem>
                                            <SelectItem value="VIP">Vip</SelectItem>
                                        </SelectContent>
                                         <FormMessage />
                                    </Select>
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
                                    <FormLabel>Customer loyalty status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a segmentasyon" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Yeni Müşteri">New customer</SelectItem>
                                            <SelectItem value="Sadık Müşteri">Loyal customer</SelectItem>
                                            <SelectItem value="Potansiyel Müşteri">potential customer</SelectItem>
                                        </SelectContent>
                                         <FormMessage />
                                    </Select>
                                 </FormItem>
                                )}
                        />
                    </TabsContent>
                    
                    <TabsContent value="relations" className="grid grid-cols-1 md:grid-cols-3  gap-2 ">
                        <FormField
                            control={form.control}
                            name="iliskiler.asama"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Customer segmentasyon</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a segmentasyon" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Yeni">New Customer</SelectItem>
                                            <SelectItem value="Mevcut Müşteri">Current Customer</SelectItem>
                                            <SelectItem value="Potansiyel Müşteri">Potential Customer</SelectItem>
                                        </SelectContent>
                                         <FormMessage />
                                    </Select>
                                 </FormItem>
                                )}
                        />
                        <FormField
                            control={form.control}
                            name="iliskiler.notlar"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Relations notes</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter Notes" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                     
                    </TabsContent>
                    <TabsContent value="marketing" className="grid grid-cols-1 md:grid-cols-3 my-auto  gap-2 " >
                        <FormField
                            control={form.control}
                            name="pazarlama_izinleri.email_izni"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-start  justify-start ">
                                    <FormLabel className="p-0">Email permissions</FormLabel>
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
                                <FormItem className="flex flex-col items-start  justify-start ">
                            
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
                                    <FormLabel>Customer Preferred channel</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Preferred channel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Email">Email</SelectItem>
                                            <SelectItem value="SMS">Sms</SelectItem>
                                            <SelectItem value="Telefon">Phone</SelectItem>
                                        </SelectContent>
                                         <FormMessage />
                                    </Select>
                                 </FormItem>
                            )}
                        />
                        
                    <Button type="submit">Create</Button>
                    </TabsContent>
                </Tabs>


               

            </form>
        </Form>
    );
}

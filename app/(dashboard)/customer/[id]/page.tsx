import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DataTableOrders from "@/components/shared/detay/DataTableOrders"


export default async function CustomerDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/customers/${id}`)
  const data = await response.json()

  return <div className="flex flex-col justify-between items-center gap-2">
    <div className="flex w-full justify-end gap-2">
      <Link href={"/customer"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport data={data} />
    </div>
    <div className="w-full">
      <Tabs defaultValue="Personal" className="">
        <TabsList
         className="items-start justify-start rounded-md bg-muted p-1 gap-3 text-muted-foreground grid h-auto min-h-10 w-full grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5">
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="Personal">Personal</TabsTrigger>
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="contact_information">Contact information</TabsTrigger>
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="company_information">Company information</TabsTrigger>
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="segmentasyon">Segmentasyon</TabsTrigger>
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="iliskiler">Relations</TabsTrigger>
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="pazarlama_izinleri">Permissions</TabsTrigger>
          <TabsTrigger className="text-sm font-mono p-0 w-full" value="order_details">Order</TabsTrigger>
        </TabsList>
        <TabsContent className="flex gap-2 " value="Personal">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Name: </label>
              <span>{data.ad}</span>
            </div>
            <div className="flex gap-2">
              <label>Surname: </label>
              <span>{data.soyad}</span>
            </div>
            <div className="flex gap-2">
              <label>Birth Day: </label>
              <span>{new Date(data.dogum_tarihi).toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })}</span>
            </div>
            <div className="flex gap-2">
              <label>Gender: </label>
              <span>{data.cinsiyet}</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="contact_information">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Phone: </label>
              <Link target="_blank" className="underline" href={`tel:${data.iletisim_bilgileri.telefon}`}>{data.iletisim_bilgileri.telefon}</Link>
            </div>
            <div className="flex gap-2">
              <label>Email: </label>
              <Link target="_blank" className="underline" href={`mailto:${data.iletisim_bilgileri.email}`}>{data.iletisim_bilgileri.email}</Link>
            </div>
            <div className="flex gap-2">
              <label>Twitter: </label>
              <Link target="_blank" className="underline" href={`https://x.com/${data.iletisim_bilgileri.sosyal_medya.twitter}`}>{data.iletisim_bilgileri.sosyal_medya.twitter}</Link>

            </div>
            <div className="flex gap-2">
              <label>Linkedin: </label>
              <Link target="_blank" className="underline" href={`https://${data.iletisim_bilgileri.sosyal_medya.linkedin}`}>{data.iletisim_bilgileri.sosyal_medya.linkedin}</Link>
            </div>

          </div>
        </TabsContent>
        <TabsContent value="company_information">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Company Name: </label>
              <span>{data.sirket_bilgileri.sirket_adi}</span>
            </div>
            <div className="flex gap-2">
              <label>Company Mission: </label>
              <span>{data.sirket_bilgileri.gorev}</span>
            </div>
            <div className="flex gap-2">
              <label>Company Address: </label>
              <span>{data.sirket_bilgileri.sirket_adresi.sokak}</span>
            </div>
            <div className="flex gap-2">
              <label>Company City: </label>
              <span>{data.sirket_bilgileri.sirket_adresi.sehir}</span>
            </div>
            <div className="flex gap-2">
              <label>Company Zipcode: </label>
              <span>{data.sirket_bilgileri.sirket_adresi.posta_kodu}</span>
            </div>
            <div className="flex gap-2">
              <label>Company Country: </label>
              <span>{data.sirket_bilgileri.sirket_adresi.ulke}</span>
            </div>

          </div>
        </TabsContent>
        <TabsContent value="segmentasyon">
          <div className="flex flex-col gap-2">

            <div className="flex gap-2">
              <label>Loyalty Status: </label>
              <span>{data.segmentasyon.sadakat_durumu}</span>
            </div>
            <div className="flex gap-2">
              <label>Customer Segment: </label>
              <span>{data.segmentasyon.musteri_segmenti}</span>
            </div>
            <div className="flex gap-2">
              <label>Hobbies: </label>
              <br />
              <ul className="flex gap-2">{data.segmentasyon.ilgi_alanlari.map((item: string[], index: number) => {
                return <li key={index}>
                  <span>{item}</span>
                  <br />
                </li>
              })}</ul>
            </div>


          </div>
        </TabsContent>
        <TabsContent className="flex gap-2 " value="iliskiler">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Step: </label>
              <span>{data.iliskiler.asama}</span>
            </div>
            <div className="flex gap-2">
              <label>Notes: </label>
              <span>{data.iliskiler.notlar}</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent className="flex gap-2 " value="pazarlama_izinleri">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Email permissions: </label>
              <span>{data.pazarlama_izinleri.email_izni === true ? "True" : "False"}</span>
            </div>
            <div className="flex gap-2">
              <label>Sms permissions: </label>
              <span>{data.pazarlama_izinleri.sms_izni === true ? "True" : "False"}</span>
            </div>
            <div className="flex gap-2">
              <label>Preferred Channel: </label>
              <span>{data.pazarlama_izinleri.tercih_edilen_kanal}</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent className="flex gap-2 " value="order_details">
        <DataTableOrders data={data.satin_alma_gecmisi}/>
        </TabsContent>


      </Tabs>

    </div>


  </div>
}


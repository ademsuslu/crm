import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default async function CustomerDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/customers/${id}`)
  const data = await response.json()
  console.log("Detay Page")
  console.log(data)

  return <div className="flex flex-col justify-between items-center gap-2">
    <div className="flex w-full justify-end gap-2">
      <Link href={"/customer"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport data={data} />
    </div>
    <div className="w-full">
      <Tabs defaultValue="Personal" className="">
        <TabsList>
          <TabsTrigger value="Personal">Personal</TabsTrigger>
          <TabsTrigger value="contact_information">Contact information</TabsTrigger>
        </TabsList>
        <TabsContent  className="flex gap-2 " value="Personal">
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
      </Tabs>

    </div>


  </div>
}


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
                <span>{data.ad}</span> <hr />
            </div>
            <div className="flex gap-2">
                <label>Surname: </label>
                <span>{data.soyad}</span> <hr />
            </div>
            <div className="flex gap-2">
                <label>Birth Day: </label>
                <span>{new Date(data.dogum_tarihi).toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })}</span> <hr />
            </div>
            <div className="flex gap-2">
                <label>Gender: </label>
                <span>{data.cinsiyet}</span> <hr />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="contact_information">
          {/* 
            "iletisim_bilgileri": {
      "adres": {
        "sokak": "Gazi Bulvarı No:45",
        "sehir": "İzmir",
        "posta_kodu": "35100",
        "ulke": "Türkiye"
      },
      "sosyal_medya": {
        "twitter": "@denizkara",
        "linkedin": "linkedin.com/in/denizkara"
      },
      "telefon": "+90 533 222 3333",
      "email": "deniz.kara@example.com"
    },

          */}
       <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <label>Name: </label>
                <span>{data.ad}</span> <hr />
            </div>
            <div className="flex gap-2">
                <label>Surname: </label>
                <span>{data.soyad}</span> <hr />
            </div>
            <div className="flex gap-2">
                <label>Birth Day: </label>
                <span>{new Date(data.dogum_tarihi).toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })}</span> <hr />
            </div>
            <div className="flex gap-2">
                <label>Gender: </label>
                <span>{data.cinsiyet}</span> <hr />
            </div>
          </div>
        </TabsContent>
      </Tabs>

    </div>


  </div>
}


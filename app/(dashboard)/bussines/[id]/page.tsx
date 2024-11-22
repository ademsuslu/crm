import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DataTableBusPersonal from "@/components/shared/datatables/bussines/personal/DataTableBusPersonal"

export default async function BussinesDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`${process.env.NEXT_API_URL}/businesses/${id}`, { cache: 'no-store' })
  const data = await response.json()
  console.log(data)
  return (<div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/bussines"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="bussines" id={id} />
    </div>
    <div className="w-full">
      <Tabs defaultValue="Busines" className="">
        <TabsList
          className="items-start justify-start rounded-md bg-muted p-1 gap-3 text-muted-foreground grid h-auto min-h-5 w-full grid-cols-1 sm:grid-cols-2">
          <TabsTrigger className="text-sm  p-0 w-full" value="Busines">Busines</TabsTrigger>
          <TabsTrigger className="text-sm  p-0 w-full" value="busPersonal">Contact information</TabsTrigger>

        </TabsList>
        <TabsContent className="flex gap-2 " value="Busines">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Name: </label>
              <span>{data.name}</span>
            </div>
            <div className="flex gap-2">
              <label>Address: </label>
              <span>{data.address}</span>
            </div>

            <div className="flex gap-2">
              <label>Phone: </label>
              <span>{data.phone}</span>
            </div>

          </div>
        </TabsContent>
        <TabsContent className="flex gap-2 " value="busPersonal">
          <DataTableBusPersonal data={data?.employees} />
        </TabsContent>
      </Tabs>

    </div>


  </div>)
}
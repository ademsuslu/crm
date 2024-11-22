import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DataTableBussines from "@/components/shared/datatables/bussines/DataTableBussines"

export default async function PersonalDetails({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const response = await fetch(`${process.env.NEXT_API_URL}/employees/${id}`,{ cache: 'no-store' })
    const data = await response.json()
console.log("dddddddddddd")
console.log(data)
//@ts-ignore
let Id = String(data?.businessId._id)
    const bus = await fetch(`${process.env.NEXT_API_URL}/businesses/${Id}`,{ cache: 'no-store' })
    const bussinesforpersonal = await bus.json()

  console.log("bussinesforpersonal")
  console.log(bussinesforpersonal)
    return <div className="flex flex-col justify-between items-center  gap-2">
     <div className="flex w-full justify-between gap-2">
        <Link href={"/bussines/personal"} className={buttonVariants({})}>Back</Link>
        <ButtonsExport type="personal" data={data} />
      </div> 
      <div className="w-full">
      <Tabs defaultValue="Personal" className="">
        <TabsList
          className="items-start justify-start rounded-md bg-muted p-1 gap-3 text-muted-foreground grid h-auto min-h-5 w-full grid-cols-1 sm:grid-cols-2">
          <TabsTrigger className="text-sm  p-0 w-full" value="Personal">Personal</TabsTrigger>
           <TabsTrigger className="text-sm  p-0 w-full" value="busPersonal">Bussines</TabsTrigger> 

        </TabsList>
        <TabsContent className="flex gap-2 " value="Personal">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Name: </label>
              <span>{data.name}</span>
            </div>
            <div className="flex gap-2">
              <label>Position: </label>
              <span>{data.position}</span>
            </div>

            <div className="flex gap-2">
              <label>Phone: </label>
              <span>{data.phone}</span>
            </div>

          </div>
        </TabsContent>
         <TabsContent className="flex gap-2 " value="busPersonal">
           <DataTableBussines data={bussinesforpersonal} />
        </TabsContent>
      </Tabs>
       
      </div>
  
    </div>
  }
import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatToTurkeyTime } from "@/lib/utils"
import DataTableTaskPersonal from "@/components/shared/datatables/task/personal/DataTableTaskPersonal"

export default async function TasksDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/tasks/${id}`, { cache: 'no-store' })
  const data = await response.json()
  return (<div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
       <Link href={"/bussines/task"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="task" id={id} />
    </div>
    <div className="w-full">
    <Tabs defaultValue="priority" className="">
        <TabsList
          className="items-start justify-start rounded-md bg-muted p-1 gap-3 text-muted-foreground grid h-auto min-h-5 w-full grid-cols-1 sm:grid-cols-2">
          <TabsTrigger className="text-sm  p-0 w-full" value="Tasks">Tasks</TabsTrigger>
          <TabsTrigger className="text-sm  p-0 w-full" value="taskPersonal">Contact information</TabsTrigger>

        </TabsList>
        <TabsContent className="flex gap-2 " value="Tasks">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Title: </label>
              <span>{data.title}</span>
            </div>
            <div className="flex gap-2">
              <label>Description: </label>
              <span>{data.description}</span>
            </div>

            <div className="flex gap-2">
              <label>Priority: </label>
              <span>{data.priority}</span>
            </div>
            <div className="flex gap-2">
              <label>Date: </label>
              <span>{formatToTurkeyTime(data.dueDate)}</span>
            </div>
            <div className="flex gap-2">
              <label>Status: </label>
              <span>{data.status}</span>
            </div>

          </div>
        </TabsContent>
        <TabsContent className="flex gap-2 " value="taskPersonal">
         <DataTableTaskPersonal data={data.assignedEmployees}/>
        </TabsContent>
      </Tabs>

    </div>
  </div>)
}
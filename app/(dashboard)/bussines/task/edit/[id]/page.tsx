import ButtonsExport from "@/components/shared/detay/buttons-export"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import TaskEditForm from "@/components/shared/forms/task/task-form-edit"
export default async function TaskEdit({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params)?.id
  const response = await fetch(`https://crm-backend-production-e80f.up.railway.app/api/tasks/${id}`, { cache: 'no-store' })
  const data = await response.json()

  const employees = await fetch("https://crm-backend-production-e80f.up.railway.app/api/employees", {
    cache: "no-store"
  })
  const personal = await employees.json()
  return (<div className="flex flex-col justify-between items-center  gap-2">
    <div className="flex w-full justify-between gap-2">
      <Link href={"/bussines/task"} className={buttonVariants({})}>Back</Link>
      <ButtonsExport type="task" id={id} />
    </div>
    <div className="w-full">
      <TaskEditForm personal={personal} task={data} />
    </div>


  </div>)
}
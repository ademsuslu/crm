import DataTablePersonal from "@/components/shared/DataTablePersonal"

export default async function Employee() {
    const response = await fetch(`${'https://crm-backend-production-e80f.up.railway.app/api'}/employees`)
    const data = await response.json()
    console.log("Employes", data)
    return <div>
        <DataTablePersonal data={data}/>
    </div>
}
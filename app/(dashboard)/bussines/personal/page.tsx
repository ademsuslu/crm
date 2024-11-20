import DataTablePersonal from "@/components/shared/DataTablePersonal"

export default async function Employee() {
    const response = await fetch(`${'https://crm-backend-production-e80f.up.railway.app/api'}/employees`,{
        cache:"no-store"
    })
    const data = await response.json()
    return <div>
        <DataTablePersonal data={data}/>


    </div>
}
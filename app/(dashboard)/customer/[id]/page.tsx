import ButtonsExport from "@/components/shared/detay/buttons-export"
import { ExportToCSV } from "@/utils/ExportToCSV"

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


//  create exportToCSV and exportToPDF functions

    // const deleteCustomer = async (id) => {
    //   await fetch(`${process.env.NEXT_API_URL}/customers/${id}`, {
    //     method: 'DELETE',
    //   })
    //   console.log("Customer deleted")
    // }
    // const createCustomer = async () => {
    // }
    // const exportToCSV = (data) => {
    // }
    // const exportToPDF = (data) => {
    // }
     

    return <div className="flex flex-col md:flex-row justify-between items-center gap-2">

<ButtonsExport data={data} />


      <div className="border">Customer id is: {data?.ad}</div>
      <div className="border">
        
        {/* create example form */}
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" />
          <button type="submit">Update</button>
          {/* add delete button */}
          {/* <button type="button" onClick={() => deleteCustomer(id)}>Delete</button> */}
          {/* add create new customer button */}
          {/* <button type="button" onClick={() => createCustomer()}>Create New Customer</button> */}
          {/* add cancel button */}
          {/* <button type="button">Cancel</button> */}
          {/* add export to CSV button */}
            {/* add export to PDF button */}
          {/* <button type="button" onClick={() => exportToPDF(data)}>Export to PDF</button> */}
          
        </form>
      </div>

    </div>
  }


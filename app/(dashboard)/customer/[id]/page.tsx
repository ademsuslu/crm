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
    return <div>Customer id is: {id}</div>
  }


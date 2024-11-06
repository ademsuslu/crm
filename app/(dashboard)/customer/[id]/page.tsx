export default async function CustomerDetails({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    return <div>My Post: {id}</div>
  }
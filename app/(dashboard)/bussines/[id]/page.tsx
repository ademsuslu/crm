
export default async function BussinesDetails({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    return (<div>BussinesDetails :  {(await params).id}</div>)
  }

export default async function BussinesPage (){
    const response =  await fetch(`${process.env.NEXT_API_URL}/businesses`)
   
    const data = await response.json()
    console.log(data)
    return <div>
        BussinesPage
    </div>
}

export default async function BussinesPage (){
    const response = await fetch('http://localhost:5000/api/businesses')
    const data = await response.json()
    console.log(data)
    return <div>
        BussinesPage
    </div>
}
export default async function CustomerPage(){
    const response = await fetch('http://localhost:5000/api/customers')
    const data = await response.json()
    console.log(data)
    return <div>Customer Page</div>
}
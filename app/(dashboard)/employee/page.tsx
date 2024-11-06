
export default async function Employee (){
    const response = await fetch(`${process.env.NEXT_API_URL}/employees`)
    const data = await response.json()
    console.log(data)
    return <div>
        Employee
    </div>
}
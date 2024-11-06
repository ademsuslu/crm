
export default async function Employee (){
    const response = await fetch('http://localhost:5000/api/employees')
    const data = await response.json()
    console.log(data)
    return <div>
        Employee
    </div>
}
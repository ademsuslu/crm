import Navbar from "@/components/shared/navbar"

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=" container  mx-auto px-4">
        <Navbar />
        <main>{children}</main>
  
    </div>
  )
}

export default RootLayout
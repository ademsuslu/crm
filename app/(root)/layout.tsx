import Navbar from "@/components/shared/navbar"
import  Footer  from "@/components/shared/footer"

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=" container  mx-auto px-4">
        <Navbar />
        <main>{children}</main>
        <div className="mt-6"></div>
        <Footer/>
      <div className="mt-3"></div>
    </div>
  )
}

export default RootLayout


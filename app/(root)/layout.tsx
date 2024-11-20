import Navbar from "@/components/shared/navbar"
import  Footer  from "@/components/shared/footer"

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="container mx-auto px-4">
        <Navbar />
        <main className="flex flex-col  min-h-[calc(100vh-10.5rem-1px)]">
        <div className="flex-1 flex flex-col h-full">
        {children}
        </div>
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout


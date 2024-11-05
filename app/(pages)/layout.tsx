
const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=" container  mx-auto px-30">
        <main>{children}</main>
    </div>
  )
}

export default DashboardLayout


import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[url('/assets/login_register.webp')] bg-no-repeat bg-cover">
   
      {children}
  </div>
  
  )
}

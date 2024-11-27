import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full	 flex items-center justify-between text-white">
       <Image className="" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: "cover", width:"100%", height:"100%"}} src={"/assets/login_register.webp"} alt="Login_Register"  	loading="lazy"/>
    
       <div className="w-full h-full flex items-center justify-center text-white">{children}</div>
    </div>

  )
}

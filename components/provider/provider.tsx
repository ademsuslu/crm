"use client"

import { toast } from "@/hooks/use-toast"
import { FC, ReactNode} from "react"
import { RiWifiOffLine } from "react-icons/ri";


interface ProvidersProps {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
    window.addEventListener("offline", () => {
        toast({
          description:<div className="inline-flex">Your internet connection is gone <RiWifiOffLine  className="w-4 h-4 ml-2"/></div>, 
        })
      })
    return (
        <div className="">
        
           {children}
        </div>
    )
}
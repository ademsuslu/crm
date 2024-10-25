"use client"

import { FC, ReactNode} from "react"


interface ProvidersProps {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <div className="">
        
           {children}
        </div>
    )
}
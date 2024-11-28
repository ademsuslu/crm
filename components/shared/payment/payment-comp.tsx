"use client"
import { createPaytrToken } from "@/app/actions/payment.actions"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Script from "next/script"
import { useState, useTransition } from "react"

export const PaymentComp = () => {
    const [isPending, startPending] = useTransition()
    const [token, setToken] = useState("")
    const onClick = () => {
        startPending(async () => {
            const {status, message, data} = await createPaytrToken()
            if(status === "failed") {
                alert(message)
            }
            if(status === "success") {
                setToken(data || "")
            }
        })
    }

    return (
        <div className='mt-2'>
            <Button onClick={onClick} disabled={isPending}>
                {
                    isPending ? <Loader2 className="size-4 animate-spin mr-2" /> : null
                }
               Siparişi Tamamla
            </Button>
            {
                token ? 
                <Card className="p-4">
                    <Script src="https://www.paytr.com/js/iframeResizer.min.js" />
                    <iframe
                        src={`https://www.paytr.com/odeme/guvenli/${token}`}
                        id="paytriframe"
                        className="w-full"
                    />
                    <script>iFrameResize({}, `#paytriframe`);</script>
                </Card>
                : null
            }
        </div>
    )
}




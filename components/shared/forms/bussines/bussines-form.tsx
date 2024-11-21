"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import React, { useEffect, useState } from "react"
import { BussinesformSchema } from "@/types/form/bussinesSchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TiTick } from "react-icons/ti"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { User } from "@/types/User/model"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdOutlineAddBox } from "react-icons/md"

interface Props {
}

export const BussinesCreate: React.FC<Props> = () => {
    const router = useRouter()
    const storeModal = useStoreModal()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof BussinesformSchema>>({
        resolver: zodResolver(BussinesformSchema),
        defaultValues: {
            name: "",
            address: "",
            phone: 0,
        }
    })


    const onSubmit = async (values: z.infer<typeof BussinesformSchema>) => {
        storeModal.onClose()
        form.reset()
        const url = `https://crm-backend-production-e80f.up.railway.app/api/businesses`
        const response = await fetch(url, {
            method: 'POST',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const res = await response.json()
        router.push("/bussines");
        toast({ description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500' /></div> })
    };


    return <div className="space-y-4 ">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <FormField control={form.control} name="name" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="address" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter Address" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />

            
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>phone</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Enter Phone" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-start w-full">
                    <Button disabled={loading} type="submit">
                        <MdOutlineAddBox className="w-4 h-4 mr-2" />
                        Create
                    </Button>
                </div>
            </form>
        </Form>
    </div>

}
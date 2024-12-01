"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import React, {  useState } from "react"
import { TiTick } from "react-icons/ti"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdOutlineAddBox } from "react-icons/md"
import { BillingformSchema } from "@/types/form/billingSchema"

interface Props{}

export const BillingFormComponent: React.FC<Props> = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof BillingformSchema>>({
        resolver: zodResolver(BillingformSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: 0,
            address: {
                districk: "",
                city: "",
                zip_code: "",
                country: "",
            },
        }
    })


    const onSubmit = async (values: z.infer<typeof BillingformSchema>) => {
        
        form.reset()
        const url = `https://crm-backend-production-e80f.up.railway.app/api/billing`
        const response = await fetch(url, {
            method: 'POST',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const res = await response.json()
        router.refresh();
        router.back();
        toast({ description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500' /></div> })
    };


    return <div className="space-y-4 ">
        <h1 className="text-xl font-bold">Billing</h1>
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
                <FormField control={form.control} name="address.country" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter Country" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="address.city" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter City" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="address.districk" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Districk</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter districk" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="address.zip_code" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter zipcode" {...field} />
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
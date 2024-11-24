"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import React, { useState } from "react"
import { PersonalFormSchema } from "@/types/form/personalSchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TiTick } from "react-icons/ti"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdOutlineAddBox } from "react-icons/md"
import { Business } from "@/types/business/model"
import { Personal } from "@/types/personal/model"

interface Props {
    data: Personal,
    bussines: Business[]
}

export const PersonalEdit: React.FC<Props> = ({ data, bussines }) => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof PersonalFormSchema>>({
        resolver: zodResolver(PersonalFormSchema),
        defaultValues: {
            name: data.name,
            position: data.position,
            phone: Number(data.phone),
            //@ts-ignore
            businessId:data?.businessId?._id as string || "",
        }
    })


    const onSubmit = async (values: z.infer<typeof PersonalFormSchema>) => {
        form.reset()
        const url = `https://crm-backend-production-e80f.up.railway.app/api/employees/${data._id}`
        const response = await fetch(url, {
            method: 'PUT',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const res = await response.json()
        router.back();
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
                <FormField control={form.control} name="position" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter Position" {...field} />
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

                <FormField
                    control={form.control}
                    name="businessId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bussiness</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a stage" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        bussines?.map((item, index) => {
                                            return <SelectItem key={index} value={String(item?._id)}>{item?.name}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="pt-6 space-x-2 flex items-center justify-start w-full">
                    <Button disabled={loading} type="submit">
                        <MdOutlineAddBox className="w-4 h-4 mr-2" />
                        Save
                    </Button>
                </div>
            </form>
        </Form>
    </div>

}
"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import React, { useEffect, useState } from "react"
import { opportunityformSchema } from "@/types/form/opportunitySchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TiTick } from "react-icons/ti"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { User } from "@/types/User/model"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdOutlineAddBox } from "react-icons/md"

interface Props {
    user: User[]
}

export const OpportunityCreate: React.FC<Props> = ({ user }) => {
    const router = useRouter()
    const storeModal = useStoreModal()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof opportunityformSchema>>({
        resolver: zodResolver(opportunityformSchema),
        defaultValues: {
            name: "",
            stage: "İletişim",
            value: 0,
            assignedTo: "",
        }
    })


    const onSubmit = async (values: z.infer<typeof opportunityformSchema>) => {
        storeModal.onClose()
        form.reset()
        const url = `https://crm-backend-production-e80f.up.railway.app/api/opportunity`
        const response = await fetch(url, {
            method: 'POST',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const res = await response.json()
        router.push("/opportunity");
        toast({ description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500' /></div> })
    };


    return <div className="space-y-4 ">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField control={form.control} name="name" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />

                <FormField
                    control={form.control}
                    name="stage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Stage</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a stage" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        ['İletişim', 'Teklif', 'Görüşme', 'Kapalı', 'Kazandı', 'Kaybetti'].map((item, index) => {
                                            return <SelectItem key={index} value={item}>{item}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="assignedTo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a stage" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        user?.map((item, index) => {
                                            return <SelectItem key={index} value={item?._id}>{item?.name}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Value</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Enter price" {...field} />
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
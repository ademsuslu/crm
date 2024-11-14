"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { reminderFormSchema } from "@/types/form/reminderSchema"
import { Textarea } from "@/components/ui/textarea"
import { IoIosTimer } from "react-icons/io"
import React, { useState } from "react"
import { DateTimePicker } from "./dattimepicker"
export function ReminderForm() {
    const router = useRouter()
    const form = useForm<z.infer<typeof reminderFormSchema>>({
        resolver: zodResolver(reminderFormSchema),
        defaultValues: {
            senderMail: "",
            receiverMail: "",
            content: "",
            sendTime: new Date()
        },
    });

    async function onSubmit(values: z.infer<typeof reminderFormSchema>) {
        form.reset()
        console.log(values)
        // const url = `https://crm-backend-production-e80f.up.railway.app/api/customers`
        // const response = await fetch(url, {
        //     method: 'POST',
        //     cache: "no-cache",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // })
        // const res = await response.json()
        // toast({ description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500' /></div> })
        // router.push("/customer")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2   gap-2 ">
                    <FormField
                        control={form.control}
                        name="senderMail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sender Mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Sender" className="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Soyad Alanı */}
                    <FormField
                        control={form.control}
                        name="receiverMail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Receiver Mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter receiver" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sendTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Send Mail Time</FormLabel>
                                <FormControl>
                                <DateTimePicker className="w-full"  onChange={field.onChange} value={field.value} />
                                </FormControl >
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea rows={4} placeholder="Enter Content" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sendTime"
                        render={({ field }) => (
                            <FormItem className="flex flex-col mt-2.5">
                                <FormLabel>Send Time</FormLabel>
                                <FormControl>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                </div>
                <Button type="submit">Create <IoIosTimer className="w-4 h-4 ml-2" /></Button>

            </form>
        </Form>
    );
}


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"


import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { TiTick } from "react-icons/ti"

import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { reminderFormSchema } from "@/types/form/reminderSchema"
import { Textarea } from "@/components/ui/textarea"

export function ReminderForm() {
    const router = useRouter()
    const form = useForm<z.infer<typeof reminderFormSchema>>({
        resolver: zodResolver(reminderFormSchema),
        defaultValues: {
            senderMail: "",
            receiverMail: "",
            content: "",
            sendTime:new Date()
        },
    });

    async function onSubmit(values: z.infer<typeof reminderFormSchema>) {
        console.log(values)
        const url = `https://crm-backend-production-e80f.up.railway.app/api/customers`
        const response = await fetch(url, {
            method: 'POST',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const res = await response.json()
        toast({ description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500' /></div> })
        router.push("/customer")
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
                         {/* Cinsiyet Alanı */}
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
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl className="">
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

               
                 
                </div>
            </form>
        </Form>
    );
}

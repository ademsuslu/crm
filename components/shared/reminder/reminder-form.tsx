"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { string, z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { reminderFormSchema } from "@/types/form/reminderSchema"
import { Textarea } from "@/components/ui/textarea"
import { IoIosTimer } from "react-icons/io"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "@/hooks/use-toast"
import { TiTick } from "react-icons/ti"

interface Props  {
    email: string;
}
 const ReminderForm:React.FC<Props>=(email)=> {

    
    const router = useRouter()
    const form = useForm<z.infer<typeof reminderFormSchema>>({
        resolver: zodResolver(reminderFormSchema),
        defaultValues: {
            senderMail: "",
            receiverMail: email.email ? email.email : "",
            content: "",
            sendTime: new Date()
        },
    });


    function handleDateSelect(date: Date | undefined) {
        if (date) {
            form.setValue("sendTime", date);
        }
    }

    function handleTimeChange(type: "hour" | "minute" | "ampm", value: string) {
        const currentDate = form.getValues("sendTime") || new Date();
        let newDate = new Date(currentDate);

        if (type === "hour") {
            const hour = parseInt(value, 10);
            newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
        } else if (type === "minute") {
            newDate.setMinutes(parseInt(value, 10));
        } else if (type === "ampm") {
            const hours = newDate.getHours();
            if (value === "AM" && hours >= 12) {
                newDate.setHours(hours - 12);
            } else if (value === "PM" && hours < 12) {
                newDate.setHours(hours + 12);
            }
        }

        form.setValue("sendTime", newDate);
    }


    async function onSubmit(values: z.infer<typeof reminderFormSchema>) {
        form.reset()
        console.log(values)
        const url = `https://crm-backend-production-e80f.up.railway.app/api/reminder`
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
                    <FormField
                        control={form.control}
                        name="sendTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select the time to send the message</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "MM/dd/yyyy hh:mm aa")
                                                ) : (
                                                    <span>MM/DD/YYYY hh:mm aa</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <div className="sm:flex">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={handleDateSelect}
                                                initialFocus
                                            />
                                            <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                                <ScrollArea className="w-64 sm:w-auto">
                                                    <div className="flex sm:flex-col p-2">
                                                        {Array.from({ length: 12 }, (_, i) => i + 1)
                                                            .reverse()
                                                            .map((hour) => (
                                                                <Button
                                                                    key={hour}
                                                                    size="icon"
                                                                    variant={
                                                                        field.value &&
                                                                            field.value.getHours() % 12 === hour % 12
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() =>
                                                                        handleTimeChange("hour", hour.toString())
                                                                    }
                                                                >
                                                                    {hour}
                                                                </Button>
                                                            ))}
                                                    </div>
                                                    <ScrollBar
                                                        orientation="horizontal"
                                                        className="sm:hidden"
                                                    />
                                                </ScrollArea>
                                                <ScrollArea className="w-64 sm:w-auto">
                                                    <div className="flex sm:flex-col p-2">
                                                        {Array.from({ length: 12 }, (_, i) => i * 5).map(
                                                            (minute) => (
                                                                <Button
                                                                    key={minute}
                                                                    size="icon"
                                                                    variant={
                                                                        field.value &&
                                                                            field.value.getMinutes() === minute
                                                                            ? "default"
                                                                            : "ghost"
                                                                    }
                                                                    className="sm:w-full shrink-0 aspect-square"
                                                                    onClick={() =>
                                                                        handleTimeChange("minute", minute.toString())
                                                                    }
                                                                >
                                                                    {minute.toString().padStart(2, "0")}
                                                                </Button>
                                                            )
                                                        )}
                                                    </div>
                                                    <ScrollBar
                                                        orientation="horizontal"
                                                        className="sm:hidden"
                                                    />
                                                </ScrollArea>
                                                <ScrollArea className="">
                                                    <div className="flex sm:flex-col p-2">
                                                        {["AM", "PM"].map((ampm) => (
                                                            <Button
                                                                key={ampm}
                                                                size="icon"
                                                                variant={
                                                                    field.value &&
                                                                        ((ampm === "AM" &&
                                                                            field.value.getHours() < 12) ||
                                                                            (ampm === "PM" &&
                                                                                field.value.getHours() >= 12))
                                                                        ? "default"
                                                                        : "ghost"
                                                                }
                                                                className="sm:w-full shrink-0 aspect-square"
                                                                onClick={() => handleTimeChange("ampm", ampm)}
                                                            >
                                                                {ampm}
                                                            </Button>
                                                        ))}
                                                    </div>
                                                </ScrollArea>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>

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



                </div>
                <Button type="submit">Create <IoIosTimer className="w-4 h-4 ml-2" /></Button>

            </form>
        </Form>
    );
}


export default ReminderForm

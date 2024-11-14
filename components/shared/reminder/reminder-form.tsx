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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { reminderFormSchema } from "@/types/form/reminderSchema"
import { Textarea } from "@/components/ui/textarea"
import { IoIosTimer } from "react-icons/io"
import React,{useState} from "react"
import { AnyNaptrRecord } from "dns"
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
                                <FormLabel>Send Time</FormLabel>
                                {/* <Popover>
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
                                                    format(field.value, "PPP p")
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
                                                date <= new Date() ||  date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover> */}
                                <DateTimePicker field={field}/>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                 
                </div>
                    <Button type="submit">Create <IoIosTimer className="w-4 h-4 ml-2"/></Button>

            </form>
        </Form>
    );
}
interface DateTimePickerProps {
    field: {
        value: Date | null;
        onChange: (date: Date) => void;
    };
}

export function DateTimePicker({ field }: DateTimePickerProps) {
    const [selectedDate, setSelectedDate] = useState<Date>(field.value || new Date());
    const [hour, setHour] = useState<any>(selectedDate.getHours());
    const [minute, setMinute] = useState<any>(selectedDate.getMinutes());

    const handleDateChange = (date: Date | undefined) => {
        if (date) {
            date.setHours(hour, minute);
            setSelectedDate(date);
            field.onChange(date);
        }
    };

    const handleTimeChange = (type: "hour" | "minute", value: number) => {
        const newDate = new Date(selectedDate);
        if (type === "hour") {
            newDate.setHours(value);
            setHour(value);
        } else {
            newDate.setMinutes(value);
            setMinute(value);
        }
        setSelectedDate(newDate);
        field.onChange(newDate);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                    >
                        {field.value ? (
                            format(field.value, "PPP p")  // "PPP p" ile tarih ve saat formatı
                        ) : (
                            <span>Tarih ve saat seçin</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="flex flex-col gap-2 p-4">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateChange}
                        disabled={(date) =>
                            date <= new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                    />
                    <div className="flex items-center gap-2">
                        <Select value={hour} onValueChange={(value) => handleTimeChange("hour", parseInt(value))}>
                            <SelectTrigger className="w-[70px]">
                                <SelectValue  className="text-white" placeholder="Hours"/>
                            </SelectTrigger>
                            <SelectContent className="text-white">
                                {Array.from({ length: 24 }, (_, i) => (
                                    <SelectItem className="text-white" key={i} value={i.toString()}>{`${i}`.padStart(2, "0")}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <span className="text-white">:</span>
                        <Select  value={minute} onValueChange={(value) => handleTimeChange("minute", parseInt(value))}>
                            <SelectTrigger  className="w-[70px] text-white">
                                <SelectValue className="text-white" placeholder="Minutes" />
                            </SelectTrigger>
                            <SelectContent className="text-white">
                                {Array.from({ length: 60 }, (_, i) => (
                                    <SelectItem className="text-white" key={i} value={i.toString()}>{`${i}`.padStart(2, "0")}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
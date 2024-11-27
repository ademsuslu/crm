"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { format } from "date-fns";
import React, { useState } from "react"
import { taskformSchema } from "@/types/form/taskSchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TiTick } from "react-icons/ti"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdOutlineAddBox } from "react-icons/md"
import { Personal } from "@/types/business/model"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { MultiSelect } from "@/components/ui/multi-select"

interface Props {
    personal: Personal[]
}

export const TaskCreate: React.FC<Props> = ({ personal }) => {
    const router = useRouter()
    const storeModal = useStoreModal()
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof taskformSchema>>({
        resolver: zodResolver(taskformSchema),
        defaultValues: {
            title: "",
            description: "",
            priority: "low" as 'low' | 'medium' | 'high', //['low', 'medium', 'high']
            dueDate: new Date(),
            status: "pending" as 'pending' | 'in_progress' | 'completed', //['pending', 'in_progress', 'completed']
            assignedEmployees: [],
        }
    })

    function handleDateSelect(date: Date | undefined) {
        if (date) {
            form.setValue("dueDate", date);
        }
    }

    function handleTimeChange(type: "hour" | "minute" | "ampm", value: string) {
        const currentDate = form.getValues("dueDate") || new Date();
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

        form.setValue("dueDate", newDate);
    }
    const onSubmit = async (values: z.infer<typeof taskformSchema>) => {
        form.reset()
        const url = `https://crm-backend-production-e80f.up.railway.app/api/tasks`

        console.log("values")
        console.log(values)
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField control={form.control} name="title" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input disabled={loading} placeholder="Enter title" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="description" render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea disabled={loading} placeholder="Enter description" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />

                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <span>Select a Stage</span>
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    {
                                        ['low', 'medium', 'high'].map((item, index) => {
                                            return <SelectItem className="capitalize" key={index} value={item}>{item}</SelectItem>
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
                    name="dueDate"
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
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <span>Select a status</span>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        ['pending', 'in_progress', 'completed'].map((item, index) => {
                                            return <SelectItem className="capitalize" key={index} value={item}>{item}</SelectItem>
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
                    name="assignedEmployees"
                    render={({ field }) => {
                        let data = personal?.map(item => ({
                            label: item.name,
                            value: item?._id
                        }));
                        return <FormItem>
                            <FormLabel>Personals</FormLabel>
                            <FormControl>
                                <MultiSelect
                                    options={data}
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    placeholder="Select personals"
                                    variant="inverted"
                                    animation={2}
                                    maxCount={3}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }
                    }
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
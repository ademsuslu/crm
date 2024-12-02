"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { Modal } from "../ui/modal"
import { opportunityformSchema } from "@/types/form/opportunitySchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { TiTick } from "react-icons/ti"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { User } from "@/types/User/model"


export const StoreModal = () => {
const router = useRouter()

const [user,setUser] = useState<User[]>()

useEffect(() => {
   const handleFetch = async() =>{
    //    const url = `https://crm-backend-production-e80f.up.railway.app/api/users`
    //    const response = await fetch(url,{
    //       method: 'GET',
    //       cache:"no-cache",
    //    })  
    //    const res = await response.json()
    //    setUser(res)
   }
    handleFetch();
}, [])


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
          const response = await fetch(url,{
             method: 'POST',
             cache:"no-cache",
             headers: {
                 'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
          })  
          const res = await response.json()
          router.refresh();
         toast({description: <div className="inline-flex items-center">{res?.message} <TiTick className='w-6 h-6 ml-2 text-green-500'/></div>})
    };


    return <Modal
        title="Create Stage"
        description="Add a new stage to manage users"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
        <div>
            <div className="space-y-4  py-2 pb-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                                ['İletişim', 'Teklif', 'Görüşme', 'Kapalı', 'Kazandı', 'Kaybetti'].map((item,index)=>{
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
                                                user?.map((item,index)=>{
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

                        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                            <Button disabled={loading} onClick={storeModal.onClose} variant="outline">Cancel</Button>
                            <Button disabled={loading} type="submit">Continue</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    </Modal>
}
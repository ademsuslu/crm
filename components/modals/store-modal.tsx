"use client"
import * as  z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { Modal } from "../ui/modal"
import { opportunityformSchema } from "@/types/form/opportunitySchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"




export const StoreModal = () => {
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


    const onSubmit = async (data: z.infer<typeof opportunityformSchema>) => {
        //     try {
        //         setLoading(true);
        //         let respon
        //         // const response = await axios.post("/api/store", data);
        //         window.location.assign(`/${response?.data?.id}`)
        //         window.location.reload();
        //     } catch (error: any) {
        //         toast.error("Bir şeyler yanlış gitti: " + error.message);
        //         console.log(error);
        //     } finally {
        //         setLoading(false);
        //     }
    };


    return <Modal
        title="Create Stage"
        description="Add a new stage to manage users"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
        <div>
            <div className="space-y-4 py-2 pb-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    
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
                                                    return <SelectItem value={item}>{item}</SelectItem>
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
                                            <SelectItem value="Kadın">Kadın</SelectItem>
                                            <SelectItem value="Erkek">Erkek</SelectItem>
                                            <SelectItem value="Diğer">Diğer</SelectItem>
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
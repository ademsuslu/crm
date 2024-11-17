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

const formSchema = z.object({
    name: z.string().min(1)
})


export const StoreModal = () => {
    const storeModal = useStoreModal()

    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })


     const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
        title="Create Store"
        description="Add a new store to manage products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
        <div>
            <div className="space-y-4 py-2 pb-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        {/* @ts-ignore */}
                        <FormField control={form.control} name="name" render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Name</FormLabel>

                                <FormControl>
                                    <Input disabled={loading} placeholder="E-commerce" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }} />
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
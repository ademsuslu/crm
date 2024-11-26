"use client"

import { z } from "zod"


export const BussinesformSchema = z.object({
    name: z.string().min(3, "name en az 2 karakter olmalıdır").max(20, "Ad en fazla 50 karakter olmalıdır"),
    address: z.string().min(3, "address en az 2 karakter olmalıdır"),
    phone: z.number({ coerce: true }).min(10)
});

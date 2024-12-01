"use client"

import { z } from "zod"


export const BillingformSchema = z.object({
    name: z.string().min(3, "Name en az 2 karakter olmalıdır").max(20, "Name en fazla 50 karakter olmalıdır"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.number({ coerce: true }).min(10),
    address: z.object({
        country: z.string(),
        city: z.string(),
        districk: z.string(),
        zip_code: z.string(),
    }),
});

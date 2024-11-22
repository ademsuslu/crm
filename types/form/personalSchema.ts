
"use client"

import { z } from "zod"

//  name: string;
//     position: string;
//     phone: string;
//     businessId: string;

export const PersonalFormSchema = z.object({
    name: z.string().min(3, "Enter Your  name"),
    position: z.string().min(3, "Enter Your  position "),
    phone: z.number({ coerce: true }).min(3, "Enter Your  phone "),
    businessId: z.string().min(3, "Select bussines "),
});

"use client"

import { z } from "zod"


export const reminderFormSchema = z.object({
    senderMail: z.string().email("Geçerli bir e-posta adresi girin"),
    receiverMail: z.string().email("Geçerli bir e-posta adresi girin"),
    content: z.string().min(2, "Soyad en az 2 karakter olmalıdır").max(50, "Soyad en fazla 50 karakter olmalıdır"),
    sendTime: z.date(),

});

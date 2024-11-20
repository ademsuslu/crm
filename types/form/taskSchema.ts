"use client"

import { z } from "zod"

export const taskformSchema = z.object({
    title: z.string().min(2, "title en az 2 karakter olmalıdır").max(50, "Ad en fazla 50 karakter olmalıdır"),
    description: z.string().min(2, "title en az 2 karakter olmalıdır").max(50, "Ad en fazla 50 karakter olmalıdır"),
    priority: z.enum(['low', 'medium', 'high']),
    dueDate: z.date(),
    status: z.enum(['pending', 'in_progress', 'completed']),
    assignedEmployees: z.array(z.string()).nonempty("En az bir çalışan atanmalıdır"), // Array olarak tanımlandı

});

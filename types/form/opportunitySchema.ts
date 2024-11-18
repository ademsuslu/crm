"use client"

import { z } from "zod"


export const opportunityformSchema = z.object({
    name: z.string().min(2, "name en az 2 karakter olmalıdır").max(50, "Ad en fazla 50 karakter olmalıdır"),
    stage: z.enum(['İletişim', 'Teklif', 'Görüşme', 'Kapalı', 'Kazandı', 'Kaybetti']),
    value: z.number().min(1, "Value en az 1 olmalıdır"),
    assignedTo: z.string(),
});

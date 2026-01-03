import { z } from "zod"

// untuk validasi body request
export const createProductSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
  description: z.string().optional(),
})
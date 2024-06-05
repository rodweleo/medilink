import { z } from "zod";

export const ResetPasswordSchema = z
  .object({
    email: z
      .string()
      .email({
        message: "This is not a valid email address!"
      }),
    })
    

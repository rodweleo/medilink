import { z } from "zod";

export const SignInFormSchema = z.object({
    email: z.string().min(8, {
        message: "Email address is too short"
    }).email("This is not a valid email address!"),
    password: z.string().min(8, {
        message: "Password is too short"
    })
})
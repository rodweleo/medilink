import { z } from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(10, {
        message: "Your name is below required length."
    }), 
    email: z.string().min(8, {
        message: "Email address is too short"
    }).email("This is not a valid email address!"),
    password: z.string().min(8, {
        message: "Password is too short"
    }),
    contact: z.string().min(10),
    dob: z.date({
        required_error: "A date of birth is required."
    }).min(new Date("1900-01-01"), {
        message: "Too old"
    }).max(new Date(), {
        message: "Too young!"
    }),
    weight: z.string().min(2),
    height: z.string().min(3),
    bloodGroup: z.string({
        message: "The Blood Group section is required"
    }),
    hasAllergicReactions: z.string({
        message: "This section is required"
    }),
    hasCurrentIllness: z.string({
        message: "This section is required"
    })
})
import { z } from "zod";

const ContactFormSchema = z.object({
    fullName: z.string({
      message: "Full Name is required",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    subject: z.string({
      message: "Subject is required",
    }),
    message: z.string({
      message: "Message is required",
    }),
});

export{
    ContactFormSchema
}
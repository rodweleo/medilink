import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(10, {
    message: "Your name is below required length.",
  }),
  email: z
    .string()
    .min(8, {
      message: "Email address is too short",
    })
    .email("This is not a valid email address!"),
  contact: z.string().min(10),
  dob: z
    .date({
      required_error: "A date of birth is required.",
    })
    .min(new Date("1920-01-01"), {
      message: "Too old",
    })
    .max(new Date(), {
      message: "Too young!",
    }),
  hasAgreedToTerms: z.boolean({
    message: "Required",
  }),
});

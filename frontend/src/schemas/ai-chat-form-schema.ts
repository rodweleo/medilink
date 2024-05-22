import { z } from "zod";

export const AIChatFormSchema = z.object({
  query: z.string().min(1, {
    message: "The query string is required.",
  }),
});

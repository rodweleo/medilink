import { z } from "zod";

export const BookAppointmentSchema = z.object({
  name: z.string().min(10, {
    message: "Your name is below required length.",
  }),
  email: z.string().email(),
  doctor: z.string(),
  date_of_appointment: z.date(),
  dob: z.date().max(new Date(), {
    message: "Invalid date",
  }),
  time_of_appointment: z.string().refine((val) => {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(val);
  }, "Invalid time format. Use HH:mm."),
  duration: z.string({
    message: "Kindly specify the duration of the appointment.",
  }),
  reason_for_visit: z.string(),
  phoneNumber: z.number().max(12, {
    message: "Phone number is too long",
  }),
});


import { z } from "zod";

export const BookAppointmentSchema = z.object({
    name: z.string().min(10, {
        message: "Your name is below required length."
    }), 
    doa: z.date({
        message: 'Date of Appointment is required'
    }),
    duration: z.string({
        message: 'Kindly specify the duration of the appointment.'
    }),
    reasonForAppointment: z.string()
})
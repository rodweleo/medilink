import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
  } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { BookAppointmentSchema } from "@/schemas/BookAppointmentSchema";
import { Textarea } from "@/components/ui/textarea"

// Type definition for form data
type BookAppointmentFormData = z.infer<typeof BookAppointmentSchema>;

export const BookAppointmentForm = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    //const navigate = useNavigate();
    const { toast } = useToast();

    const form = useForm<BookAppointmentFormData>({
        resolver: zodResolver(BookAppointmentSchema),
        defaultValues: {
            name: "",
            doa: new Date(),
            duration: "0",
            reasonForAppointment: ""
        }
    });

    const onSubmit = async (values: BookAppointmentFormData) => {
        console.log(values)
        setIsSubmitting(true);
        try {
            // Simulate form submission (replace with actual API call)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            form.reset()
            toast({
                description: `Appointment created successfully!`,

            });
            //navigate("/sign-in", { replace: true });
        } catch (error) {
            toast({
                description: `Failed to create account. Please try again.`,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="w-[600px] overflow-y-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardHeader className="space-y sticky top-0 z-20 bg-white">
                        <CardTitle className="text-3xl">Book Appointment</CardTitle>
                        <CardDescription className="font-semibold">
                            Enter your details to book an appointment
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="John Doe" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration of Appointment</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="1 hour" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="doa"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Date of Appointment</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick an Appointment date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        The date of appointment is used to effectively schedule the doctors to attend to your medical needs..
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

<FormField
          control={form.control}
          name="reasonForAppointment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason for Visit</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about the reason for the appointment"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                      
                    
                        
                        
                        
                                  </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-full flex items-center gap-1" type="submit" disabled={isSubmitting}>
                            {isSubmitting && <ClipLoader color="white" size={20} />} Book Appointment
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
};

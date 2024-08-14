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
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Timer } from "lucide-react";
import ContactInfoContainer from "./components/contact-info-container";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail, IoIosPulse } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { ContactFormSchema } from "@/utils/schemas";
const LazyLoadedMapComponent = React.lazy(() => import("@/components/map-component"));


export const ContactUsPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    try {
      // Add your form submission logic here
      console.log(`message sent from ${values.email}`);
      toast({
        variant: "default",
        title: "Message Sent",
        description: "We will get back to you as soon as we can.",
      });
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send the message.",
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full py-10 space-y-10">
      <h1 className="sm:text-5xl font-bold max-w-3xl text-center">
            Get in Touch to book Your First{" "}
            <span className="text-blue-500">Appointment</span>
          </h1>

        <div className="flex flex-wrap gap-10">
          <div className="shadow-md w-[300px] flex flex-col items-center justify-center gap-2.5">
            <MdCall
              size={40}
              className="bg-blue-500/20 text-blue-500 p-2 rounded-full"
            />
            <h1 className="font-bold">+254-734-452-458</h1>
          </div>
          <div className="shadow-md w-[300px] flex flex-col items-center justify-center gap-2.5">
            <IoMdMail
              size={40}
              className="bg-blue-500/20 text-blue-500 p-2 rounded-full"
            />
            <h1 className="font-bold">medilink@gmail.com</h1>
          </div>
          <div className="p-5 shadow-md w-[500px] flex flex-col items-center justify-center gap-2.5">
            <FaLocationDot
              size={40}
              className="bg-blue-500/20 text-blue-500 p-2 rounded-full"
            />
            <h1 className="font-bold text-center">
              123 Healthway Avenue
              <br />
              Suite 400 Nairobi City, HC 56789
            </h1>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold text-2xl sm:text-4xl text-center">
            Directions & Details
          </h1>
          <div className="flex items-center justify-center gap-10 p-10 w-full">
            <div className="w-full max-w-[500px] flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-blue-500 flex items-center font-bold">
                  <IoIosPulse size={40} />
                  <h2>OPEN 9AM - 9PM DAILY</h2>
                </div>
                <h1 className="font-bold sm:text-6xl text-3xl">
                  MediLink Ltd - Kenya
                </h1>
                <div className="space-y-2.5">
                  <div>
                    <h2 className="font-semibold text-xl">Office Hours</h2>
                    <p>9AM - 9PM :- 7 Days a Week</p>
                  </div>
                  <ul className="text-blue-500 font-semibold text-xl space-y-2.5">
                    <li>
                      <a href="#">Call</a>
                    </li>
                    <li>
                      <a href="#">Message</a>
                    </li>
                    <li>
                      <Button className="p-0 m-0 text-xl text-blue-500" variant="link">Get Directions</Button>
                    </li>
                  </ul>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Book Appointment</Button>
            </div>
            <React.Suspense fallback={<div className="animate-pulse h-[400px] w-2/4 bg-slate-200"></div>}>
              <LazyLoadedMapComponent/>
            </React.Suspense>
          </div>
        </div>
      <article>
        <section className="flex flex-wrap justify-center w-full p-5 gap-5">
          <Card className="w-fit">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Feel free to reach out to us. We will get back to you as soon
                    as we can.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Full Name"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Subject"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>

                <CardFooter>
                  <Button type="submit" className="w-full mt-4">
                    Send Message
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <section className="w-fit h-full rounded-xl bg-black text-white flex flex-col p-5">
            <p className="text-xl md:self-start md:text-3xl font-black">
              Information
            </p>
            <ul>
              <li>
                <ContactInfoContainer caption="medilink@gmail.com">
                  <Mail size={24} />
                </ContactInfoContainer>
              </li>
              <li>
                <ContactInfoContainer caption="Monday - Sunday : 8:00 AM - 5:00 PM">
                  <Timer size={24} />
                </ContactInfoContainer>
              </li>
            </ul>
          </section>
        </section>
      </article>
      
    </main>
  );
};

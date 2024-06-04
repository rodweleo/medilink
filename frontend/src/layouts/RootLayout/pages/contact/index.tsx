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
import { Github, Mail, Phone, Timer } from "lucide-react";
import ContactInfoContainer from "./components/contact-info-container";
import { Textarea } from "@/components/ui/textarea";

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
    <main className="min-h-screen flex flex-col justify-center">
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

        <div className="w-fit h-full rounded-xl bg-black text-white flex flex-col p-5">
          <p className="text-xl md:self-start md:text-3xl font-black">
            Information
          </p>
          <ul>
            <li>
              <ContactInfoContainer caption="crypticdefenders@gmail.com">
                <Mail size={24} />
              </ContactInfoContainer>
            </li>
            <li>
              <ContactInfoContainer caption="+254 723 456 789">
                <Phone size={24} />
              </ContactInfoContainer>
            </li>
            <li>
              <ContactInfoContainer caption="cryptic-defenders">
                <Github size={24} />
              </ContactInfoContainer>
            </li>
            <li>
              <ContactInfoContainer caption="Monday - Sunday : 8:00 AM - 5:00 PM">
                <Timer size={24} />
              </ContactInfoContainer>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

import { CardTitle } from "@/components/ui/card";
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

const ContactFormSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().nonempty("Subject is required"),
  message: z.string().nonempty("Message is required"),
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
    <main className="min-h-screen grid grid-cols-2 items-center gap-16 mx-36">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardTitle className="text-5xl">Contact Us</CardTitle>
          <p className="mt-2 text-xl font-semibold text-slate-600">
            Feel free to reach out to us. We will get back to you as soon as we
            can.
          </p>
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
                  <Input type="email" placeholder="Email" {...field} required />
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
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="Message" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4">
            Send Message
          </Button>
        </form>
      </Form>
      <div className="w-full bg-black text-white flex flex-col gap-8 p-12">
        <p className="text-3xl font-black">Information</p>
        <ContactInfoContainer caption="crypticdefenders@gmail.com">
          <Mail size={24} />
        </ContactInfoContainer>
        <ContactInfoContainer caption="+254 723 456 789">
          <Phone size={24} />
        </ContactInfoContainer>
        <ContactInfoContainer caption="cryptic-defenders">
          <Github size={24} />
        </ContactInfoContainer>
        <ContactInfoContainer caption="Monday - Sunday : 8:00 AM - 5:00 PM">
          <Timer size={24} />
        </ContactInfoContainer>
      </div>
    </main>
  );
};

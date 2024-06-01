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
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { SignUpSchema } from "@/schemas/SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useSession } from "@/hooks/useSession";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Type definition for form data
type SignUpFormData = z.infer<typeof SignUpSchema>;

const MAX_STEPS = 2;
export const SignUpForm = () => {
  const { signUp } = useSession();
  const showDialogBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      dob: new Date(),
      hasAgreedToTerms: false,
    },
  });

  const onSubmit = async (values: SignUpFormData) => {
    setIsSubmitting(true);
    try {
      const response = await signUp({ ...values, role: "patient" });
      toast({
        title: "Account creation",
        description: `Account created successfully!`,
      });
      setIsSubmitting(false);

      if (response.status) {
        toast({
          title: "Account creation",
          description: `${response.message}`,
        });
        setTimeout(() => {
          form.reset();
          showDialogBtnRef.current?.click();
        }, 2000);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `${error.response.data.message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="w-[600px]">
        <div className="p-5">
          <Progress
            value={(currentStep / MAX_STEPS) * 100}
            className={`${100 / (2 - currentStep)}%`}
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader className="space-y sticky top-0 z-20 bg-white">
              <CardTitle className="text-3xl">Create Account</CardTitle>
              <CardDescription className="font-semibold">
                Enter your details to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 overflow-y-auto h-fit">
              {currentStep === 1 && (
                <>
                  <h2 className="font-semibold text-lg">
                    Complete Your Personal Information
                  </h2>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="John Doe"
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@gmail.com"
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
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="2547########"
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
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}>
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
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
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Your date of birth is used to calculate your age.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {currentStep === 2 && (
                <article>
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <Button
                      type="button"
                      onClick={() =>
                        currentStep > 1 && setCurrentStep((prev) => prev - 1)
                      }
                      className="p-0 m-0 bg-white hover:bg-white text-black hover:scale-[1.25] transition-all duration-300">
                      <ArrowLeftIcon />
                    </Button>
                    MediLink - ConnectHealth Terms and Conditions
                  </h2>
                  <span>Effective Date: {new Date().toUTCString()}</span>
                  <h3>Welcome to MediLink - ConnectHealth</h3>
                  <p>
                    These Terms and Conditions ("Terms") govern your access to
                    and use of MediLink - ConnectHealth ("MediLink," "we," "us,"
                    or "our"), a health platform designed to tackle the various
                    challenges faced by the healthcare sector, particularly in
                    areas with limited resources and infrastructure.
                  </p>
                  <ul className="list-decimal ml-10">
                    <li>
                      <b>Acceptance of Terms</b> <br /> By accessing or using
                      MediLink, you agree to comply with and be bound by these
                      Terms. If you do not agree to these Terms, you may not use
                      the platform.
                    </li>
                    <li>
                      <b>Services Provided</b>
                    </li>
                    <li>
                      <b>User Accounts</b>
                    </li>
                    <li>
                      <b>Telemedicine Services</b>
                    </li>
                    <li>
                      <b>Electronic Health Records</b>
                    </li>
                    <li>
                      <b>Healthcare Facility Mapping</b>
                    </li>
                    <li>
                      <b>Appointment Scheduling</b>
                    </li>
                    <li>
                      <b>Mobile Access and Offline Functionality</b>
                    </li>
                    <li>
                      <b>Privacy and Data Security</b>
                    </li>
                    <li>
                      <b>User Responsibilities</b>
                    </li>
                    <li>
                      <b>Limitation of Liability</b>
                    </li>
                    <li>
                      <b>Changes to Terms</b>
                    </li>
                    <li>
                      <b>Contact Us</b>
                    </li>
                    <li>
                      <b>Governing Law</b>
                    </li>
                  </ul>
                  <FormField
                    control={form.control}
                    name="hasAgreedToTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              onCheckedChange={field.onChange}
                              checked={field.value}
                              required
                            />
                            <p className="text-sm">
                              By using MediLink, you agree to these Terms and
                              Conditions. Thank you for choosing MediLink -
                              ConnectHealth to enhance your healthcare
                              experience.
                            </p>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full items-center gap-1 flex mt-5"
                    type="submit"
                    disabled={isSubmitting}>
                    {isSubmitting && <ClipLoader color="white" size={20} />}
                    Create Account
                  </Button>
                </article>
              )}
            </CardContent>
            <CardFooter className="flex flex-col">
              {currentStep !== 2 && (
                <Button
                  className="w-full items-center gap-1 flex mt-5"
                  type="button"
                  onClick={() =>
                    currentStep < 2 && setCurrentStep((prev) => prev + 1)
                  }>
                  Next
                </Button>
              )}
              <p className="mt-2 text-xs text-center text-gray-700">
                Already have an account?
                <Button
                  type="button"
                  onClick={() => navigate("/sign-in", { replace: true })}
                  className="p-0 m-0 bg-white hover:bg-white text-blue-600 hover:underline">
                  {" "}
                  Sign In
                </Button>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="hidden" ref={showDialogBtnRef}></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Email Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              We have sent an email to your inbox to confirm the validity of our
              email address. After receiving the email, follow the link provided
              to complete your registration.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => navigate("/sign-in", { replace: true })}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => navigate("/sign-in", { replace: true })}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

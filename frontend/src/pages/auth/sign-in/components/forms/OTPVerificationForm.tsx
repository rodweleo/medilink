import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "@/utils/API_URL";
import moment from "moment";

const FormSchema = z.object({
  user_id: z.string(),
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
  email: z.string().email(),
});

export const OTPVerificationForm = () => {
  const location = useLocation();
  const state = location.state;
  const [isVerifing, setIsVerifing] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user_id: state.user_id,
      otp: "",
      email: state.email,
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsVerifing(true);

    try {
      const response = await axios.post(`${API_URL}/otpVerification`, data);
      setIsVerifing(false);
      if (response.data.status) {
        const res = response.data.data[0];
        const { expires_at } = res;
        if (moment().diff(expires_at, "minutes") > 5) {
          toast({
            title: "Incorrect Credentials",
            description:
              "Your OTP has expired. Please try requesting for another one.",
          });
          form.setError("otp", {
            message: "Your OTP has expired",
          });
        } else {
          navigate("/account", {
            replace: true,
          });
        }
      } else {
        toast({
          title: "Incorrect Credentials",
          description: "Incorrect OTP.",
        });
      }
    } catch (e: any) {
      if (e.response.status === 404) {
        toast({
          title: "Incorrect Credentials",
          description: "Incorrect OTP.",
        });
      }
      setIsVerifing(false);
    }
  };
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="w-fit">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Two-Step Verification</CardTitle>
              <CardDescription>
                A code has been sent to{" "}
                <span className="font-bold italic">{state.email}</span>. <br />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={8}
                        {...field}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                          <InputOTPSlot index={6} />
                          <InputOTPSlot index={7} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Please enter the one-time password sent to your phone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="flex items-center gap-1"
                disabled={isVerifing}>
                {isVerifing && <ClipLoader size={18} color="white" />}
                {isVerifing ? `Verifing` : `Verify`}
              </Button>
              <div className="flex items-center gap-2">
                <p className="text-sm">Not received your code ?</p>
                <Button
                  onClick={() => navigate(-1)}
                  className="p-0 m-0 bg-white hover:bg-white text-blue-500">
                  Resend Code
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </section>
  );
};

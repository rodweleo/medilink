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
import { SignInFormSchema } from "@/schemas/signin_form_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { useSession } from "@/hooks/useSession";

export const SignInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn } = useSession();
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await signIn(values.email, values.password);
      sessionStorage.setItem(
        "CURRENT_USER_PROFILE",
        JSON.stringify(res.profile)
      );
      if (res.status) {
        setIsSubmitting(false);
        if (res.profile.role === "patient") {
          navigate("/patient", {
            replace: true,
          });
        } else if (res.profile.role === "doctor") {
          navigate("/doctor", {
            replace: true,
          });
        } else if (res.profile.role === "admin") {
          navigate("/admin", {
            replace: true,
          });
        }
      } else {
        setIsSubmitting(false);
      }
    } catch (e: any) {
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: e.response.data.message,
      });
    }
  };

  return (
    <Card className="w-[400px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader className="space-y">
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <CardDescription className="font-semibold">
              Enter your email and password to sign in
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="button"
              title="Reset Password"
              className="bg-white text-black text-sm hover:underline text-left w-fit p-0 hover:bg-white"
              onClick={() => navigate("/reset-password")}
            >
              Forgot Password?
            </button>
          </CardContent>
          <CardFooter className="flex flex-col gap-5 w-full">
            <Button
              disabled={isSubmitting}
              className="w-full flex items-center gap-1"
            >
              {isSubmitting && <ClipLoader color="white" size={20} />} Sign In
            </Button>

            <div className="w-full flex items-center gap-5">
              <div className="w-full h-[1px] bg-slate-200" />
              <span className="font-semibold text-slate-500">or</span>
              <div className="w-full h-[1px] bg-slate-200" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center gap-1"
            >
              <img
                src="/assets/images/icons8-google-480.png"
                className="w-4"
                alt="Sign in with Google"
              />
              Sign in with Google
            </Button>
            <p className="text-xs text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <Button
                onClick={() =>
                  navigate("/sign-up", {
                    replace: true,
                  })
                }
                className="p-0 m-0 bg-white hover:bg-white text-blue-600 hover:underline"
              >
                Sign up for free
              </Button>
            </p>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

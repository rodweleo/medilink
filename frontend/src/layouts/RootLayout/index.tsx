import { SignUp } from "@/pages/auth/sign-up";
import { NavLink, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { BookAppointment } from "./pages/book-appointment";
import { Pricing } from "./pages/pricing";
import { SignIn } from "@/pages/auth/sign-in";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "@/utils/API_URL";
import ClipLoader from "react-spinners/ClipLoader";
import { AboutUsPage } from "./pages/about";
import { ContactUsPage } from "./pages/contact";

const formSchema = z.object({
  prompt: z.string().min(2),
});

type ChatProps = {
  prompt: string;
  response: string | number | string[];
};
export const RootLayout = () => {
  const [chatsWithMeli, setChatsWithMeli] = useState<ChatProps[]>(
    JSON.parse(localStorage.getItem("chatsWithMeli")!),
  );
  const [isFetchingResponse, setFetchingResponse] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const { register, handleSubmit } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setFetchingResponse(true);
    const { prompt } = values;
    try {
      const response = await axios.post(`${API_URL}/ai-chat`, {
        prompt: prompt,
      });
      const text = response.data.response;
      setFetchingResponse(false);
      form.reset();
      if (localStorage.getItem("chatsWithMeli")) {
        localStorage.setItem(
          "chatsWithMeli",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("chatsWithMeli")!),
            {
              prompt: prompt,
              response: text,
            },
          ]),
        );
        setChatsWithMeli(JSON.parse(localStorage.getItem("chatsWithMeli")!));
      } else {
        localStorage.setItem(
          "chatsWithMeli",
          JSON.stringify([
            {
              prompt: prompt,
              response: text,
            },
          ]),
        );
        setChatsWithMeli(JSON.parse(localStorage.getItem("chatsWithMeli")!));
      }
    } catch (e) {
      setFetchingResponse(true);
    }
  };
  return (
    <main className="h-full m-0 p-0 fixed w-full overflow-x-hidden">
      <nav className="root-nav-bar flex p-5 w-full items-center bg-white justify-between sticky top-0 h-20 z-50">
        <NavLink to="/">
          <h1 className="font-bold">MediLink</h1>
        </NavLink>
        <ul className="flex gap-10 max-lg:hidden">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
<<<<<<< HEAD
            <NavLink to="/assessments">Assessments</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
=======
            <NavLink to="pricing">Pricing</NavLink>
>>>>>>> 1fa6fdb5962677cc235d041ef57283efc350f729
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
      <section className="h-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
          <Route path="/about-us" element={<main>About us</main>} />
          <Route path="/assessments">
            <Route index element={<Assessments />} />
            <Route path=":id" element={<MentalHealthAssessmentForm />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<main>Contact Us</main>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route
            path="/2factor-authentication"
            element={<OTPVerificationForm />}
          />
=======
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="book-appointment" element={<BookAppointment />} />
>>>>>>> 1fa6fdb5962677cc235d041ef57283efc350f729
        </Routes>
      </section>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2 fixed bottom-0 m-5">
            <ChatBubbleIcon className="animate-pulse" /> <span>Ask AI</span>
            <span className="bg-white h-3 w-3 rounded-full animate-ping"></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] w-2/4">
          <DialogHeader>
            <DialogTitle>Ask Meli</DialogTitle>
            <DialogDescription>
              Make any inquiries pertaining your health here. Click{" "}
              <b className="italic underline">Ask</b> when you're done keying in
              your query.
            </DialogDescription>
          </DialogHeader>

          <Card>
            <CardContent className="flex flex-col gap-5 h-[400px] overflow-y-auto">
              {chatsWithMeli &&
                chatsWithMeli.map((chat) => {
                  return (
                    <>
                      <div className="w-full justify-end flex items-center gap-2 p-1 rounded-l-md rounded-tr-md">
                        {chat.prompt}
                      </div>

                      <div className="w-fit flex items-center gap-2 bg-slate-100 p-1 rounded-r-md rounded-tl-md">
                        {chat.response}
                      </div>
                    </>
                  );
                })}
            </CardContent>
          </Card>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-start gap-5"
          >
            <Textarea
              placeholder="What can I help you with today ?"
              {...register("prompt")}
              required
            />

            <DialogFooter>
              <Button
                type="submit"
                disabled={isFetchingResponse}
                className="flex items-center gap-1"
              >
                {isFetchingResponse && <ClipLoader color="white" size={16} />}
                Ask{isFetchingResponse && "ing"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

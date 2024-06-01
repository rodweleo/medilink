import { SignUp } from "@/pages/auth/sign-up";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { BookAppointment } from "./pages/book-appointment";
import { Pricing } from "./pages/pricing";
import { SignIn } from "@/pages/auth/sign-in";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Assessments } from "./pages/assessments";
import { ChatWithMeliForm } from "./components/forms/ChatWithMeliForm";
import { MentalHealthAssessmentForm } from "./components/forms/MentalHealthAssessmentForm";
import { OTPVerificationForm } from "@/pages/auth/sign-in/components/forms/OTPVerificationForm";

export const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <main className="h-full fixed w-full overflow-x-hidden">
      <nav className="root-nav-bar flex p-5 w-full items-center bg-white justify-between sticky top-0 h-20 z-50">
        <Button
          className="bg-white text-black hover:bg-white"
          onClick={() => navigate("/")}>
          <h1 className="font-bold">MediLink</h1>
        </Button>
        <ul className="flex gap-5 max-lg:hidden">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="assessments">Assessments</NavLink>
          </li>
          <li>
            <NavLink to="pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="contact-us">Contact Us</NavLink>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <NavLink to="sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="sign-up">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
      <section className="h-full p-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about-us" element={<main>About us</main>} />
          <Route path="assessments">
            <Route index element={<Assessments />} />
            <Route path=":id" element={<MentalHealthAssessmentForm />} />
          </Route>
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact-us" element={<main>Contact Us</main>} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route
            path="/2factor-authentication"
            element={<OTPVerificationForm />}
          />
        </Routes>
      </section>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2 fixed bottom-0 right-0 m-5">
            <ChatBubbleIcon className="animate-pulse" /> <span>Ask AI</span>
            <span className="bg-white h-3 w-3 rounded-full animate-ping"></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] w-2/4">
          <ChatWithMeliForm />
        </DialogContent>
      </Dialog>
    </main>
  );
};

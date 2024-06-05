import { SignUp } from "@/pages/auth/sign-up";
import { NavLink, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { BookAppointment } from "./pages/book-appointment";
import { Pricing } from "./pages/pricing";
import { SignIn } from "@/pages/auth/sign-in";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AboutUsPage } from "./pages/about";
import { ContactUsPage } from "./pages/contact";
import { MentalHealthAssessmentForm } from "./components/forms/MentalHealthAssessmentForm";
import { Assessments } from "./pages/assessments";
import { ChatWithMeliForm } from "./components/forms/ChatWithMeliForm";
import { NotFound } from "@/pages/errors/not-found/page";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { Separator } from "@/components/ui/separator";
import Unauthorized from "@/pages/errors/unauthorized/page";

const MobileRootNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-0 border-0 hover:bg-white">
          <CgMenuLeftAlt size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10">
        <SheetHeader>
          <SheetTitle className="text-left">MediLink</SheetTitle>
          <SheetDescription className="text-left">
            Reimagining healthcare services
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-5">
            <li>
              <SheetClose asChild>
                <NavLink to="/">Home</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/about-us">About Us</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/assessments">Assessments</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/pricing">Pricing</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </SheetClose>
            </li>
          </ul>
          <Separator />
          <ul className="flex flex-col gap-5">
            <li>
              <SheetClose asChild>
                <NavLink to="/sign-in">Sign In</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

/**/

const WebRootNav = () => {
  return (
    <>
      <ul className="flex gap-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/assessments">Assessments</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
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
    </>
  );
};
export const RootLayout = () => {
  const { width } = useWindowDimensions();
  return (
    <main className="h-full m-0 p-0 fixed w-full overflow-x-hidden">
      <nav className=" root-nav-bar flex p-5 w-full items-center bg-white justify-between sticky top-0 h-20 z-50">
        <NavLink to="/">
          <h1 className="font-bold">MediLink</h1>
        </NavLink>
        {width > 1120 ? <WebRootNav /> : <MobileRootNav />}
      </nav>

      <section className="h-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route
            path="assessments/depression-assessment"
            element={<MentalHealthAssessmentForm />}
          />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<NotFound />} />
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

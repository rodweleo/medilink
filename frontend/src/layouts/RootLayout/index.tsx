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
import { ResetPassword } from "./pages/reset-password/page";
import { SupportGroups } from "./pages/support-groups/page";
import { Events } from "./pages/events";
import { Call } from "./pages/call";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

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
                <NavLink to="/" className="nav-link">Home</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/about-us" className="nav-link">About Us</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/assessments" className="nav-link">Assessments</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/support-groups" className="nav-link">Support Groups</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/events" className="nav-link">Events</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
              </SheetClose>
            </li>
          </ul>
          <Separator />
          <ul className="flex flex-col gap-5">
            <li>
              <SheetClose asChild>
                <NavLink to="/sign-in" className="nav-link">Sign In</NavLink>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
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
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className="nav-link">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/assessments" className="nav-link">Assessments</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/support-groups" className="nav-link">Support Groups</NavLink>
        </li>
        <li>
          <NavLink to="/events" className="nav-link">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
        </li>
      </ul>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/sign-in" className="nav-link">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
        </li>
      </ul>
    </>
  );
};
export const RootLayout = () => {
  const { width } = useWindowDimensions();
  return (
    <main className="min-h-screen w-full">
      <nav className="flex p-5 w-full items-center bg-white/90 justify-between sticky top-0 h-20 z-50 backdrop-blur-md">
        <NavLink to="/">
          <h1 className="font-bold text-blue-500">MediLink</h1>
        </NavLink>
        {width > 1120 ? <WebRootNav /> : <MobileRootNav />}
      </nav>

      <section className="h-full p-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="events" element={<Events />} />
          <Route path="support-groups" element={<SupportGroups />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route
            path="assessments/depression-assessment"
            element={<MentalHealthAssessmentForm />}
          />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="call" element={<Call />} />
        </Routes>
      </section>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center fixed bottom-0 right-0 m-5">
            <ChatBubbleIcon className="animate-pulse text-3xl" />
            <span className="bg-white h-3 w-3 rounded-full animate-ping absolute top-0 left-0"></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[500px] rounded-xl">
          <ChatWithMeliForm />
        </DialogContent>
      </Dialog>

      <footer className="bg-blue-100 p-5 space-y-4">
        <section className="flex justify-between flex-wrap gap-5">
          <section>
            <h1 className="text-blue-500 font-bold">MediLink</h1>
            <p className="text-sm text-slate-600">Reimagining healthcare delivery services.</p>
          </section>
          <div className="space-y-1">
            <h1 className="text-blue-500 font-bold text-sm">Our Services</h1>
            <ul className="text-slate-500 text-sm list-disc ml-5 space-y-1">
              <li>E-Health Platform</li>
              <li>Remote Patient Monitoring</li>
            </ul>
          </div>
          <ul className="flex gap-4 text-lg">
            <li><button title="Instagram" type="button"><FaInstagram /></button></li>
            <li><button title="Twitter (X)" type="button"><FaXTwitter /></button></li>
            <li><button title="Whatsapp" type="button" className="text-green-600"><FaWhatsapp /></button></li>
          </ul>
        </section>
        <Separator className="w-full bg-slate-300"/>
        <p className="text-center text-sm text-slate-600">&copy; Copyright {new Date().getFullYear()}. All rights reserved. </p>
      </footer>
    </main>
  );
};

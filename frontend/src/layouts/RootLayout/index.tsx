import { SignUp } from "@/pages/auth/sign-up";
import { Link, NavLink, Route, Routes } from "react-router-dom";
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
import React from "react"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/list-item";
import BenefitsOfTherapy from "./pages/benefits-of-therapy";

const HowMedilinkWorks = React.lazy(() => import("./pages/how-medilink-works"))
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
            Comprehensive Care For Your <span>Mental Well-Being</span>
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
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <a href="/how-medilink-works">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              How MediLink Works
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/assessments" title="Assessments">
                Quizzes to aid in faster condition detection
              </ListItem>
              <ListItem href="/support-groups" title="Support Groups">
                Join community of like-minded individuals.
              </ListItem>
              <ListItem href="/benefits-of-therapy" title="Benefits">
                The goodside of having therapy.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/pricing">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/events">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Events
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/contact-us">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
      <ul className="flex gap-5">
        <li>
          <Button className="bg-blue-500 hover:bg-blue-600"><a href="/sign-in">Login</a></Button>
        </li>
        <li>
          <Button variant="outline"><a href="/sign-up">Create Account</a></Button>
        </li>
      </ul>
    </>
  );
};
export const RootLayout = () => {
  const { width } = useWindowDimensions();
  return (
    <main className="min-h-screen w-full">
      <header className="sticky top-0 shadow-blue-200 shadow-sm z-50">
        <section className="bg-blue-500 w-full flex items-center justify-between py-2 px-20">
            <ul className="flex gap-2 text-white">
              <li>
                <button title="Instagram" type="button">
                  <FaInstagram />
                </button>
              </li>
              <li>
                <button title="Twitter (X)" type="button">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button title="Whatsapp" type="button">
                  <FaWhatsapp />
                </button>
              </li>
            </ul>
            <p className="text-white">24/7 HotLine: +2547-359-234-586</p>
            <ul className="flex gap-5 text-white">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Refer</a></li>
            </ul>
        </section>
        <nav className="flex px-20 w-full items-center bg-white/90 justify-between h-14 backdrop-blur-md">
          <NavLink to="/">
            <h1 className="font-bold text-blue-500">MediLink</h1>
          </NavLink>
          {width > 1120 ? <WebRootNav /> : <MobileRootNav />}
        </nav>
      </header>

      <section className="h-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/how-medilink-works" element={<React.Suspense fallback={<p>Loading</p>}>
            <HowMedilinkWorks />
          </React.Suspense>} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/events" element={<Events />} />
          <Route path="/benefits-of-therapy" element={<BenefitsOfTherapy />} />
          <Route path="/support-groups" element={<SupportGroups />} />
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

      <footer className="bg-blue-500 space-y-4">
        <section className="p-10 flex justify-between flex-wrap gap-5">
          <div className="space-y-2.5">
            <div>
              <h1 className="text-white font-bold">MediLink</h1>
              <p className="text-sm text-slate-200">
                Reimagining healthcare delivery services.
              </p>
            </div>
            <ul className="flex gap-4 text-lg text-white">
              <li>
                <button title="Instagram" type="button">
                  <FaInstagram />
                </button>
              </li>
              <li>
                <button title="Twitter (X)" type="button">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button title="Whatsapp" type="button">
                  <FaWhatsapp />
                </button>
              </li>
            </ul>
          </div>
          <div className="text-white space-y-2.5">
            <h2 className="font-semibold">Quick Links</h2>
            <ul className="text-sm text-slate-200 space-y-2.5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/appointment">Appointment</a>
              </li>
            </ul>
          </div>

          <div className="text-white space-y-2.5">
            <h2 className="font-semibold">Our Services</h2>
            <ul className="text-sm text-slate-200 space-y-2.5">
              <li>
                <a href="#">Psychology</a>
              </li>
              <li>
                <a href="#">Nutrition & Dietaries</a>
              </li>
              <li>
                <a href="#">Speech Psychology</a>
              </li>
              <li>
                <a href="#">Drivers Safe Lab</a>
              </li>
            </ul>
          </div>

          <div className="text-white space-y-2.5">
            <h2 className="font-semibold">Our Contact</h2>
            <ul className="text-sm text-slate-200 space-y-2.5">
              <li>
                <a href="#">+1-884563278</a>
              </li>
              <li>
                <a href="#">Open 24 / 7</a>
              </li>
            </ul>
          </div>
        </section>
        <p className="flex justify-between p-2.5 bg-white text-center text-sm text-slate-600">
          <span>&copy; Copyright {new Date().getFullYear()} MediLink.{" "} All rights reserved.</span>{" "}
          <ul className="flex gap-10">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </p>
      </footer>
    </main>
  );
};

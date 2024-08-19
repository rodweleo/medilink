import { SignUp } from "@/pages/auth/sign-up";
import { Route, Routes } from "react-router-dom";
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
import Unauthorized from "@/pages/errors/unauthorized/page";
import { ResetPassword } from "./pages/reset-password/page";
import { SupportGroups } from "./pages/support-groups/page";
import { Events } from "./pages/events";
import { Call } from "./pages/call";
import React from "react"
import BenefitsOfTherapy from "./pages/benefits-of-therapy";
import RootHeader from "@/components/root-header";
import RootFooter from "@/components/root-footer";


const HowMedilinkWorks = React.lazy(() => import("./pages/how-medilink-works"))


export const RootLayout = () => {
  return (
    <main className="min-h-screen w-full">
      <RootHeader/>
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
      <RootFooter/>
    </main>
  );
};

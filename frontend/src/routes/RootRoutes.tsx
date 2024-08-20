import Loader from "@/components/loader"
import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"


const Homepage = lazy(() => import("@/layouts/RootLayout/pages/homepage"))
const AboutUsPage = lazy(() => import("@/layouts/RootLayout/pages/about"))
const HowMedilinkWorks = lazy(() => import("@/layouts/RootLayout/pages/how-medilink-works"));
const Unauthorized = lazy(() => import("@/pages/errors/unauthorized/page"))
const Events = lazy(() => import("@/layouts/RootLayout/pages/events"))
const BenefitsOfTherapy = lazy(() => import("@/layouts/RootLayout/pages/benefits-of-therapy"))
const Pricing = lazy(() => import("@/layouts/RootLayout/pages/pricing"))
const NotFound = lazy(() => import("@/pages/errors/not-found/page"))
const ContactUsPage = lazy(() => import("@/layouts/RootLayout/pages/contact"))
const SupportGroups = lazy(() => import("@/layouts/RootLayout/pages/support-groups/page"))
const Call = lazy(() => import("@/layouts/RootLayout/pages/call"))
const SignIn = lazy(() => import("@/pages/auth/sign-in"))
const SignUp = lazy(() => import("@/pages/auth/sign-up"))
const ResetPassword = lazy(() => import("@/layouts/RootLayout/pages/reset-password/page"))
const BookAppointment = lazy(() => import("@/layouts/RootLayout/pages/book-appointment"))
const Assessments = lazy(() => import("@/layouts/RootLayout/pages/assessments"))
const MentalHealthAssessmentForm = lazy(() => import("@/layouts/RootLayout/components/forms/MentalHealthAssessmentForm"))


export default function RootRoutes() {
    return <Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
        <Loader size={50}/>
    </div>}>
        <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/how-medilink-works" element={<HowMedilinkWorks />} />
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
    </Suspense>
}
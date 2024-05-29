import { SignUp } from "@/pages/auth/sign-up"
import { NavLink, Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/homepage"
import { BookAppointment } from "./pages/book-appointment"
import { Pricing } from "./pages/pricing"
import { SignIn } from "@/pages/auth/sign-in"

export const RootLayout = () => {
    return <main className="h-screen w-full overflow-x-hidden">
        <nav className="root-nav-bar flex p-5 w-full items-center bg-white justify-between sticky top-0 h-20 z-50">
            <NavLink to="/">
                <h1 className="font-bold">MediLink</h1>
            </NavLink>
            <ul className="flex gap-10 max-lg:hidden">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about-us">About Us</NavLink></li>
                <li><NavLink to="pricing">Pricing</NavLink></li>
                <li><NavLink to="contact-us">Contact Us</NavLink></li>
            </ul>
            <ul className="flex gap-5">
                <li><NavLink to="sign-in">Sign In</NavLink></li>
                <li><NavLink to="sign-up">Sign Up</NavLink></li>
            </ul>
        </nav>
        <section className="h-full p-5">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="about-us" element={<main>About us</main>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="contact-us" element={<main>Contact Us</main>}/>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
                <Route path="book-appointment" element={<BookAppointment/>}/>
            </Routes>
        </section>
    </main>
}
import { SignIn } from "@/pages/auth/sign-in"
import { NavLink, Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/homepage"

export const RootLayout = () => {
    return <main className="p-5 h-screen w-full overflow-hidden">
        <nav className="flex w-full justify-between sticky top-0">
            <NavLink to="/">
                <h1 className="font-bold">MediLink</h1>
            </NavLink>
            <ul className="flex gap-10">
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
        <section className="h-screen">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="about-us" element={<main>About us</main>}/>
                <Route path="pricing" element={<main>Pricing</main>}/>
                <Route path="contact-us" element={<main>Contact Us</main>}/>
                <Route path="sign-in" element={<SignIn/>}/>
            </Routes>
        </section>
    </main>
}
import { motion, useScroll, useSpring } from "framer-motion";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { NavLink } from "react-router-dom";
import RootMobileNav from "./root-mobile-nav";
import RootWebNav from "./root-web-nav";
import SocialMediaLinks from "./social-media-links";

export default function RootHeader() {
    const { width } = useWindowDimensions();
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <header className="sticky bg-white top-0 shadow-blue-200 shadow-sm z-50">
            <section className="bg-slate-800 w-full flex flex-wrap items-center justify-between py-2 sm:px-20 px-5">
                <SocialMediaLinks/>
                <p className="text-white text-sm">24/7 Hotline: +254-739-234-586</p>
                <a href="/refer-a-friend" className="text-white">Refer a friend</a>
            </section>
            <nav className="flex px-20 w-full items-center bg-white/90 justify-between h-14 backdrop-blur-md">
                <NavLink to="/">
                    <h1 className="font-bold text-slate-800">MediLink</h1>
                </NavLink>
                {width > 1120 ? <RootWebNav /> : <RootMobileNav />}
            </nav>
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
        </header>
    )
}
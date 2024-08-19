import SocialMediaLinks from "./social-media-links";

export default function RootFooter() {
    return (
        <footer className="bg-slate-950 space-y-4">
            <section className="p-10 flex justify-between flex-wrap gap-5">
                <div className="space-y-2.5">
                    <div>
                        <h1 className="text-white font-bold">MediLink</h1>
                        <p className="text-sm text-slate-200">
                            Reimagining healthcare delivery services.
                        </p>
                    </div>
                    <SocialMediaLinks />
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
            <div className="flex justify-between p-2.5 bg-white text-center text-sm text-slate-600">
                <span>&copy; Copyright {new Date().getFullYear()} MediLink.{" "} All rights reserved.</span>{" "}
                <ul className="flex gap-10">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}
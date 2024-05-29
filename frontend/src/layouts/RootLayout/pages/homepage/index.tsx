import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
export const Homepage = () => {
    const navigate = useNavigate();

    return <main className="min-h-screen">
        <section className="h-screen flex items-center justify-around">
            <div className="flex flex-col gap-10">
                <div className="max-w-[500px]">
                    <h1 className="text-6xl font-bold w-[500px]">ReImagining <span className="text-blue-500">Quality</span> Health Care Delivery</h1>
                    <p className="mt-2 font-semibold text-slate-600">Transforming the patient experience by embracing innovative solutions, ensuring accessibility to care for all, and upholding an unwavering commitment to safety and excellence in healthcare delivery.</p>
                </div>
                <Button onClick={() => navigate("/book-appointment", {
                    replace: true
                })} className="w-fit">Book Appointment</Button>
            </div>
            <img src="https://www.istudiotech.in/wp-content/uploads/2022/03/Healthcare-Powered-by-Automation.png" alt="Re-imagining health care through technology." className="hidden lg:flex"/>
        </section>
    </main>
}
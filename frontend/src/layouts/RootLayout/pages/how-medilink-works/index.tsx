import { Button } from "@/components/ui/button"
import { IoSearch } from "react-icons/io5"
import { GrGrow } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";

const HowMedilinkWorks = () => {
    return <main className="h-screen p-20 ">
    <section className="grid place-items-center sm:grid-cols-2 grid-cols-1">
    <article className="space-y-5 max-w-[500px] ">
        <h1 className="sm:text-5xl font-bold">How MediLink Works</h1>
        <p className="text-slate-500">Introducing MediLink, your dedicated online mental health platform designed to prioritize your emotional well-being. With a user-centered approach, our platform offers a seamless 3-step booking process, ensuring that taking care of your mental health is both convenient and effective.</p>
        <Button>Book Now</Button>
    </article>
    <ul className="space-y-2.5 w-[500px]">
            <li>
              <div className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
                <div className="flex gap-2.5">
                  <IoSearch size={35}/>
                  <div>
                    <h2 className="font-bold text-2xl">Search Therapist</h2>
                    <p className="text-slate-500">
                      MediLink clients who use their insurance save an average of  77% on the cost of  therapy.
                    </p>
                  </div>
                </div>
                
              </div>
            </li>
            <li>
              <div className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
                <div className="flex gap-2.5">
                  <MdOutlineCalendarMonth size={35}/>
                  <div>
                    <h2 className="font-bold text-2xl">Schedule Appointment</h2>
                    <p className="text-slate-500">
                      MediLink clients who use their insurance save an average of  77% on the cost of  therapy.
                    </p>
                  </div>
                </div>
                
              </div>
            </li>
            <li>
              <div className="bg-slate-200 p-5 border-2 border-slate-800 rounded-md">
                <div className="flex gap-2.5">
                  <GrGrow size={35}/>
                  <div>
                    <h2 className="font-bold text-2xl">Start Therapy</h2>
                    <p className="text-slate-500">
                      MediLink clients who use their insurance save an average of  77% on the cost of  therapy.
                    </p>
                  </div>
                </div>
                
              </div>
            </li>
          </ul>
    </section>
    </main>
}

export default HowMedilinkWorks
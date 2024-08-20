import { Button } from "@/components/ui/button"
import { BookingProcessItems } from "@/utils/data";
import BookingProcessCard from "@/components/booking-process-card";

const HowMedilinkWorks = () => {
  return <main className="min-h-screen py-20 w-full px-5">
    <section className="w-full flex flex-wrap justify-center items-center gap-20">
      <article className="space-y-5 max-w-[600px] flex flex-col justify-between h-full ">
        <div className="space-y-2.5">
          <h1 className="sm:text-5xl text-4xl font-bold">How MediLink Works</h1>
          <p className="text-slate-500">Introducing MediLink, your dedicated online mental health platform designed to prioritize your emotional well-being. With a user-centered approach, our platform offers a seamless 3-step booking process, ensuring that taking care of your mental health is both convenient and effective.</p>
        </div>
        <Button className="w-fit px-10">Book Appointment</Button>
      </article>
      <div className="space-y-5">
        <h1 className="sm:text-4xl text-3xl font-bold">Our Booking Processs</h1>
        <ul className="space-y-2.5 w-full h-full relative">
          {
            BookingProcessItems.map((bookingProcess) => (
              <li key={bookingProcess.title} >
                <BookingProcessCard bookingProcess={bookingProcess}/>
              </li>
            ))
          }
        </ul>
      </div>
      <Button className="hidden">Book Appointment</Button>
    </section>
  </main>
}

export default HowMedilinkWorks
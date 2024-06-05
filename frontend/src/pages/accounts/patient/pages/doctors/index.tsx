import { useDoctors } from "@/hooks/useDoctors";
import { DoctorCard } from "@/ui/cards/DoctorCard";

export const Doctors = () => {
  const { doctors } = useDoctors();
  return (
    <main>
      <h1 className="font-bold">Doctors</h1>
      <section className="flex flex-wrap">
        {doctors.map((doctor) => {
          return <DoctorCard doctor={doctor} />;
        })}
      </section>
    </main>
  );
};

import { useDoctors } from "@/hooks/useDoctors";
import { DoctorCard } from "@/ui/cards/DoctorCard";

export const Doctors = () => {
  const { doctors } = useDoctors();
  return (
    <main>
      <h1>Doctors</h1>
      {doctors.map((doctor) => {
        return <DoctorCard doctor={doctor} />;
      })}
    </main>
  );
};

import { usePatient } from "@/hooks/usePatient";
import { AppointmentCard } from "@/ui/cards/AppointmentCard";

export const Appointments = () => {
  const { appointments } = usePatient("33bcd9c0-b465-497e-9ab7-81bcf04729b4");
  return (
    <main className="flex flex-col gap-5 w-full p-2">
      <h1 className="font-bold">Appointments</h1>
      <section className="flex gap-5">
        {appointments.map((appointment, index: number) => {
          return <AppointmentCard appointment={appointment} index={index} />;
        })}
      </section>
    </main>
  );
};

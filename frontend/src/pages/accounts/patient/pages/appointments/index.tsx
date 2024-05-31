import { usePatient } from "@/hooks/usePatient";
import { useSession } from "@/hooks/useSession";
import { AppointmentCard } from "@/ui/cards/AppointmentCard";

export const Appointments = () => {
  const { session } = useSession();
  const { appointments } = usePatient(session?.user.id!);
  return (
    <main className="flex flex-col gap-5 w-full p-2">
      <h1 className="font-bold">Appointments</h1>
      <section className="flex gap-5">
        {appointments.map((appointment) => {
          return <AppointmentCard appointment={appointment} />;
        })}
      </section>
    </main>
  );
};

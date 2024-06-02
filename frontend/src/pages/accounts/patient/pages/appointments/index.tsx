import { usePatient } from "@/hooks/usePatient";
import { useSession } from "@/hooks/useSession";
import { AppointmentCard } from "@/ui/cards/AppointmentCard";

export const Appointments = () => {
  const { user } = useSession();
  const { appointments } = usePatient(user.user_id);
  return (
    <main className="flex flex-col gap-5 w-full">
      <h1 className="font-bold">Appointments</h1>
      <section className="flex gap-5">
        {appointments.map((appointment) => {
          return <AppointmentCard appointment={appointment} />;
        })}
      </section>
      {appointments.length === 0 && (
        <img src="/assets/images/nothing_to_see_here.jpg" />
      )}
    </main>
  );
};

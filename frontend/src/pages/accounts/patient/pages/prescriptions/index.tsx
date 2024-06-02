import { usePatient } from "@/hooks/usePatient";
import { useSession } from "@/hooks/useSession";

export const Prescriptions = () => {
  const { user } = useSession();
  const { prescriptions } = usePatient(user.user_id);
  return (
    <main>
      <h1 className="font-bold">Prescriptions</h1>
      {prescriptions.length === 0 && (
        <img src="/assets/images/nothing_to_see_here.jpg" />
      )}
    </main>
  );
};

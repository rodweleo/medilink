import { AdminAccount } from "@/pages/accounts/admin";
import { PatientAccount } from "@/pages/accounts/patient";
import { DoctorAccount } from "@/pages/accounts/doctor";
import { useSession } from "@/hooks/useSession";
import { redirect } from "react-router-dom";

export const AppLayout = () => {
  const { session } = useSession();

  if (!session) {
    redirect("/sign-in");
  }
  const role: string = "patient";
  if (role === "doctor") {
    return <DoctorAccount />;
  } else if (role === "patient") {
    return <PatientAccount />;
  } else if (role === "admin") {
    return <AdminAccount />;
  }
  return "No account logged in.";
};

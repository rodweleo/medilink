import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { Appointments } from "./pages/appointments";
import { PatientPage } from "./pages/patients";
import { useSession } from "@/hooks/useSession";
import { Button } from "@/components/ui/button";

export const DoctorAccount = () => {
  const { signOut } = useSession();
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex bg-slate-100 p-1 gap-1">
      <nav className="doctor-nav-bar p-2 bg-white rounded-md flex flex-col justify-between">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="appointments">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="hospitals">Hospitals</NavLink>
          </li>
          <li>
            <NavLink to="ambulances">Ambulances</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="settings">Settings</NavLink>
          </li>
          <li>
            <Button
              onClick={() =>
                signOut().then(() => {
                  navigate("/", {
                    replace: true,
                  });
                })
              }
              className="w-full"
            >
              Log out
            </Button>
          </li>
        </ul>
      </nav>
      <section className="bg-white w-full p-2 rounded-md overflow-y-auto">
        <Routes>
          <Route path="dashboard" element={<main>Doctor Homepage</main>} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="hospitals" element={<main>hospitals</main>} />
          <Route path="ambulances" element={<main>Ambulances</main>} />
          <Route path="patients/:id" element={<PatientPage />}></Route>
        </Routes>
      </section>
    </main>
  );
};

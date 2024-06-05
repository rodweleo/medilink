import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./layouts/RootLayout";
import { useSession } from "./hooks/useSession";
import { useEffect } from "react";
import { PatientAccount } from "./pages/accounts/patient";
import { DoctorAccount } from "./pages/accounts/doctor";
import { AdminAccount } from "./pages/accounts/admin";
<<<<<<< HEAD
import ProtectedAuthRoutes from "./providers/protected-routes";
=======
import { NotFound } from "./pages/errors/not-found/page";
>>>>>>> fb510dcfc02d22b55158e5cf34d4afe2c27f9597

function App() {
  const { session } = useSession();
  useEffect(() => {
    if (!session) {
      redirect("/");
    }
  }, [session]);

  return (
    <Routes>
      <Route path="/*" element={<RootLayout />} />
<<<<<<< HEAD
      <Route element={<ProtectedAuthRoutes allowedRoles={["patient"]} />}>
        <Route path="/patient/*" element={<PatientAccount />} />
      </Route>
      <Route element={<ProtectedAuthRoutes allowedRoles={["doctor"]} />}>
        <Route path="/doctor/*" element={<DoctorAccount />} />
      </Route>
      <Route element={<ProtectedAuthRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin/*" element={<AdminAccount />} />
      </Route>
=======
      <Route path="/patient/*" element={<PatientAccount />} />
      <Route path="/doctor/*" element={<DoctorAccount />} />
      <Route path="/admin/*" element={<AdminAccount />} />
      <Route path="*" element={<NotFound />} />
>>>>>>> fb510dcfc02d22b55158e5cf34d4afe2c27f9597
    </Routes>
  );
}

export default App;

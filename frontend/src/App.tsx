import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./layouts/RootLayout";
import { useSession } from "./hooks/useSession";
import { useEffect } from "react";
import { PatientAccount } from "./pages/accounts/patient";
import { DoctorAccount } from "./pages/accounts/doctor";
import { AdminAccount } from "./pages/accounts/admin";
import ProtectedAuthRoutes from "./providers/protected-routes";

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
      <Route element={<ProtectedAuthRoutes allowedRoles={["patient"]} />}>
        <Route path="/patient/*" element={<PatientAccount />} />
      </Route>
      <Route element={<ProtectedAuthRoutes allowedRoles={["doctor"]} />}>
        <Route path="/doctor/*" element={<DoctorAccount />} />
      </Route>
      <Route element={<ProtectedAuthRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin/*" element={<AdminAccount />} />
      </Route>
    </Routes>
  );
}

export default App;

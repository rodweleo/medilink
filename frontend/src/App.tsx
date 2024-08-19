  import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import { RootLayout } from "./layouts/RootLayout";
import { useSession } from "./hooks/useSession";
import { useEffect } from "react";
import { PatientAccount } from "./pages/accounts/patient";
import { DoctorAccount } from "./pages/accounts/doctor";
import { AdminAccount } from "./pages/accounts/admin";
import ProtectedAuthRoutes from "./providers/protected-routes";
import { NotFound } from "./pages/errors/not-found/page";
import { useToast } from "./components/ui/use-toast";
import { BatteryLow } from "lucide-react";

function App() {
  const { session } = useSession();
  const { toast } = useToast()
  useEffect(() => {
    if (!session) {
      redirect("/");
    }


  }, [session]);

  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  useEffect(() => {
    navigator.getBattery().then((battery) => {
      if(battery.level < 15){
        toast({
          variant: "destructive",
          title: (
            <div className="flex items-center gap-1">
              <BatteryLow/>
              Battery Low ({battery.level}%)       
            </div>
          ),
          description: `Kindly plug in your ${isMobile() ? "mobile phone" : "desktop"} to a charging station to avoid disconnection.`
        })
      }
    })
  }, [])

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
      <Route path="/patient/*" element={<PatientAccount />} />
      <Route path="/doctor/*" element={<DoctorAccount />} />
      <Route path="/admin/*" element={<AdminAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

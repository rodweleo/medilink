import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layouts/AppLayout";
import { RootLayout } from "./layouts/RootLayout";
import { useSession } from "./hooks/useSession";
import { useEffect } from "react";

function App() {
  const { session } = useSession();
  useEffect(() => {
    if (!session) {
      redirect("/");
    } else {
      redirect("/account/*");
    }
  }, [session]);

  return (
    <Routes>
      <Route path="/*" element={<RootLayout />} />
      <Route path="/account/*" element={<AppLayout />} />
    </Routes>
  );
}

export default App;

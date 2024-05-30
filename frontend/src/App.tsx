import "./App.css";
import { Toaster } from "./components/ui/toaster";
import { useSession } from "./hooks/useSession";
import { AppLayout } from "./layouts/AppLayout";
import { RootLayout } from "./layouts/RootLayout";

function App() {
  const { session } = useSession();
  return (
    <>
      <Toaster />
      {session ? <AppLayout /> : <RootLayout />}
    </>
  );
}

export default App;

import "./App.css";
import { AppLayout } from "./layouts/AppLayout";
import { RootLayout } from "./layouts/RootLayout";
import { useSession } from "./hooks/useSession";

function App() {
  const { session } = useSession();

  if (session) {
    return <AppLayout />;
  }

  return <RootLayout />;
}

export default App;

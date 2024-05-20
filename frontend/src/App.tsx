import './App.css'
import { AppLayout } from './layouts/AppLayout';
import { RootLayout } from './layouts/RootLayout';

function App() {

  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? <AppLayout/> : <RootLayout/>}
    </>
  )
}

export default App

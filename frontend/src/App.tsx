import './App.css'
import { AppLayout } from './layouts/AppLayout';
import { RootLayout } from './layouts/RootLayout';

function App() {

  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? <AppLayout/> : <RootLayout/>}
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import { AppNavigation } from "./components/Navigation"
import { Appointments } from "@/pages/appointments"

export const AppLayout = () => {
    return <main className="flex w-full">
        <AppNavigation/>
        <Routes>
            <Route path="/home" element={<Appointments/>}/>
        </Routes>
    </main>
}
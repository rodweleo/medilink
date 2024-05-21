import { NavLink, Routes, Route } from "react-router-dom"
import { HealthCareFacilities } from "./pages/healthcare-facilities"
import { HealthcareFacility } from "./pages/healthcare-facilities/HealthcareFacility"

export const PatientAccount = () => {
    return <main className="h-screen w-full flex bg-slate-100 p-1 gap-1">
        <nav className="patient-nav-bar p-2 bg-white rounded-md w-[300px]">
            <ul className="flex flex-col gap-2">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="appointments">Appointments</NavLink></li>
                <li><NavLink to="healthcare-facilities">Healthcare Facilities</NavLink></li>
                <li><NavLink to="ambulances">Ambulances</NavLink></li>
            </ul>

            
        </nav>
        <section className="bg-white w-full p-2 rounded-md">
            <Routes>
            <Route path="/" element={<main>Patient Homepage</main>}/>
                <Route path="appointments" element={<main>Appointments</main>}/>
                <Route path="healthcare-facilities" element={<HealthCareFacilities/>} />
                <Route path="healthcare-facilities/:id" element={<HealthcareFacility/>} />
                <Route path="ambulances" element={<main>Ambulances</main>}/>
            </Routes>
        </section>
    </main>
}
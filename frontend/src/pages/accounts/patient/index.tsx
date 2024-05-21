import { NavLink, Routes, Route } from "react-router-dom"

export const PatientAccount = () => {
    return <main className="h-screen w-full flex bg-slate-100 p-1 gap-1">
        <nav className="patient-nav-bar p-2 bg-white rounded-md">
            <ul className="flex flex-col gap-2">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="appointments">Appointments</NavLink></li>
                <li><NavLink to="hospitals">Hospitals</NavLink></li>
                <li><NavLink to="ambulances">Ambulances</NavLink></li>
            </ul>

            
        </nav>
        <section className="bg-white w-full p-2 rounded-md">
            <Routes>
            <Route path="/" element={<main>Patient Homepage</main>}/>
                <Route path="appointments" element={<main>Appointments</main>}/>
                <Route path="hospitals" element={<main>hospitals</main>}/>
                <Route path="ambulances" element={<main>Ambulances</main>}/>
            </Routes>
        </section>
    </main>
}
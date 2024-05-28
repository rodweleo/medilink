import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSession } from "@/hooks/useSession";
import { NavLink, useNavigate, Routes, Route } from "react-router-dom"
import { Patients } from "./pages/patients";
import { Monitoring } from "./pages/monitoring";

export const AdminAccount = () => {
    const { signOut } = useSession();
    const navigate = useNavigate();

    return <main className="h-screen w-full flex bg-slate-100 p-1 gap-1">
        <nav className="admin-nav-bar overflow-y-auto p-2 bg-white rounded-md w-[300px]">
            <ul className="flex flex-col gap-2">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="appointments">Appointments</NavLink></li>
                <li><NavLink to="request">Requests</NavLink></li>
                <li><NavLink to="hospitals">Hospitals</NavLink></li>
                <li><NavLink to="doctors">Doctors</NavLink></li>
                <li><NavLink to="patients">Patients</NavLink></li>
                <li><NavLink to="ambulances">Ambulances</NavLink></li>
                <li><NavLink to="lab-results">Lab Results</NavLink></li>
                <li><NavLink to="medical-records">Medical Records</NavLink></li>
                <li><NavLink to="prescriptions">Prescriptions</NavLink></li>
            </ul>
            <Separator className="my-4"/>
            <ul>
                <li><NavLink to="monitoring">System monitoring</NavLink></li>
                <li><NavLink to="reports">Reports</NavLink></li>
                <li><NavLink to="users">User management</NavLink></li>
            </ul>

            <ul>
                <li><NavLink to="settings">Settings</NavLink></li>
                <li><Button onClick={() => signOut().then(() => {
                    window.location.reload()
                    navigate("/", {
                        replace: true
                    })
                })} className="w-full">Log out</Button></li>
            </ul>

            
        </nav>
        <section className="bg-white overflow-y-auto w-full p-2 rounded-md">
            <Routes>
            <Route path="/" element={<main>Admin Homepage</main>}/>
                <Route path="appointments" element={<main>Appointments</main>}/>
                <Route path="hospitals" element={<main>hospitals</main>}/>
                <Route path="patients" element={<Patients/>}/>
                <Route path="ambulances" element={<main>Ambulances</main>}/>
                <Route path="users" element={<main>Users</main>}/>
                <Route path="monitoring" element={<Monitoring/>}/>
            </Routes>
        </section>
    </main>
}
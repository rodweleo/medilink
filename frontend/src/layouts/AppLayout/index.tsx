import { AdminAccount } from "@/pages/accounts/admin"
import { PatientAccount } from "@/pages/accounts/patient"
import { DoctorAccount } from "@/pages/accounts/doctor"



export const AppLayout = () => {
    const role: string = "doctor"
    if(role === "doctor"){
        return <DoctorAccount/>
    }else if(role === "patient"){
        return <PatientAccount/>
    }else if(role === "admin"){
        return <AdminAccount/>
    }
    return "No account logged in."
}
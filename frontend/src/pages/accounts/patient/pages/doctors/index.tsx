import { useDoctors } from "@/hooks/useDoctors";
import { DoctorCard } from "@/ui/cards/DoctorCard"

export const Doctors = () => {
    const { doctors} = useDoctors();
    return <main>
        <h1>Doctors List</h1>
        {doctors.map((doctor, index: number) => {
            return <DoctorCard doctor={doctor} index={index}/>
        })}
        
    </main>
}
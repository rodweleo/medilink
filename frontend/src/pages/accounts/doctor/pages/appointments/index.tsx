import { useDoctor } from "@/hooks/useDoctor";
import { useSession } from "@/hooks/useSession";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { BiDotsVertical } from "react-icons/bi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
    const { session } = useSession()
    const { appointments } = useDoctor(session?.user.id);
    const navigate = useNavigate();
    
    return <main className="w-full p-2">
        <h1>Appointments</h1>
        <Table>
            <TableCaption>A list of your appointments.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Appointment ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Additional Notes</TableHead>
                <TableHead>Date of Appointment</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Completed</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {appointments.map((appointment) => {
                    return <TableRow>
                    <TableCell>{appointment.id}</TableCell>
                    <TableCell>{appointment.patient_id}</TableCell>
                    <TableCell>{appointment.notes}</TableCell>
                    <TableCell>{appointment.date_of_appointment}</TableCell>
                    <TableCell>{appointment.duration}</TableCell>
                    <TableCell>{appointment.isCompleted}</TableCell>
                    <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button><BiDotsVertical/></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => navigate(`/patients/${appointment.patient_id}`)}>View Patient Profile</DropdownMenuItem>
                            <DropdownMenuItem>View Patient Medical Records</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                        
                    </TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
    </main>
}
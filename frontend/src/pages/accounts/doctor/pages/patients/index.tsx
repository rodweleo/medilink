import { usePatient } from "@/hooks/usePatient"
import { useParams } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import moment from "moment"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const PatientPage = () => {
    const { id } = useParams()
    const { patientDetails, medicalRecords } = usePatient(id)
    return <main>
        <h1 className="font-bold text-xl">Patient Overview</h1>
        <Card className="w-fit">
            <CardHeader>
                <h2 className="font-semibold">Personal Information</h2>
                <img src="" className="bg-slate-200 w-[100px] h-[100px] rounded-full" alt={patientDetails?.name}/>
                <CardTitle>{patientDetails?.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-5">
                <div>
                    <h2 className="text-xs">Mobile Number</h2>
                    <span>{patientDetails?.phone_number}</span>
                </div>
                <div>
                    <h2 className="text-xs">Email Address</h2>
                    <span>{patientDetails?.email}</span>
                </div>
                
                <div>
                    <h2 className="text-xs">Date of Birth</h2>
                    <span>{patientDetails?.date_of_birth}</span>
                </div>
                <div>
                    <h2 className="text-xs">Age</h2>
                    <span>{moment().diff(patientDetails?.date_of_birth, "years")} years</span>
                </div>
            </CardContent>
            <CardFooter>
            <Button>Send Message</Button>
            </CardFooter>
        </Card>

        <Card className="w-full">
            <CardHeader>
                <h2 className="font-semibold">Medical Records</h2>
            </CardHeader>
            <CardContent className="w-full">
            <Table className="w-full">
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
                {medicalRecords.map((record) => {
                    return <TableRow>
                    <TableCell>{record.id}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
            </CardContent>
        </Card>
    </main>
}
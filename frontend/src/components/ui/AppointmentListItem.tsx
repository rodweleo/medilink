import { Button } from "react-day-picker"
import { TableRow, TableCell } from "./table"
import { BiDotsVertical } from "react-icons/bi"

export const AppointmentListItem = ({appointment}) => {
    return <TableRow>
    <TableCell className="font-medium">{appointment.id}</TableCell>
    <TableCell>{appointment.patient_id}</TableCell>
    <TableCell>{appointment.notes}</TableCell>
    <TableCell>{appointment.date_of_appointment}</TableCell>
    <TableCell>{appointment.duration}</TableCell>
    <TableCell>{appointment.isCompleted}</TableCell>
    <TableCell><Button><BiDotsVertical/></Button></TableCell>
</TableRow>
}
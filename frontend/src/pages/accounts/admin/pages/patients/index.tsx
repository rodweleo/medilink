import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { usePatients } from "@/hooks/usePatients"
import moment from "moment"
  
export const Patients = () => {
    const { patients } = usePatients()

    return <main>
        <h1>Patients</h1>
        <Table>
      <TableCaption>A list of registered patients.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[350px]">Patient ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patients.map((patient) => (
          <TableRow key={patient.id}>
            <TableCell className="font-medium">{patient.id}</TableCell>
            <TableCell className="font-medium">{patient.name}</TableCell>
            <TableCell className="font-medium">{patient.gender}</TableCell>
            <TableCell className="font-medium">{moment().diff(patient.date_of_birth, "years")}</TableCell>
            <TableCell className="font-medium">{moment(patient.created_at).format("LLL")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">{patients.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </main>
}
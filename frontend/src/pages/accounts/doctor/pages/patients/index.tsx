import { usePatient } from "@/hooks/usePatient"
import { useParams } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { BiDotsVertical } from "react-icons/bi";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import axios from "axios";
import { API_URL } from "@/utils/API_URL";
import ClipLoader from "react-spinners/ClipLoader";

export const PatientPage = () => {
  const { id } = useParams();
  const { patientDetails, medicalRecords } = usePatient(id!);
  const [showDialog, setShowDialog] = useState(false);
  const [sendingAccessRequest, setSendingAccessRequest] = useState(false);
  const requestRecordAccess = async (
    recordId: string | number,
    patientEmail?: string
  ) => {
    setSendingAccessRequest(true);
    try {
      const response = await axios.post(
        `${API_URL}/medicalRecords/requestAccess`,
        {
          recordId: recordId,
          patientEmail: patientEmail,
          reason: `I'd like to view your medical records for proper preparation for our next appointment.`,
        }
      );

      if (response.data.status) {
        setSendingAccessRequest(false);
        alert(response.data.message);
        setShowDialog(false);
      }
    } catch (error) {
      console.log(error);
      setSendingAccessRequest(false);
      setShowDialog(false);
    }
  };
  return (
    <main className="flex flex-col gap-5 w-full h-full">
      <h1 className="font-bold text-xl">Patient Overview</h1>
      <Card className="w-fit">
        <CardHeader>
          <h2 className="font-semibold">Personal Information</h2>
          <img
            src=""
            className="bg-slate-200 w-[100px] h-[100px] rounded-full"
            alt={patientDetails?.name}
          />
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
            <span>
              {moment().diff(patientDetails?.date_of_birth, "years")} years
            </span>
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
                <TableHead>Record ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Additional Notes</TableHead>
                <TableHead>Date of Appointment</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Access</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalRecords.map((record) => {
                return (
                  <TableRow>
                    <TableCell>{record.id}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      {" "}
                      {record.isLocked ? (
                        <span>Locked</span>
                      ) : (
                        <span>Not locked</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <BiDotsVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => {
                              record.isLocked && setShowDialog(true);
                            }}
                          >
                            View Record
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            View Patient Medical Records
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <AlertDialog open={showDialog}>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Locked Medical Record
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This medical record is locked. You can request
                              access to view it.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setShowDialog(false)}
                            >
                              Close
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                requestRecordAccess(
                                  record.id,
                                  patientDetails?.email
                                )
                              }
                            >
                              {sendingAccessRequest ? (
                                <ClipLoader size={20} color="white" />
                              ) : (
                                "Request Access"
                              )}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};
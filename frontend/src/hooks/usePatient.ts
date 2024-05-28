import { useEffect, useState } from "react";
import { fetchPatientAppointments } from "../pages/accounts/functions/fetchPatientAppointments";
import { fetchPatientPrescriptions } from "../pages/accounts/functions/fetchPatientPrescriptions";
import { Prescription } from "@/utils/types";
import { fetchPatientDetails } from "@/functions/fetchPatientDetails";

export const usePatient = (patientId: string) => {
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [patientDetails, setPatientDetails] = useState(null);
  useEffect(() => {
    fetchPatientAppointments(patientId).then((response) => {
      setAppointments(response.appointments);
    });
    fetchPatientPrescriptions(patientId).then((response) => {
      setPrescriptions(response.prescriptions);
    });

    fetchPatientDetails(patientId).then((response) => {
      setPatientDetails(response.patients[0])
    })
  }, [patientId]);
  return {
    appointments,
    prescriptions,
    patientDetails
  };
};

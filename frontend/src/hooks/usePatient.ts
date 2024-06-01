import { useEffect, useState } from "react";
import { fetchPatientAppointments } from "../pages/accounts/functions/fetchPatientAppointments";
import { fetchPatientPrescriptions } from "../pages/accounts/functions/fetchPatientPrescriptions";
import {
  MedicalRecord,
  Prescription,
  Patient,
  Appointment,
} from "@/utils/types";
import { fetchPatientDetails } from "@/functions/fetchPatientDetails";
import { fetchPatientMedicalRecords } from "@/functions/fetchPatientMedicalRecords";

export const usePatient = (patientId: string) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [patientDetails, setPatientDetails] = useState<Patient | null>(null);
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    fetchPatientAppointments(patientId).then((response) => {
      setAppointments(response.appointments);
    });
    fetchPatientPrescriptions(patientId).then((response) => {
      setPrescriptions(response.prescriptions);
    });

    fetchPatientDetails(patientId).then((response) => {
      setPatientDetails(response.patients[0]);
    });

    fetchPatientMedicalRecords(patientId).then((response) => {
      setMedicalRecords(response.medicalRecords);
    });
  }, [patientId]);

  return {
    appointments,
    prescriptions,
    patientDetails,
    medicalRecords,
  };
};

import { useEffect, useState } from "react";
import { fetchPatientAppointments } from "../pages/accounts/functions/fetchPatientAppointments";
import { fetchPatientPrescriptions } from "../pages/accounts/functions/fetchPatientPrescriptions";

export const usePatient = (patientId: string) => {
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(() => {
    fetchPatientAppointments(patientId).then((response) => {
      setAppointments(response.appointments);
    });
    fetchPatientPrescriptions(patientId).then((response) => {
      setPrescriptions(response.prescriptions);
    });
  }, []);
  return {
    appointments,
    prescriptions,
  };
};

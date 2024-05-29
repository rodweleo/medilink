import { useEffect, useState } from "react";
import { fetchDoctorInfo } from "../pages/accounts/functions/fetchDoctorInfo";
import { Doctor, Appointment } from "@/utils/types";
import { fetchDoctorAppointments } from "@/functions/fetchDoctorAppointments";

export const useDoctor = (doctorId: string | undefined) => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetchDoctorInfo(doctorId!).then((response) => {
      setDoctor(response.doctors[0]);
    });
    fetchDoctorAppointments(doctorId!).then((response) => {
      setAppointments(response.appointments)
    })
  }, [doctorId]);

  return { doctor, appointments };
};

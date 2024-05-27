import { useEffect, useState } from "react";
import { fetchDoctorInfo } from "../pages/accounts/functions/fetchDoctorInfo";
import { Doctor } from "@/utils/types";

export const useDoctor = (doctorId: string | number) => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    fetchDoctorInfo(doctorId).then((response) => {
      setDoctor(response.doctors[0]);
    });
  }, []);

  return { doctor };
};

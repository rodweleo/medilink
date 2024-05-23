import { useEffect, useState } from "react";
import { fetchDoctorInfo } from "../functions/fetchDoctorInfo";

export const useDoctor = (doctorId: string) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchDoctorInfo(doctorId).then((response) => {
      setDoctor(response.doctors[0]);
    });
  }, []);

  return { doctor };
};

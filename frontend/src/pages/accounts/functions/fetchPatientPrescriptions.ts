import { API_URL } from "@/utils/API_URL";
import axios from "axios";

export const fetchPatientPrescriptions = async (patientId: string) => {
  try {
    const response = await axios.get(`${API_URL}/prescriptions`, {
      params: {
        patient_id: patientId,
      },
    });

    return response.data;
  } catch (e) {}
};

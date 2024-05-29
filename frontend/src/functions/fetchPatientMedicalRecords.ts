import { API_URL } from "@/utils/API_URL";
import axios from "axios";

export const fetchPatientMedicalRecords = async (patientId: string) => {
  try {
    const response = await axios.get(`${API_URL}/medicalRecords`, {
      params: {
        patient_id: patientId,
      },
      headers: {
        "Access-Control-Allow-Origin": "*"
    }
    });

    return response.data;
  } catch (e) {
    return e
  }
};

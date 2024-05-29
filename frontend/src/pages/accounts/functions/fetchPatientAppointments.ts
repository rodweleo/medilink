import { API_URL } from "@/utils/API_URL";
import axios from "axios";

export const fetchPatientAppointments = async (patientId: string) => {
  try {
    const response = await axios.get(`${API_URL}/appointments`, {
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

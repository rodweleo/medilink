import { API_URL } from "@/utils/API_URL";
import axios from "axios";

export const fetchDoctorInfo = async (doctorId: string | number) => {
  try {
    const response = await axios.get(`${API_URL}/doctors`, {
      params: {
        doctorId: doctorId,
      },
    });
    return response.data;
  } catch (e) {}
};

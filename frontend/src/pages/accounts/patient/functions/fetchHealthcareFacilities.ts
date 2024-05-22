import { API_URL } from "@/utils/API_URL";
import axios from "axios"
export const fetchHealthcareFacilities = async () => {
    try {
        const response = await axios.get(`${API_URL}/healthcare-facilities`);
        return response.data.healthcare_facilities;
    } catch (error) {
        return error
    }
}
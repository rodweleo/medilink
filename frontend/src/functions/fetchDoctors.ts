import { API_URL } from "@/utils/API_URL"
import axios from "axios"

export const fetchDoctors = async () => {
    const response = await axios.get(`${API_URL}/doctors`, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
    return response.data
}
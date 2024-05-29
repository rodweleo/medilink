import { API_URL } from "@/utils/API_URL"
import axios from "axios"

export const fetchDoctorAppointments = async (doctor_id: string | number) => {
    try{
        const response = await axios.get(`${API_URL}/appointments`, {
            params: {
                doctor_id: doctor_id
            },
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })

        return response.data
    }catch(e){
        return e
    }
}
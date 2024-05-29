import { API_URL } from "@/utils/API_URL";
import axios from "axios";

export const fetchAllPatients = async (userId?: string) => {
    try{
        const response = await axios.get(`${API_URL}/patients`, {
            headers:{
                Authorization : `Bearer ${userId}`,
                "Access-Control-Allow-Origin": "*"
            }
        });
        return response.data
    }catch(e){
        return e
    }
}
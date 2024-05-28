import { API_URL } from "@/utils/API_URL"
import axios from "axios"

export const fetchServerLogs = async () => {
    try{
        const response = await axios.get(`${API_URL}/serverLogs`)
        return response.data
    }catch(e){
        return e
    }
}
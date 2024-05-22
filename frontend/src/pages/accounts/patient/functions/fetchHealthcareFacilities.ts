import axios from "axios"
export const fetchHealthcareFacilities = async () => {
    try {
        const response = await axios.get(`api-medilink.vercel.app/healthcare-facilities`);
        return response.data.healthcare_facilities;
    } catch (error) {
        return error
    }
}
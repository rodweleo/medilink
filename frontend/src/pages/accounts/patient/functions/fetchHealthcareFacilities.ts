import axios from "axios"
export const fetchHealthcareFacilities = async () => {
    try {
        const response = await axios.get(`http://localhost:8081/healthcare-facilities`);
        return response.data.healthcare_facilities;
    } catch (error) {
        return error
    }
}
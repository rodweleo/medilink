import { fetchDoctors } from "@/functions/fetchDoctors"
import { useEffect, useState } from "react"

export const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        fetchDoctors().then((response) => {
            setDoctors(response.doctors)
        })
    }, [])
    return {
        doctors
    }
}
import { fetchDoctors } from "@/functions/fetchDoctors"
import { Doctor } from "@/utils/types"
import { useEffect, useState } from "react"

export const useDoctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([])
    
    useEffect(() => {
        fetchDoctors().then((response) => {
            setDoctors(response.doctors)
        })
    }, [])
    return {
        doctors
    }
}
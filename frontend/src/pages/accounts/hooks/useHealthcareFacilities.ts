import { useState, useEffect } from "react"
import { fetchHealthcareFacilities } from "../patient/functions/fetchHealthcareFacilities"
import { HealthcareFacility } from "@/utils/types"

export const useHealthcareFacilities = () => {
    const [healthcareFacilities, setHealthcareFacilities] = useState<HealthcareFacility[]>([])

    useEffect(() => {
        fetchHealthcareFacilities().then((healthcare_facilities: HealthcareFacility[]) => {
            setHealthcareFacilities(healthcare_facilities)
        })
    }, [])

    return {
        healthcareFacilities
    }
}
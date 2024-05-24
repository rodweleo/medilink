import { HealthcareFacilityCard } from "@/ui/HealthcareFacilityCard"
import { useHealthcareFacilities } from "../../../../../hooks/useHealthcareFacilities"

export const HealthCareFacilities = () => {
    const {healthcareFacilities} = useHealthcareFacilities()
    
    
    return <main>
        <h1>List of Health Care Facilities</h1>
        {healthcareFacilities.map((healthcareFacility) => {
            return <HealthcareFacilityCard healthcareFacility={healthcareFacility}/>
        })}
    </main>

}
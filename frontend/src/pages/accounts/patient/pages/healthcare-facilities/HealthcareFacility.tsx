import { useLocation } from "react-router-dom";

export const HealthcareFacility = () => {
    const location = useLocation();
    const {healthcareFacility} = location.state;
    
    return <main>
        <h1 className="font-bold">Facility Details</h1>

        <h2 className="text-blue-500 font-semibold">Overview of Specializations</h2>
        <ul className="list-decimal ml-4">
            {healthcareFacility.services.map((service: string) => {
                return <li>{service}</li>
            })}
        </ul>
    </main>
}
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { HealthcareFacility } from "@/utils/types"
import { useNavigate } from "react-router-dom"

export const HealthcareFacilityCard = ({healthcareFacility}: {
    healthcareFacility : HealthcareFacility
}) => {
    const navigate = useNavigate();

    return <Card className="flex w-[650px] cursor-pointer" key={healthcareFacility.id}>
            <img src="https://www.eahealth.org/sites/www.eahealth.org/files/content/organisations/images/2018-02-25/Kenyata%20photos%201.jpg" className="w-[250px] p-2 rounded-2xl" alt={healthcareFacility.name}/>
            <div className="w-full">
            <CardHeader>
                <CardTitle>{healthcareFacility.name}</CardTitle>
                <CardDescription>{healthcareFacility.motto}</CardDescription>
            </CardHeader>
            <CardContent>
                <h2 className="font-semibold">Services </h2>
                {healthcareFacility.services.slice(0,5).map((service: string) => {
                    return service
                }).join(" , ")}.
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-5">
                <Button>Contact Hospital</Button>
                <Button onClick={() => navigate(`${healthcareFacility.id}`, {
                    state: {
                        healthcareFacility: healthcareFacility
                    }
                })}>View Hospital Details</Button>
            </CardFooter>
            </div>
        </Card>
}
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export const DoctorCard = () => {
    return <Card className="w-fit">
        <CardHeader>
           <CardTitle>John Doe</CardTitle>
           <CardDescription>Dentist</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Hospital Road, Nairobi - Kenya.</p>
            <span className="text-blue-500 font-bold">Open</span>
        </CardContent>
        <CardFooter>
            <Button>Make Appointment</Button>
        </CardFooter>

    </Card>
}
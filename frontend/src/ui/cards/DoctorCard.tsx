import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doctor } from "@/utils/types";

export const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Card className="w-fit" key={doctor.id}>
      <CardHeader>
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription>{doctor.practice}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hospital Road, Nairobi - Kenya.</p>
        <span className="text-blue-500 font-bold">Open</span>
      </CardContent>
      <CardFooter>
        <Button>Book Appointment</Button>
      </CardFooter>
    </Card>
  );
};

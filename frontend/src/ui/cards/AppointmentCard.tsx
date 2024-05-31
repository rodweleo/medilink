import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDoctor } from "@/hooks/useDoctor";
import { Appointment } from "@/utils/types";
import moment from "moment";
import { CiCalendar } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";

export const AppointmentCard = ({
  appointment,
}: {
  appointment: Appointment;
}) => {
  const { doctor } = useDoctor(appointment.doctor_id);
  return (
    <Card className="w-[350px]" key={appointment.id}>
      <CardHeader>
        <CardTitle>{doctor?.name}</CardTitle>
        <CardDescription>{doctor?.practice}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex items-center gap-1">
          <CiCalendar />
          {moment(appointment.date_of_appointment).format("LL")}
        </div>
        <div className="flex items-center gap-1">
          <CiClock1 />
          <p className="">
            {moment(appointment.from_time).format("HH:mm ")}- &nbsp;
            {moment(appointment.to_time).format("HH:mm")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

import { Button } from "@/components/ui/button";
import { AppointmentCard } from "@/ui/cards/AppointmentCard";
import { usePatient } from "@/pages/accounts/hooks/usePatient";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsPrescription } from "react-icons/bs";
import { useHealthNews } from "@/pages/accounts/hooks/useHealthNews";
export const MyHealth = () => {
  const { appointments, prescriptions } = usePatient(
    "33bcd9c0-b465-497e-9ab7-81bcf04729b4"
  );
  const { news } = useHealthNews();

  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-5">
      <Card className=" bg-gradient-to-br from-blue-500 to-blue-100">
        <CardHeader>
          <h1 className="text-sm">Welcome Back,</h1>
          <CardTitle>John Doe</CardTitle>
        </CardHeader>
      </Card>
      <section className="flex flex-wrap w-full justify-between">
        <section>
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Upcoming Appointments</h1>
            <Button
              onClick={() => navigate("/appointments")}
              className="p-0 bg-white text-blue-500 font-bold hover:bg-white">
              View All
            </Button>
          </div>
          <div className="flex gap-5">
            {appointments.map((appointment, index: number) => {
              return (
                <AppointmentCard appointment={appointment} index={index} />
              );
            })}
          </div>
        </section>
        <section>
          <h1 className="font-bold">Current Medications</h1>
          <ul>
            {prescriptions.map((prescription) => {
              return (
                <li className="flex items-center gap-1">
                  <BsPrescription />
                  {prescription.drug}
                </li>
              );
            })}
          </ul>
        </section>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="font-bold">Good to Know</h1>
        <div className="flex flex-col gap-5">
          {news.slice(0, 2).map((news_piece) => {
            return (
              <Card className="w-[500px]">
                <div className="flex">
                  <img src={news_piece.top_image} className="w-48" />
                  <CardHeader>
                    <CardTitle>{news_piece.title}</CardTitle>
                    <CardDescription className=" line-clamp-4">
                      {news_piece.short_description}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
};

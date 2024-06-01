import { Button } from "@/components/ui/button";
import { AppointmentCard } from "@/ui/cards/AppointmentCard";
import { usePatient } from "@/hooks/usePatient";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsPrescription } from "react-icons/bs";
import { useHealthNews } from "@/hooks/useHealthNews";
import { useSession } from "@/hooks/useSession";

export const MyHealth = () => {
  const { session } = useSession();
  const { appointments, prescriptions } = usePatient(session?.user.id!);
  const { news } = useHealthNews();

  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-5 h-full">
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
          <div className="flex flex-wrap gap-5">
            {appointments.map((appointment) => {
              return <AppointmentCard appointment={appointment} />;
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
          {news
            ? news
                .slice(0, 2)
                .map(
                  (news_piece: {
                    top_image: string;
                    title: string;
                    short_description: string;
                  }) => {
                    return (
                      <Card className="w-[500px]">
                        <div className="flex">
                          <img
                            src={news_piece.top_image}
                            className="w-48 p-5 rounded-[30px]"
                            alt={news_piece.title}
                          />
                          <CardHeader>
                            <CardTitle>{news_piece.title}</CardTitle>
                            <CardDescription className=" line-clamp-4">
                              {news_piece.short_description}
                            </CardDescription>
                          </CardHeader>
                        </div>
                      </Card>
                    );
                  }
                )
            : ""}
        </div>
      </section>
    </main>
  );
};

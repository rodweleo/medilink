import { Button } from "@/components/ui/button";
import { AppointmentCard } from "@/ui/cards/AppointmentCard";
import { usePatient } from "@/hooks/usePatient";
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
import { useHealthNews } from "@/hooks/useHealthNews";
import { useSession } from "@/hooks/useSession";
import { LuCalendarClock } from "react-icons/lu";
import { useDoctors } from "@/hooks/useDoctors";
import { FaUserDoctor } from "react-icons/fa6";
import { TbUrgent } from "react-icons/tb";
import Chart from "react-apexcharts";

const series = [
  {
    name: "Temperature in Fahrenheit",
    data: [43, 53, 50, 57],
  },
];

const options = {
  chart: {
    id: "simple-bar",
  },
  xaxis: {
    categories: [1, 2, 3, 4],
  },
};
export const MyHealth = () => {
  const { user } = useSession();
  const { appointments, prescriptions } = usePatient(user.user_id);
  const { doctors } = useDoctors();
  const { news } = useHealthNews();

  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-5 h-full w-full">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-100">
        <CardHeader>
          <h1 className="text-sm">Welcome Back,</h1>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
      </Card>
      <section className="flex flex-wrap w-full justify-between gap-10">
        <Card className="w-fit">
          <CardContent className="flex flex-col items-center gap-5 w-full">
            <Card className="w-fit mt-5">
              <CardContent>
                <Chart
                  options={options}
                  series={series}
                  type="bar"
                  width="100%"
                />
              </CardContent>
            </Card>
            <section className="flex flex-wrap justify-center w-full gap-5 h-fit">
              <Card>
                <CardContent className="flex items-center gap-5">
                  <LuCalendarClock size={50} color="gray" />
                  <ul>
                    <li>
                      <h1 className="font-bold text-3xl">
                        {appointments.length}
                      </h1>
                      <li>
                        <span className="font-bold">Appointments</span>
                      </li>
                      <li>
                        <span className="text-sm font-semibold text-slate-500">
                          Today
                        </span>
                      </li>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-5">
                  <TbUrgent size={50} color="red" />
                  <ul>
                    <li>
                      <h1 className="font-bold text-3xl">
                        {appointments.length}
                      </h1>
                      <li>
                        <span className="font-bold">Urgent Resolves</span>
                      </li>
                      <li>
                        <span className="text-sm font-semibold text-slate-500">
                          Today
                        </span>
                      </li>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-5">
                  <FaUserDoctor size={50} color="green" />
                  <ul>
                    <li>
                      <h1 className="font-bold text-3xl">{doctors.length}</h1>
                      <li>
                        <span className="font-bold">Active Doctors</span>
                      </li>
                      <li>
                        <span className="text-sm font-semibold text-slate-500">
                          Today
                        </span>
                      </li>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </CardContent>
        </Card>
        <Card className="w-fit h-fit">
          <CardHeader>
            <CardTitle>Make an Appointment</CardTitle>
            <CardDescription>
              We are focused to your health and well-being
            </CardDescription>
            <CardContent>
              <img
                src="/assets/images/personal-doctor-appointment-2d-isolated-illustration-vector.jpg"
                className="w-48"
              />
            </CardContent>
            <CardFooter>
              <Button>Contact Us</Button>
            </CardFooter>
          </CardHeader>
        </Card>
      </section>
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>
            <h1 className="font-bold">Current Medications</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
      <section>
        <Card className="w-fit">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-wrap items-center justify-between gap-10">
                <h1 className="font-bold">Upcoming Appointments</h1>
                <Button
                  onClick={() => navigate("/patient/appointments")}
                  className="p-0 bg-white text-blue-500 font-bold hover:bg-white"
                >
                  View All
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-5">
              {appointments.map((appointment) => {
                return <AppointmentCard appointment={appointment} />;
              })}
            </div>
          </CardContent>
        </Card>
      </section>
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>
            <h1 className="font-bold">Latest Health News</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
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
                        <Card className="max-w-[500px]">
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
        </CardContent>
      </Card>
    </main>
  );
};

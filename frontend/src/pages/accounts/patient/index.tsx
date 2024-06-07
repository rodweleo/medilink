import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { HealthCareFacilities } from "./pages/healthcare-facilities";
import { HealthcareFacility } from "./pages/healthcare-facilities/HealthcareFacility";
import { MyHealth } from "./pages/my-health";
import { Doctors } from "./pages/doctors";
import { AIChat } from "./pages/ai-chat";
import { Messages } from "./pages/messages";
import { Prescriptions } from "./pages/prescriptions";
import { Appointments } from "./pages/appointments";
import { CiHospital1 } from "react-icons/ci";
import { BsRobot } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { PiHeartbeat } from "react-icons/pi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineAssessment, MdOutlineMedication } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@/hooks/useSession";
import { useToast } from "@/components/ui/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { PatientHealthQuestionnaire9 } from "./pages/patient-health-questionnaire-9";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const PatientAccount = () => {
  const { signOut, user } = useSession();
  const { toast } = useToast();
  const navigate = useNavigate();
  return (
    <main className="h-full fixed w-full flex max-md:flex-col-reverse bg-slate-100 p-1 gap-1">
      <nav className="patient-nav-bar flex sm:flex-col justify-between p-2 bg-white rounded-md max-sm:w-full h-screen max-sm:h-fit overflow-y-auto">
        <ul className="flex sm:flex-col gap-2 max-sm:w-full max-sm:justify-between">
          <li title="Dashboard">
            <NavLink to="dashboard">
              <PiHeartbeat /> <span>My Health</span>
            </NavLink>
          </li>
          <li title="Appointments">
            <NavLink to="appointments">
              <FaRegCalendarCheck /> <span>Appointments</span>
            </NavLink>
          </li>
          <li title="Doctors">
            <NavLink to="doctors">
              <FaUserDoctor /> <span>Doctors</span>
            </NavLink>
          </li>
          <li title="Healthcare Facilities">
            <NavLink to="healthcare-facilities">
              {" "}
              <CiHospital1 /> <span>Healthcare Facilities</span>
            </NavLink>
          </li>
          <li title="Prescriptions" className="max-sm:hidden">
            <NavLink to="prescriptions">
              <MdOutlineMedication /> <span>Prescriptions</span>
            </NavLink>
          </li>
          <li title="Messages" className="max-sm:hidden">
            <NavLink to="messages">
              <BiMessageRoundedDots /> <span>Messages</span>
            </NavLink>
          </li>
          <li title="Meli AI Consultant" className="max-sm:hidden">
            <NavLink to="meli">
              <BsRobot /> <span>AI Consultant</span>
            </NavLink>
          </li>
          <li className="max-sm:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <MdOutlineAssessment /> Assessments
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavLink to="patient-health-questionnaire-9">
                      Patient Health Questionnaire-9
                    </NavLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <div className="flex gap-1 items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="max-sm:hidden">{user.name}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>Support</DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() =>
                    signOut().then((response) => {
                      navigate("/", {
                        replace: true,
                      });
                      toast({
                        description: response.message,
                      });
                    })
                  }
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
      <section className="bg-white w-full h-full overflow-y-auto p-2 rounded-md">
        <Routes>
          <Route path="dashboard" element={<MyHealth />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route
            path="healthcare-facilities"
            element={<HealthCareFacilities />}
          />
          <Route
            path="healthcare-facilities/:id"
            element={<HealthcareFacility />}
          />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="messages" element={<Messages />} />
          <Route path="meli" element={<AIChat />} />
          <Route
            path="patient-health-questionnaire-9"
            element={<PatientHealthQuestionnaire9 />}
          />
        </Routes>
      </section>
    </main>
  );
};

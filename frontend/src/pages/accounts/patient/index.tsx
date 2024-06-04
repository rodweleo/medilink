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
import { Button } from "@/components/ui/button";
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

export const PatientAccount = () => {
  const { signOut, user } = useSession();
  const { toast } = useToast();
  const navigate = useNavigate();
  return (
    <main className="h-full fixed w-full flex bg-slate-100 p-1 gap-1">
      <nav className=" flex flex-col justify-between p-2 bg-white rounded-md w-fit h-screen overflow-y-auto">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="dashboard">
              <PiHeartbeat /> My Health
            </NavLink>
          </li>
          <li>
            <NavLink to="appointments">
              <FaRegCalendarCheck /> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="doctors">
              <FaUserDoctor /> Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="healthcare-facilities">
              {" "}
              <CiHospital1 /> Healthcare Facilities
            </NavLink>
          </li>
          <li>
            <NavLink to="prescriptions">
              <MdOutlineMedication /> Prescriptions
            </NavLink>
          </li>
          <li>
            <NavLink to="messages">
              <BiMessageRoundedDots /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="meli">
              <BsRobot /> AI Consultant
            </NavLink>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-[200px] flex justify-between">
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
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="border-0"> {user.name}</Button>
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
              }>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

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
import { MdOutlineMedication } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession } from "@/hooks/useSession";
import { useToast } from "@/components/ui/use-toast";

export const PatientAccount = () => {
  const { session, signOut } = useSession();
  const { toast } = useToast();
  const navigate = useNavigate();
  return (
    <main className="h-full fixed w-full flex bg-slate-100 p-1 gap-1">
      <nav className="patient-nav-bar flex flex-col justify-between p-2 bg-white rounded-md w-[300px] h-screen">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/"><PiHeartbeat /> My Health</NavLink>
          </li>
          <li>
            <NavLink to="appointments"><FaRegCalendarCheck /> Appointments</NavLink>
          </li>
          <li>
            <NavLink to="doctors"><FaUserDoctor /> Doctors</NavLink>
          </li>
          <li>
            <NavLink to="healthcare-facilities"> <CiHospital1 /> Healthcare Facilities</NavLink>
          </li>
          <li>
            <NavLink to="prescriptions"><MdOutlineMedication /> Prescriptions</NavLink>
          </li>
          <li>
            <NavLink to="messages"><BiMessageRoundedDots /> Messages</NavLink>
          </li>
          <li>
            <NavLink to="meli"><BsRobot /> AI Consultant</NavLink>
          </li>
        </ul>

        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-0"> {session?.user.email}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Support</DropdownMenuItem>
        
       
        <DropdownMenuItem onClick={() => signOut().then((response) => {
          window.location.reload()
          navigate("/sign-in", {
            replace: true
          })
          toast({
            description: response.message
          })
        })}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </nav>
      <section className="bg-white w-full h-full overflow-y-auto p-2 rounded-md">
        <Routes>
          <Route path="/" element={<MyHealth />} />
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
        </Routes>
      </section>
    </main>
  );
};

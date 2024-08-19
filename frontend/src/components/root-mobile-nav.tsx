import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function RootMobileNav(){
    return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="p-0 border-0 hover:bg-white">
              <CgMenuLeftAlt size={30} />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-10">
            <SheetHeader>
              <SheetTitle className="text-left">MediLink</SheetTitle>
              <SheetDescription className="text-left">
                Comprehensive Care For Your <span>Mental Well-Being</span>
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-5">
                <li>
                  <SheetClose asChild>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/about-us" className="nav-link">About Us</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/assessments" className="nav-link">Assessments</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/support-groups" className="nav-link">Support Groups</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/events" className="nav-link">Events</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
                  </SheetClose>
                </li>
              </ul>
              <Separator />
              <ul className="flex flex-col gap-5">
                <li>
                  <SheetClose asChild>
                    <NavLink to="/sign-in" className="nav-link">Sign In</NavLink>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <NavLink to="/sign-up" className="nav-link">Sign Up</NavLink>
                  </SheetClose>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      );
}
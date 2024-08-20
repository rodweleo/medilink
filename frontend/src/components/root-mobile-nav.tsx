import { CgMenuLeftAlt } from "react-icons/cg";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "./ui/navigation-menu";
import { ListItem } from "./list-item";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function RootMobileNav() {
  const [isOpen, setOpen] = useState(false);

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
        <div className="flex flex-col gap-5 w-full overflow-y-auto">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col items-start justify-start space-y-5 w-full">
              <NavigationMenuItem className="ml-1">
                <NavLink to="/">
                  Home
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink to="/how-medilink-works">
                    How MediLink Works
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="space-y-2.5">
                  <button onClick={() => setOpen(!isOpen)} className="w-full font-semibold text-[14px] flex items-center justify-between">Resources <MdOutlineKeyboardArrowDown className={`${isOpen && "rotate-180"} transition-all duration-300 ease-in-out`} /></button>
                  <ul className={`bg-slate-200 rounded-xl gap-3 p-6 w-full ${isOpen ? "h-fit grid" : "hidden h-0 overflow-hidden"} transition-all duration-300 ease-in-out`}>
                      <ListItem href="/assessments" title="Assessments">
                        Quizzes to aid in faster condition detection
                      </ListItem>
                      <ListItem href="/support-groups" title="Support Groups">
                        Join community of like-minded individuals.
                      </ListItem>
                      <ListItem href="/benefits-of-therapy" title="Benefits">
                        The goodside of having therapy.
                      </ListItem>
                    </ul>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/pricing">
                  Pricing
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="events">
                  Events
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/contact-us">
                  Contact Us
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ul className="space-y-5">
            <li>
              <Button className="w-full bg-slate-800 hover:bg-slate-500"><NavLink to="/sign-in">Login</NavLink></Button>
            </li>
            <li>
              <Button variant="outline" className="w-full"><a href="/sign-up">Create Account</a></Button>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
import { CgMenuLeftAlt } from "react-icons/cg";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { ListItem } from "./list-item";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
        <div className="flex flex-col gap-5">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start space-y-5">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/how-medilink-works">
                  How MediLink Works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <Collapsible open={isOpen} className="w-full ">
                <CollapsibleTrigger onClick={() => setOpen(!isOpen)} className="w-full ml-4 font-semibold text-[14px] flex items-center justify-between">Resources <MdOutlineKeyboardArrowDown className={`${isOpen && "rotate-180"} transition-all duration-300 ease-in-out`} /></CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="grid gap-3 p-6 w-full md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                </CollapsibleContent>
              </Collapsible>
              <NavigationMenuItem>
                <NavigationMenuLink href="/pricing">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="events">
                  Events
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact-us">
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ul className="space-y-5">
            <li>
              <Button className="w-full bg-slate-800 hover:bg-slate-500"><a href="/sign-in">Login</a></Button>
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
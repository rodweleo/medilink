import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { ListItem } from "./list-item";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { NavLink } from "react-router-dom";

export default function RootWebNav() {
    return (
        <>
            <NavigationMenu >
                <NavigationMenuList className="flex items-center gap-10 text-md">
                    <NavigationMenuItem>
                        <NavLink to="/">Home</NavLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavLink to="/how-medilink-works">How Medilink Works</NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to="/events">Events</NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ul className="flex gap-5">
                <li>
                    <Button className="bg-slate-800 hover:bg-slate-500"><NavLink to="/sign-in">Login</NavLink></Button>
                </li>
                <li>
                    <Button variant="outline"><NavLink to="/sign-up">Create Account</NavLink></Button>
                </li>
            </ul>
        </>
    );
}
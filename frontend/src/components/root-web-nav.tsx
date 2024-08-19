import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { ListItem } from "./list-item";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export default function RootWebNav() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <a href="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="/how-medilink-works">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                How MediLink Works
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
                        <a href="/pricing">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Pricing
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href="/events">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Events
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <a href="/contact-us">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact Us
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <ul className="flex gap-5">
                <li>
                    <Button className="bg-slate-800 hover:bg-slate-500"><a href="/sign-in">Login</a></Button>
                </li>
                <li>
                    <Button variant="outline"><a href="/sign-up">Create Account</a></Button>
                </li>
            </ul>
        </>
    );
}
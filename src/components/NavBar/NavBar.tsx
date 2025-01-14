import { Link } from "react-router"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

function NavBar() {
    return (
    <div className="flex justify-center p-5 bg-slate-800">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to='/'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to='/login'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Login
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to='/about'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
    )
}

export default NavBar
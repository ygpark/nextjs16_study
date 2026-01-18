"use client";
import Link from "next/link";
import React from "react";

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

// import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

const Appbar = () => {
  const navList: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "Client Component", href: "/client-component" },
    { title: "drizzle-orm", href: "/drizzle-orm" },
    { title: "Daisy-ui", href: "/daisy-ui" },
    { title: "shadcn", href: "/shadcn" },
    { title: "game", href: "/game" },
  ];

  const navListProps: { title: string; href: string }[] = [
    { title: "Props", href: "/props" },
    { title: "Params", href: "/props/params" },
    { title: "SearchParams", href: "/props/searchparams?key=value" },
  ];

  const navListAPI: { title: string; href: string }[] = [
    { title: "ip", href: "/api/ip" },
    { title: "time", href: "/api/time" },
  ];
  return (
    <div className="border-b p-3">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            {navList.map((item, idx) => (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                key={item.href}
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Props</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-1">
                {navListProps.map((item, idx) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>API</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-1">
                {navListAPI.map((item, idx) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} target="_blank">
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Appbar;

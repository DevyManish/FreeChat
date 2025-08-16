"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/lib/data";
import { ModeToggle } from "../ui/theme-toggle";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background px-4 lg:px-30">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex lg:justify-start items-center gap-2">
          <Image src="/logo.png" alt="logo_image" width={30} height={18} />
          <p className="font-extrabold text-2xl lg:text-3xl italic">FreeChat</p>
        </div>
        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row font-extrabold text-2xl italic">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink>
                    <Button variant="ghost">{item.title}</Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="font-semibold rounded-3xl py-5 px-5 items-center"
            >
              Sign in
            </Button>
          </Link>
          <ModeToggle />
        </div>

        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

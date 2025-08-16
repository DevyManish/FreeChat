"use client";

import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <Header />
      <ModeToggle />
      <Hero />
    </div>
  );
}

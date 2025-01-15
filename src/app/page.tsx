"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import MenuModal from "@/components/menuModal";
import Hero from "@/pages/Hero";
import Experience from "@/pages/Experience";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";
import Projects from "@/pages/Projects";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#000000" : "#ffffff");
  }, [resolvedTheme]);

  return (
    <main className="relative overflow-x-hidden overflow-y-hidden">
      <Nav onMenuClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
      <Hero />
      <Experience />
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <Projects />
    </main>
  );
}

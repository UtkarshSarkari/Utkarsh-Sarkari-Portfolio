"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import MenuModal from "@/components/menuModal";
import Hero from "@/pages/Hero";
import Experience from "@/pages/Experience";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative">
      <Nav onMenuClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
      <Hero />
      <Experience />
    </main>
  );
}

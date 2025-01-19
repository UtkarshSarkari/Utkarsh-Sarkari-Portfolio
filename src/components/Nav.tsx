"use client";
import React, { useState } from "react";
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import localfont from "next/font/local";

interface NavProps {
  onMenuClick: () => void;
}

export const logofont = localfont({
  src: "../../public/fonts/MerahMerona.otf",
});

const scrollToSection = (id: string) => {
  const sectionId = id.startsWith("#") ? id.slice(1) : id;
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const filteredLinks = navLinks.filter((link) => link.availability === "all");

export default function Nav({ onMenuClick }: NavProps) {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="flex items-center justify-between px-8 lg:px-14 py-8 w-screen fixed bg-[#22262f] z-50">
      <div className={`left-nav text-white ${logofont.className}`}>
        Utkarsh Sarkari
      </div>
      <div
        className={`right-nav font-[family-name:var(--font-geist-sans)] lg:flex items-center gap-10 text-sm hidden `}
      >
        {filteredLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => {
              setActiveLink(link.name);
              scrollToSection(link.url);
            }}
            className={`font-medium cursor-pointer ${
              activeLink === link.name ? "text-white" : "text-[#b5c1ff]"
            }`}
          >
            {link.name}
          </button>
        ))}
        <Link
          href="mailto:utkrshsarkari@gmail.com"
          target="_blank"
          className={`text-zinc-300 tracking-wider font-light hover:text-white transition-all cursor-pointer bg-white/15 px-3 py-1 rounded-lg flex items-center justify-center`}
        >
          utkrshsarkari@gmail.com
        </Link>
      </div>
      <div className="hamMenu lg:hidden">
        <Image
          className=""
          src="/icons/menu.svg"
          height={38}
          width={38}
          alt="hamMenu"
          onClick={onMenuClick}
        />
      </div>
    </nav>
  );
}

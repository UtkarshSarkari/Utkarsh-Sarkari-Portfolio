"use client";
import React, { useState } from "react";
import { navLinks } from "@/constants/navLinks";
import { font13 } from "@/constants/fontData";
import Image from "next/image";

interface NavProps {
  onMenuClick: () => void;
}

export default function Nav({ onMenuClick }: NavProps) {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="flex items-center justify-between px-8 lg:px-14 py-8 w-screen">
      <div className={`left-nav ${font13.className}`}>Utkarsh Sarkari</div>
      <div
        className={`right-nav font-[family-name:var(--font-geist-sans)] lg:flex items-center gap-10 text-sm hidden `}
      >
        {navLinks.map((link) => (
          <div
            key={link.name}
            onClick={() => setActiveLink(link.name)}
            className={`font-medium cursor-pointer ${
              activeLink === link.name ? "text-white" : "text-[#b5c1ff]"
            }`}
          >
            {link.name}
          </div>
        ))}
        <h5
          className={`text-zinc-300 tracking-wider font-light hover:text-white transition-all cursor-pointer bg-white/15 px-3 py-1 rounded-lg flex items-center justify-center`}
        >
          utkrshsarkari@gmail.com
        </h5>
      </div>
      <div className="hamMenu lg:hidden">
        <Image
          className=""
          src="/icons/menu5.png"
          height={38}
          width={38}
          alt="hamMenu"
          onClick={onMenuClick}
        />
      </div>
    </div>
  );
}

"use client";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import React from "react";

interface MenuModalProps {
  onClose: () => void;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export default function MenuModal({
  onClose,
  activeLink,
  setActiveLink,
}: MenuModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 font-[family-name:var(--font-geist-sans)]"
      onClick={onClose}
    >
      <div
        className="bg-[#22262f] rounded-lg p-8 w-3/4 max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal
      >
        <ul className="space-y-6 font-medium">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              onClick={() => setActiveLink(link.name)}
              className={`font-medium cursor-pointer flex gap-2 items-center ${
                activeLink === link.name ? "text-white" : "text-[#b5c1ff]"
              }`}
            >
              {link.name}{" "}
              <div className="bg-white/60 h-[2px] w-full rounded-full"></div>
            </Link>
          ))}

          <Link
            href="mailto:utkrshsarkari@gmail.com"
            className={`text-zinc-300 tracking-wider font-light hover:text-white transition-all cursor-pointer bg-white/15 px-3 py-1 rounded-lg flex items-center justify-center`}
          >
            utkrshsarkari@gmail.com
          </Link>
        </ul>
      </div>
    </div>
  );
}

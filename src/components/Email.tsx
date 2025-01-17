import Link from "next/link";
import React from "react";

export default function Email() {
  return (
    <Link
      href="https://utkrshsarkari@gmail.com"
      target="_blank"
      className={`text-zinc-300 tracking-wider font-light hover:text-white transition-all cursor-pointer bg-white/15 px-3 py-1 rounded-lg flex items-center justify-center`}
    >
      utkrshsarkari@gmail.com
    </Link>
  );
}

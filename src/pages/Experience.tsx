"use client";

import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <div className="px-8 lg:px-80 py-20 lg:py-40 font-[family-name:var(--font-geist-sans)]">
      <div className="font-extrabold text-white/50 text-5xl lg:text-7xl uppercase tracking-wide text-center leading-[60px] bg-gradient-to-br from-purple-200 via-indigo-800 to-purple-200 bg-clip-text">
        Career Highlights
      </div>
      <div className="">
        <ExperienceCard logo="/icons/coglogo.svg" />
      </div>
    </div>
  );
}

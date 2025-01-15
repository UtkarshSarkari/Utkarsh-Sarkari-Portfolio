"use client";

import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <div className="px-8 lg:px-80 py-20 lg:py-40">
      <div className="font-bold text-white/50 text-5xl lg:text-7xl uppercase tracking-wide text-center leading-[60px]">
        Career Highlights
      </div>
      <div className="">
        <ExperienceCard logo="/icons/coglogo.svg" />
      </div>
    </div>
  );
}

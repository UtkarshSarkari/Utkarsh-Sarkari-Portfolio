import Image from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

type ExperienceCardProps = {
  logo: string | StaticImageData;
  position: string;
  companyName: string;
  duration: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
};

export default function ExperienceCard({
  logo,
  position,
  companyName,
  duration,
  point1,
  point2,
  point3,
  point4,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-10 font-[family-name:var(--font-geist-sans)]">
      <div className="hidden lg:flex">
        <Image src={logo} height={300} width={300} alt="logo" />
      </div>
      <div className="border border-white/10 bg-white/5 rounded-lg p-8 shadow-2xl lg:border-none lg:bg-transparent lg:shadow-none">
        <div className="text-lg font-semibold tracking-wide">{position}</div>
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row">
          <div className="highlight">{companyName} &nbsp;</div>
          <div className="text-white/60 text-sm lg:text-base">{duration}</div>
        </div>
        <ul className="mt-5 text-sm flex flex-col gap-4">
          <li>{point1}</li>
          <li>{point2}</li>
          <li>{point3}</li>
          <li>{point4}</li>
        </ul>
      </div>
    </div>
  );
}

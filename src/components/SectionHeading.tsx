import React from "react";

type SectionHeadingProps = {
  heading: string;
};

export default function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <div className="font-extrabold text-white/50 text-5xl lg:text-7xl uppercase tracking-wide text-center leading-[60px] bg-gradient-to-br from-purple-200 via-indigo-800 to-purple-200 bg-clip-text">
      {heading}
    </div>
  );
}

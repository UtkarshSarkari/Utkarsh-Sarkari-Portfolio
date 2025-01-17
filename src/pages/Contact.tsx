import SectionHeading from "@/components/SectionHeading";
import Socials from "@/components/Socials";
import React from "react";

interface NavProps {
  onChatClick: () => void;
}

export default function Contact({ onChatClick }: NavProps) {
  return (
    <div className="px-8 lg:px-80 py-28 font-[family-name:var(--font-geist-sans)] md:hidden" id="contact">
      <SectionHeading heading="My digital presence" />
      <div className="flex flex-col gap-8">
        <Socials classname="justify-around mt-10" size={25} />
        <div
          className={`text-zinc-300 tracking-wider font-light hover:text-white transition-all cursor-pointer bg-white/15 px-3 py-1 rounded-lg flex items-center justify-center`}
          onClick={onChatClick}
        >
          Wanna have a chat ?
        </div>
      </div>
    </div>
  );
}

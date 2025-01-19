"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Socials from "@/components/Socials";

interface NavProps {
  onChatClick: () => void;
}

export default function Hero({ onChatClick }: NavProps) {
  const gradientSize = 200;
  const spotlightColor = "#444"; // Darker color for the spotlight (grayish)
  const borderGradientFrom = "#9E7AFF";
  const borderGradientTo = "#FE8BBB";

  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = document.querySelector(".this-div") as HTMLElement;
      if (!card) return;
      const { left, top } = card.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const handleMouseLeave = () => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    };

    const card = document.querySelector(".this-div") as HTMLElement;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      className="w-screen pt-40 px-8 sm:px-14 md:px-20 lg:px-0 lg:pt-60 flex items-center justify-center font-[family-name:var(--font-geist-sans)]"
      id="home"
    >
      <motion.div className="relative group flex flex-col lg:flex-row items-center justify-center w-[800px] gap-10 p-10 lg:p-20 rounded-xl shadow-2xl this-div border border-white/10">
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${spotlightColor}, transparent 100%)
            `,
          }}
        />

        {/* Gradient Border Effect */}
        <motion.div
          className="absolute inset-0 z-10 rounded-xl border-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            maskImage: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                black, transparent 100%)
            `,
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                black, transparent 100%)
            `,
            borderImageSource: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${borderGradientFrom}, ${borderGradientTo})
            `,
            borderImageSlice: 1,
          }}
        />

        {/* Card Content */}
        <div className="relative z-20">
          <Image
            src="/images/profile.jpg"
            width={200}
            height={200}
            alt="profilepic"
            className="rounded-full lg:w-[1300px] lg:h-[210px] w-[200px] h-[200px]"
            priority
          />
        </div>
        <div className="relative z-20 flex flex-col gap-4">
          <div>
            <div className="text-xl font-bold text-white">Utkarsh Sarkari</div>
            <div className="text-white/60 text-sm">
              Software Developer - Full Stack
            </div>
          </div>
          <div className="text-sm text-white/90 tracking-wide">
            As a <span className="highlight">Software Engineer</span>, I deliver
            high-impact web solutions with a focus on quality, scalability, and
            user experience.{" "}
            <span className="highlight">Proficient in the MERN stack</span>, I
            specialize in developing robust and user-centric applications that
            align with business goals and deliver measurable results, leveraging
            my expertise in full-stack development to create seamless and
            efficient solutions.
          </div>
          <div className="flex items-center gap-5">
            <Socials classname="gap-5 mt-2" size={20} />
            <div
              className="bg-white/10 mt-2 px-4 py-1 text-sm rounded-md cursor-pointer hidden sm:flex"
              onClick={onChatClick}
            >
              Get In Touch
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { socialLinksData } from "@/constants/socialLinksData";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function Hero() {
  const gradientSize = 200;
  const spotlightColor = "#444"; // Darker color for the spotlight (grayish)
  const borderGradientFrom = "#9E7AFF";
  const borderGradientTo = "#FE8BBB";

  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = document.querySelector(".this-div");
      if (!card) return;
      const { left, top } = card.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const handleMouseLeave = () => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    };

    const card = document.querySelector(".this-div");
    card?.addEventListener("mousemove", handleMouseMove);
    card?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card?.removeEventListener("mousemove", handleMouseMove);
      card?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div className="w-screen pt-20 lg:pt-40 px-8 flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <motion.div className="relative group flex flex-col lg:flex-row items-center justify-center w-[800px] gap-10 p-10 lg:p-20 rounded-xl shadow-2xl this-div bg-transparent border border-white/10">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            aspernatur amet animi voluptatibus aliquid maiores autem beatae
            provident iure fuga? Vel asperiores, voluptate cum laborum quia iure
            officiis vero labore iusto perspiciatis officia expedita fugit
            maxime hic voluptates delectus voluptatem deserunt atque ex libero
            saepe! Sapiente dolores iure asperiores eveniet.
          </div>
          <div className="flex items-center gap-4">
            {socialLinksData.map((data) => (
              <Link href={data.url} key={data.url} target="_blank" className="">
                <Image
                  className="hover:scale-110 transition-all cursor-pointer"
                  src={data.img}
                  height={20}
                  width={20}
                  alt="image"
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

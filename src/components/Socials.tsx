import { socialLinksData } from "@/constants/socialLinksData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialProps = {
  size: number;
  classname: string;
};

export default function Socials({ size, classname }: SocialProps) {
  return (
    <div className={`flex items-center ${classname}`}>
      {socialLinksData.map((data) => (
        <Link href={data.url} key={data.url} target="_blank" className="">
          <Image
            className="hover:scale-110 transition-all cursor-pointer"
            src={data.img}
            height={size}
            width={size}
            alt="image"
          />
        </Link>
      ))}
    </div>
  );
}

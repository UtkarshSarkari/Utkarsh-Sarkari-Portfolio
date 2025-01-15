import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Yuvraj",
    username: "@yuvrajkori",
    body: "Utkarsh's development work is phenomenal. His projects are always innovative and impactful. I'm really impressed.",
    img: "/images/yuvraj.jpg",
  },
  {
    name: "Anurag",
    username: "@anuraggoel",
    body: "The projects Utkarsh works on are top-notch. His attention to detail and ability to solve complex problems is unmatched.",
    img: "/images/anurag.jpg",
  },
  {
    name: "Srishti",
    username: "@srishtisrivastava",
    body: "I’m so impressed with Utkarsh’s development work! His projects always stand out with their smooth functionality and creativity.",
    img: "/images/srishti.jpg",
  },
  {
    name: "Shreyal",
    username: "@shreyalsrivastava",
    body: "Utkarsh’s projects are always a joy to use. His ability to make complex systems easy to navigate is something to be admired.",
    img: "/images/shreyal.jpg",
  },
  {
    name: "Ayush",
    username: "@ayushsharma",
    body: "Utkarsh’s work is always so clean and efficient. His projects show a lot of creativity and problem-solving skills.",
    img: "/images/ayush.jpg",
  },
  {
    name: "Amrit",
    username: "@amritchauhan",
    body: "I love the way Utkarsh develops his projects. They’re functional, user-friendly, and always ahead of the curve.",
    img: "/images/amrit.jpg",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Feedback() {
  return (
    <div className="px-8 lg:px-80 py-28 lg:pt-48 lg:pb-40 font-[family-name:var(--font-geist-sans)]" id="feedback">
      <div className="font-extrabold text-white/50 text-5xl lg:text-7xl uppercase tracking-wide text-center leading-[60px] bg-gradient-to-br from-purple-200 via-indigo-800 to-purple-200 bg-clip-text">
        Feedback Loop
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden mt-10 md:mt-16">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#22262f]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#22262f]"></div>
      </div>
    </div>
  );
}

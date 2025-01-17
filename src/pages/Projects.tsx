import React from "react";
import {
  ActivityLogIcon,
  ChatBubbleIcon,
  KeyboardIcon,
  IdCardIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    Icon: TwitterLogoIcon,
    name: "Knotnet",
    description:
      "Full Stack Web Version of Meta’s most recent Threads Application",
    href: "https://pagenotfound.netlify.app/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-60" src="/images/threads.webp" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: IdCardIcon,
    name: "Wave Connect",
    description: "Full Stack Web App for Video Conferencing and Meeting",
    href: "https://github.com/UtkarshSarkari/wave-connect",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="/images/wave.png" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ChatBubbleIcon,
    name: "Conversate",
    description: "MERN Stack Web Based Real-Time Chat Application",
    href: "https://github.com/UtkarshSarkari/Conversate",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="/images/chat.png" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: ActivityLogIcon,
    name: "CodexGram",
    description: "Online Real Time Code Editor",
    href: "https://github.com/UtkarshSarkari/CodexGram",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="/images/code.webp" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: KeyboardIcon,
    name: "KeySense",
    description: "Online Touch Typing Playground",
    href: "https://github.com/UtkarshSarkari/KeySense",
    cta: "Learn more",
    background: <img className="absolute opacity-60" src="/images/touch.png" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
];

export default function Projects() {
  return (
    <div className="px-8 lg:px-80 pt-28 lg:pt-48 font-[family-name:var(--font-geist-sans)]" id="projects">
      <SectionHeading heading="ideas executed" />
      <BentoGrid className="lg:grid-rows-3 mt-10 lg:mt-16">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

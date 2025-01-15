import Image from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

type ExperienceCardProps = {
  logo: string | StaticImageData;
};

export default function ExperienceCard({ logo }: ExperienceCardProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-10 font-[family-name:var(--font-geist-sans)]">
      <div className="hidden lg:flex">
        <Image
          className=""
          src={logo}
          height={300}
          width={300}
          alt="logo"
        />
      </div>
      <div className="border border-white/10 bg-white/5 rounded-lg p-8 shadow-2xl lg:border-none lg:bg-transparent lg:shadow-none">
        <div className="text-lg font-semibold tracking-wide">
          Programmer Analyst
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="highlight">Cognizant Technology Solutions &nbsp;</div>
          <div className="text-white/50">| Dec, 2023 - Current</div>
        </div>
        <ul className="mt-5 text-sm flex flex-col gap-4">
          <li>
            Collaborate with clients to gather detailed information about
            structured data (Oracle and MSSQL databases) and unstructured data
            (files and folders) for archiving.
          </li>
          <li>
            Prepare comprehensive documentation that captures specifics of both
            structured and unstructured data for effective archiving and
            retrieval.
          </li>
          <li>
            Ingest CSV files received from customers into Oracle databases,
            ensuring accurate data transfer and integrity.
          </li>
          <li>
            Facilitate client requests for data access by managing and
            processing incoming requests and ensuring timely follow-up.
          </li>
        </ul>
      </div>
    </div>
  );
}

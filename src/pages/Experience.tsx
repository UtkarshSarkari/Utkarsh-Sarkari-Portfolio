"use client";

import ExperienceCard from "@/components/ExperienceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <div
      className="px-8 lg:px-80 pt-28 lg:pt-48 font-[family-name:var(--font-geist-sans)]"
      id="experience"
    >
      <SectionHeading heading="career highlights" />
      <div className="">
        <ExperienceCard
          logo="/icons/coglogo.svg"
          position="Programmer Analyst"
          companyName="Cognizant Technology Solutions"
          duration="| Dec, 2023 - Current"
          point1="Collaborate with clients to gather detailed information about structured data (Oracle and MSSQL databases) and unstructured data
            (files and folders)
             for archiving."
          point2="Prepare comprehensive documentation that captures specifics of both
            structured and unstructured data for effective archiving and
            retrieval."
          point3="Ingest CSV files received from customers into Oracle databases,
            ensuring accurate data transfer and integrity."
          point4="Facilitate client requests for data access by managing and
            processing incoming requests and ensuring timely follow-up."
        />
      </div>
    </div>
  );
}

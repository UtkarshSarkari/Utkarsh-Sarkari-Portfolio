"use client";
import React from "react";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "c++",
  "java",
  "react",
  "python",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongodb",
  "amazonaws",
  "postgresql",
  "firebase",
  "postman",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "linux",
  "figma",
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="px-8 lg:px-80 pt-28 lg:pt-48 font-[family-name:var(--font-geist-sans)]" id="skills">
      <div className="font-extrabold text-white/50 text-5xl lg:text-7xl uppercase tracking-wide text-center leading-[60px] bg-gradient-to-br from-purple-200 via-indigo-800 to-purple-200 bg-clip-text">
        Skillset Snapshot
      </div>
      <div className="flex gap-10 mt-10 lg:mt-16 items-center justify-center">
        <div className="relative flex h-full w-full md:w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg border bg-white/5">
          <Tree
            className="overflow-hidden rounded-md bg-transparent p-2 transition-all"
            initialSelectedId="3"
            initialExpandedItems={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
            ]}
            elements={ELEMENTS}
          >
            <Folder element="skillset" value="1">
              <Folder value="2" element="languages">
                <File value="3">
                  <p>C/C++</p>
                </File>
                <File value="4">
                  <p>Java</p>
                </File>
                <File value="5">
                  <p>Python</p>
                </File>
                <File value="6">
                  <p>HTML 5</p>
                </File>
                <File value="7">
                  <p>JavaScript</p>
                </File>
                <File value="8">
                  <p>TypeScript</p>
                </File>
              </Folder>
              <Folder value="9" element="frontend">
                <File value="10">
                  <p>React JS</p>
                </File>
                <File value="11">
                  <p>React Redux</p>
                </File>
                <File value="12">
                  <p>Next JS</p>
                </File>
                <File value="13">
                  <p>Tailwind CSS</p>
                </File>
                <File value="14">
                  <p>UI/UX Development</p>
                </File>
              </Folder>
              <Folder value="15" element="backend">
                <File value="16">
                  <p>Node JS</p>
                </File>
                <File value="17">
                  <p>Express JS</p>
                </File>
                <File value="19">
                  <p>API Integration</p>
                </File>
                <File value="20">
                  <p>JSON Web Tokens</p>
                </File>
              </Folder>
              <Folder value="21" element="database">
                <File value="22">
                  <p>MongoDB</p>
                </File>
                <File value="23">
                  <p>SQL</p>
                </File>
                <File value="24">
                  <p>Firebase</p>
                </File>
              </Folder>
              <Folder value="25" element="tools/platforms">
                <File value="26">
                  <p>Postman</p>
                </File>
                <File value="27">
                  <p>Clerk Auth</p>
                </File>
                <File value="28">
                  <p>Git</p>
                </File>
                <File value="29">
                  <p>GitHub</p>
                </File>
                <File value="30">
                  <p>Linux</p>
                </File>
                <File value="31">
                  <p>AWS</p>
                </File>
                <File value="32">
                  <p>Informatica Powercenter</p>
                </File>
                <File value="33">
                  <p>IICS Cloud</p>
                </File>
              </Folder>
            </Folder>
          </Tree>
        </div>
        <div className="relative hidden md:flex size-full max-w-xs items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "skillset",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "languages",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "C/C++",
          },
          {
            id: "4",
            isSelectable: true,
            name: "Java",
          },
          {
            id: "5",
            isSelectable: true,
            name: "Python",
          },
          {
            id: "6",
            isSelectable: true,
            name: "HTML 5",
          },
          {
            id: "7",
            isSelectable: true,
            name: "JavaScript",
          },
          {
            id: "8",
            isSelectable: true,
            name: "TypeScript",
          },
        ],
      },
      {
        id: "9",
        isSelectable: true,
        name: "frontend",
        children: [
          {
            id: "10",
            isSelectable: true,
            name: "React JS",
          },
          {
            id: "11",
            isSelectable: true,
            name: "React Redux",
          },
          {
            id: "12",
            isSelectable: true,
            name: "Next JS",
          },
          {
            id: "13",
            isSelectable: true,
            name: "Tailwind CSS",
          },
          {
            id: "14",
            isSelectable: true,
            name: "UI/UX Development",
          },
        ],
      },
      {
        id: "15",
        isSelectable: true,
        name: "backend",
        children: [
          {
            id: "16",
            isSelectable: true,
            name: "Node JS",
          },
          {
            id: "17",
            isSelectable: true,
            name: "Express JS",
          },
          {
            id: "19",
            isSelectable: true,
            name: "API Integration",
          },
          {
            id: "20",
            isSelectable: true,
            name: "JSON Web Tokens",
          },
        ],
      },
      {
        id: "21",
        isSelectable: true,
        name: "database",
        children: [
          {
            id: "22",
            isSelectable: true,
            name: "MongoDB",
          },
          {
            id: "23",
            isSelectable: true,
            name: "SQL",
          },
          {
            id: "24",
            isSelectable: true,
            name: "Firebase",
          },
        ],
      },
      {
        id: "25",
        isSelectable: true,
        name: "tools/platforms",
        children: [
          {
            id: "26",
            isSelectable: true,
            name: "Postman",
          },
          {
            id: "27",
            isSelectable: true,
            name: "Clerk Auth",
          },
          {
            id: "28",
            isSelectable: true,
            name: "Git",
          },
          {
            id: "29",
            isSelectable: true,
            name: "GitHub",
          },
          {
            id: "30",
            isSelectable: true,
            name: "Linux",
          },
          {
            id: "31",
            isSelectable: true,
            name: "AWS",
          },
          {
            id: "32",
            isSelectable: true,
            name: "Informatica Powercenter",
          },
          {
            id: "33",
            isSelectable: true,
            name: "IICS Cloud",
          },
        ],
      },
    ],
  },
];

"use client";

import { JSX, useState } from "react";
import { Pill } from "../_components/button";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Earnest Financial Literacy App",
    tech: ["React Native", "TypeScript"],
    url: "/earnest2.jpg",
    content: {
      client: "Metrobank",
      desc: `Mobile app that aims to make investing easy. Financial education app 
      that has banking integration for investment.`,
    },
  },
  {
    title: "UX40 Core Transactions",
    tech: ["Next.js", "Spring Framework", "TypeScript", "PostgreSQL"],
    url: "/ux40.png",
    content: {
      client: "Metrobank",
      desc: `Full-stack system for bank core transactions of
      teller and client-facing users. `,
    },
  },
  {
    title: "Dynamic Forms - Banking",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    url: "/df.png",
    content: {
      client: "Metrobank",
      desc: `Dynamic form builder for the various forms used by the back-office of the bank.`,
    },
  },
  {
    title: "Digital Channels - Online Banking",
    tech: ["Angular.js", "Spring Framework", "MySQL", "DB2", "Maven"],
    url: "/digitalchannel.png",
    content: {
      client: "Finastra",
      desc: `Real time online banking solution. Developed 
      both of-the-shelf and customized versions.`,
    },
  },
  {
    title: "Gallery+: Market Space Venture",
    tech: ["Next.js", "FireStore"],
    url: "/gallery.png",
    content: {
      client: "B+ Studio",
      desc: `A community and platform for artists in the Philippines. Each artists has their 
      independent websites that are connected through the platform in the backend.`,
    },
  },
  {
    title: "Unifier Ventures Portfolio",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "/unifiervc.png",
    content: {
      client: "BotBros AI",
      desc: `A mobile responsive portfolio for a venture capital company based in Berlin, Germany`,
    },
  },
];

const ProjectItem = ({
  title,
  tech,
  url,
  content,
}: {
  title: string;
  tech: string[];
  url: string;
  content: { client: string; desc: string };
}): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col text-black h-auto gap-3 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative z-10"
        style={{ height: "250px" }} // Fixed height for the image container
      >
        <div
          className={`flex flex-col gap-5 py-5 pr-5 top-0 bg-white absolute h-full w-full z-50   ${
            !hovered ? "hidden" : ""
          }`}
        >
          <div>{content.desc}</div>
          <div>Client: {content.client}</div>
        </div>
        <Image layout="fill" objectFit="scale-down" src={url} alt="Earnest" />
      </div>

      {/* Title */}
      <div className="font-bold">{title}</div>

      {/* Tech Pills */}
      <div className="flex gap-2 flex-wrap">
        {tech.map((item, index) => (
          <Pill key={index} title={item} handleClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default function Page(): JSX.Element {
  return (
    <div className="my-24">
      <div className="md:px-6 px-6 container m-auto grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((item, index) => (
          <ProjectItem
            key={index}
            title={item.title}
            tech={item.tech}
            url={item.url}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

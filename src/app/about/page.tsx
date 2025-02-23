"use client";

import { JSX } from "react";
import Image from "next/image";
import useDebouncedResize from "../hooks/useDebouncedResize";

export default function About(): JSX.Element {
  const { width, height } = useDebouncedResize();
  return (
    <div className="flex min-h-screen w-full bg-orange-5 mt-12">
      <main className="min-h-screen flex w-full pt-10 text-black flex-col relative overflow-hidden">
        <div className="flex flex-row px-10">
          <div className="flex justify-center w-1/2">
            <Image
              priority
              src="/about.png"
              alt="About Cloud"
              width={width / 3.5}
              height={height / 3.5}
            />
          </div>
          <div className=" flex   h-full flex-col justify-center w-1/2">
            <div className="mt-12 mb-1 font-bold text-lg">ABOUT</div>
            <div className="text-md leading-10">
              I’m an experienced software engineer with seven years in
              full-stack web and mobile development, proficient in Spring
              Framework, React, React Native, and DevOps deployment. Currently
              serving as a senior lead, I ensure quality execution and effective
              collaboration. My experience spans the financial sector, where I
              have worked with Waterfall, Agile Scrum, and Kanban methodologies.
              I have also collaborated with teams from the United Kingdom,
              India, Myanmar, Bangladesh, and the Philippines.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

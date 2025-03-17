"use client";

import { JSX } from "react";
import Image from "next/image";

export default function About(): JSX.Element {
  return (
    <div className="flex mt-12">
      <main className=" flex pt-10 text-black flex-col relative overflow-hidden">
        <div className="flex flex-col px-6">
          <div className={`relative w-full  h-[300px]`}>
            <Image
              priority
              src="/about2.jpg"
              alt="About Cloud"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className=" flex flex-col sm:justify-center sm:w-1/2">
            <div className="sm:mt-12 mt-6 mb-3 font-bold text-xs sm:text-lg">
              ABOUT ME
            </div>
            <div className="text-xs sm:text-lg  mb-3 leading-6 sm:leading-10">
              I’m an experienced software engineer with seven years in
              full-stack web and mobile development, proficient in Spring
              Framework, React, React Native, and DevOps deployment. Currently
              serving as a senior lead, I ensure quality execution and effective
              collaboration. My experience spans the financial sector, where I
              have worked with Waterfall, Agile Scrum, and Kanban methodologies.
              I have also collaborated with teams from the United Kingdom,
              India, Myanmar, Bangladesh, and the Philippines.
            </div>
            <div className="text-xs sm:text-lg leading-6 sm:leading-10">
              Say hi: cloudcamilon@gmail.com
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

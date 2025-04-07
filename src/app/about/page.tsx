"use client";

import { JSX } from "react";
import Image from "next/image";

export default function About(): JSX.Element {
  return (
    <div className="flex mt-12">
      <main className=" flex pt-10 text-black flex-col relative overflow-hidden">
        <div className="flex flex-col md:flex-row px-6">
          <div className="relative w-full md:w-[45%] lg:w-[50%] h-[300px] md:h-[475px] lg:h-[650px]">
            <Image
              priority
              src="/about2.jpg"
              alt="About Cloud"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className=" md:w-[53%] lg:w-[70%] flex flex-col justify-center md:pl-5  align-middle self-center items-center ">
            <div className="md:w-[80%] lg:w-[85%]">
              <div className="sm:mt-12 mt-6 mb-3 font-bold text-lg sm:text-xs">
                ABOUT ME
              </div>
              <div className="text-xs mb-3 leading-6 sm:leading-5">
                I’m an experienced software engineer with seven years in
                full-stack web and mobile development, proficient in Spring
                Framework, React, React Native, and DevOps deployment. Currently
                serving as a senior lead, I ensure quality execution and
                effective collaboration. My experience spans the financial
                sector, where I have worked with Waterfall, Agile Scrum, and
                Kanban methodologies. I have also collaborated with teams from
                the United Kingdom, India, Myanmar, Bangladesh, and the
                Philippines.
              </div>
              <div className="text-xs lg:text-xs leading-6 sm:leading-10">
                Say hi: cloudcamilon@gmail.com
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

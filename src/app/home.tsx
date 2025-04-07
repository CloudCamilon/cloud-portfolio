"use client";

// import { HorizontalScroll } from "./_components/horizontal-scroll";
import Image from "next/image";
import { Pill } from "./_components/button";

export default function Home() {
  return (
    <div className=" flex  px-6">
      <main className="flex relative md:pb-16">
        <div className="flex text-center items-center md:text-left md:items-start pt-10 flex-col relative md:w-4/6">
          <Image
            src={"/clouds.svg"}
            alt={"cloud-logo"}
            width={78}
            height={51}
            className="mb-14 md:mb-6 md:invisible"
          />
          <div className="w-4/5 md:w-full font-bold mb-3 leading-8">
            Cloud is a full-stack developer making clouds in the sky.
          </div>
          <div className="text-xs leading-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div
            className="hidden md:flex flex-wrap mt-6 gap-1 w-4/5 lg:w-1/2"
            id="contact-section"
          >
            <Pill title={"React"} handleClick={() => {}} />
            <Pill title={"React Native"} handleClick={() => {}} />
            <Pill title={"Java"} handleClick={() => {}} />
            <Pill title={"Spring Boot"} handleClick={() => {}} />
            <Pill title={"TypeScript"} handleClick={() => {}} />
            <Pill title={"AngularJS"} handleClick={() => {}} />
          </div>
        </div>
        <div className="relative md:w-[35%] lg:w-[45%] xl:w-[30%] h-[300px] md:h-[475px] lg:h-[550px] ">
          <Image
            priority
            className="hidden md:flex z-1 absolute"
            src="/cloud.png"
            alt="Cloud icon"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </main>
    </div>
  );
}

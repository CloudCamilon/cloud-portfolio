"use client";

// import { HorizontalScroll } from "./_components/horizontal-scroll";
import Image from "next/image";
import { Pill } from "./_components/button";

const SKILLS = [
  { title: "React" },
  { title: "React Native" },
  { title: "TypeScript" },
  { title: "Java" },
  { title: "Spring Framework" },
  { title: "PostgreSQL" },
  { title: "MySQL" },
  { title: "AngularJS" },
];

export default function Home() {
  return (
    <div className="flex px-6 mt-10">
      <main className="flex relative">
        <div className="flex text-center items-center md:text-left md:items-start flex-col relative md:w-4/6 ">
          <Image
            src={"/clouds.svg"}
            alt={"cloud-logo"}
            width={78}
            height={51}
            className="mb-14 md:mb-6 md:invisible"
          />
          <p className="w-4/5 md:w-full font-bold mb-3 text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
            <span className="text-[#3185FC]">Cloud</span> is a
            <span className="text-[#EC4640]"> full-stack </span>
            developer <span className="text-[#FFC233]"> making </span> clouds
            <span className="text-[#FFC233]"> in </span>
            the <span className="text-[#3185FC]"> sky. </span>
          </p>
          <div className="text-xs lg:text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div
            className="hidden md:flex flex-wrap mt-6 gap-1 w-4/5 lg:w-1/2"
            id="contact-section"
          >
            {SKILLS.map((item, index) => (
              <Pill title={item.title} handleClick={() => {}} key={index} />
            ))}
          </div>
        </div>
        <div className="relative md:w-[35%] lg:w-[45%] xl:w-[30%] h-[300px] md:h-[475px] lg:h-[550px] ">
          <Image
            priority
            className="hidden md:flex z-1 absolute"
            src="/cloud.png"
            alt="Cloud icon"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </main>
    </div>
  );
}

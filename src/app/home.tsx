"use client";

// import { HorizontalScroll } from "./_components/horizontal-scroll";
import Image from "next/image";
import { Pill } from "./_components/button";

const SKILLS = [
  { title: "React" },
  { title: "React Native" },
  { title: "TypeScript" },
  { title: "Tailwind CSS" },
  { title: "Next.js" },
  { title: "Angular.js" },
  { title: "Java" },
  { title: "Spring Framework" },
  { title: "PostgreSQL" },
  { title: "MySQL" },
];

export default function Home() {
  return (
    <div id="cloud-home" className="flex px-6 mt-10">
      <main className="flex relative">
        <div className="flex text-center items-center md:text-left md:items-start flex-col relative md:w-4/6 ">
          <Image
            src={"/clouds.svg"}
            alt={"cloud-logo"}
            width={78}
            height={51}
            className="mb-14 md:mb-6 md:invisible"
          />
          <p className="w-4/5 md:w-full font-bold mb-3 lg:mb-6  text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
            <span className="text-[#3185FC]">Cloud</span> is a
            <span className="text-[#EC4640]"> full-stack </span>
            developer <span className="text-[#FFC233]"> making </span> clouds
            <span className="text-[#FFC233]"> in </span>
            the <span className="text-[#3185FC]"> sky. </span>
          </p>
          <div className="text-xs lg:text-sm leading-6 xl:w-10/12">
            {`Hi! My name is Cloud Camilon. I build things both for web and
            mobile. What I love the most are two things: seeing my imaginations
            come to life through software and learning alongside other people.
            Some days I'm deep in React components, other days I'm wrestling
            with Spring Framework APIs, but every day I'm always looking for
            ways to feed my curiosity—whether it's UI/UX, DevOps, or AI. Get to
            know more about me and my journey in this digital world.`}
          </div>
          <div
            className="hidden md:flex flex-wrap mt-6 gap-1 w-4/5 lg:w-2/3"
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

"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimateScroll from "../_components/animate-scroll";
import { TimelineBar } from "../_components/Timeline/timeline-bar";

export default function Experience(): JSX.Element {
  const novareExp = useRef<HTMLDivElement>(null);
  const finastraExp = useRef<HTMLDivElement>(null);
  const botBrosExp = useRef<HTMLDivElement>(null);
  const barReference = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState({ novare: 0, finastra: 0, botbros: 0 });

  const [novareThreshold, setNovareThreshold] = useState(false);
  const [finastraThreshold, setFinastraThreshold] = useState(false);
  const [botbrosThreshold, setBotbrosThreshold] = useState(false);
  const [experienceHeight, setExperienceHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setExperienceHeight(barReference.current?.clientHeight);
  }, [barReference]);

  /* use effect to get height of section experience */
  useEffect(() => {
    const projectsHeight = {
      novare:
        novareExp && novareExp.current ? novareExp.current.clientHeight : 0,
      finastra:
        finastraExp && finastraExp.current
          ? finastraExp.current.clientHeight
          : 0,
      botbros:
        botBrosExp && botBrosExp.current ? botBrosExp.current.clientHeight : 0,
    };
    setHeight(projectsHeight);
  }, []);

  return (
    <div
      id="experience-section"
      className="relative flex flex-col mt-16 pb-5 gap-20"
    >
      <AnimateScroll
        onIntersect={(intersect) => {
          setNovareThreshold(intersect);
        }}
      >
        <div
          id="novare-experience"
          ref={novareExp}
          className=" flex md:items-end flex-col text-sm w-full md:pl-20"
        >
          <div className="flex flex-col md:w-1/2 gap-3">
            <div className="text-base font-bold">
              Lead & Senior Lead Software Engineer at MDI Novare
            </div>
            <div className="font-light">2021 - Present</div>
            <div className="text-xs leading-6">
              Development and stakeholder management for client (Metrobank).
              Modernized a legacy system for processes such as check encashment
              and cash deposit for digital banking. Led the creation of a
              dynamic form app. Developed a fnancial literacy and investment
              mobile app for new investors of Metrobank with over 100K+
              downloads and 4.0+ star rating. People manager and instructor for
              MDI Novare&apos;s boot camp programs.
            </div>
            <div className={`relative w-full h-[200px] lg:h-[300px]`}>
              <Image
                priority
                className=""
                src="/novare.jpg"
                alt="Novare Project"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </div>
        </div>
      </AnimateScroll>
      <AnimateScroll
        onIntersect={(intersect) => {
          setFinastraThreshold(intersect);
        }}
      >
        <div
          ref={finastraExp}
          className=" flex flex-col gap-3 text-sm md:w-1/2 md:pr-10"
        >
          <div className="text-base font-bold">
            Associate & Software Engineer at Finastra
          </div>
          <div className="font-light">2019 - 2021</div>
          <div className="text-xs leading-6">
            Developed new features and improved components for online banking.
            Customized banking products and supported global services for
            clients in Myanmar and Bangladesh. Served a collective online
            customer base exceeding an estimated 1 million users. Frequently
            served as Scrum Master and handled DevOps activities, including
            server maintenance, automation, and product releases.{" "}
          </div>
          <div className={`relative w-full h-[200px] lg:h-[300px]`}>
            <Image
              priority
              className=""
              src="/finastra.jpg"
              alt="Finastra Project"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
      </AnimateScroll>
      <AnimateScroll
        onIntersect={(intersect) => {
          setBotbrosThreshold(intersect);
        }}
      >
        <div
          ref={botBrosExp}
          className=" flex md:items-end flex-col text-sm w-full md:pl-20"
        >
          <div className="flex flex-col md:w-1/2 gap-3">
            <div className="text-base font-bold">
              Junior Developer Volunteer & Intern at BotBros AI
            </div>
            <div className="font-light">2019 - 2021</div>
            <div className="text-xs leading-6">
              Built an English Learning and a Human Resource system for local
              clients. Created a mobile-responsive informational site for a
              client in Germany.
            </div>
            <div className={`relative w-full h-[200px]  lg:h-[300px]`}>
              <Image
                priority
                className=""
                src="/botbros.jpg"
                alt="Novare Project"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
          </div>
        </div>
      </AnimateScroll>
      <div
        ref={barReference}
        id="experience-bar"
        className="hidden md:flex w-2 h-full bg-[#D9D9D9] rounded-xl absolute left-1/2"
      >
        <TimelineBar barHeight={experienceHeight}></TimelineBar>

        <div
          className={`z-10 transition-all duration-1000 ease-out absolute -left-1.5 rounded-full w-5 h-5 ${
            novareThreshold ? "bg-cloud-palette-blue" : "bg-[#D9D9D9]"
          }`}
        />
        <div
          style={{ top: height.novare + 75 }}
          className={`z-10 transition-all duration-1000 ease-out absolute -left-1.5 rounded-full w-5 h-5 ${
            finastraThreshold ? "bg-cloud-palette-blue" : "bg-[#D9D9D9]"
          }`}
        />
        <div
          style={{ top: height.finastra + height.novare + 160 }}
          className={`z-10 transition-all duration-1000 ease-out absolute -left-1.5 rounded-full w-5 h-5 ${
            botbrosThreshold ? "bg-cloud-palette-blue" : "bg-[#D9D9D9]"
          }`}
        />
      </div>
    </div>
  );
}

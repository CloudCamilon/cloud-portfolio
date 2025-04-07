"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Experience(): JSX.Element {
  const novareExp = useRef<HTMLDivElement>(null);
  const finastraExp = useRef<HTMLDivElement>(null);
  const botBrosExp = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState({ novare: 0, finastra: 0, botbros: 0 });

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
    <div className="relative flex flex-col pt-16 pb-5 gap-20">
      <div
        ref={novareExp}
        className="flex md:items-end flex-col text-sm w-full md:pl-20"
      >
        <div className="flex flex-col md:w-1/2 gap-5">
          <div className="font-bold">
            Lead & Senior Lead Software Engineer at MDI Novare
          </div>
          <div className="font-light">2021 - Present</div>
          <div className="text-xs">
            Development and stakeholder management for client (Metrobank).
            Modernized a legacy system for processes such as check encashment
            and cash deposit for digital banking. Led the creation of a dynamic
            form app. Developed a fnancial literacy and investment mobile app
            for new investors of Metrobank with over 100K+ downloads and 4.0+
            star rating. People manager and instructor for MDI Novare&apos;s
            boot camp programs.
          </div>
          <div className={`relative w-full h-[200px] lg:h-[300px]`}>
            <Image
              priority
              className=""
              src="/novare.jpg"
              alt="Novare Project"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div
        ref={finastraExp}
        className="flex flex-col gap-5 text-sm md:w-1/2 md:pr-10"
      >
        <div className="font-bold">
          Associate & Software Engineer at Finastra
        </div>
        <div className="font-light">2019 - 2021</div>
        <div className="text-xs">
          Developed new features and improved components for online banking.
          Customized banking products and supported global services for clients
          in Myanmar and Bangladesh. Served a collective online customer base
          exceeding an estimated 1 million users. Frequently served as Scrum
          Master and handled DevOps activities, including server maintenance,
          automation, and product releases.{" "}
        </div>
        <div className={`relative w-full h-[200px] lg:h-[300px]`}>
          <Image
            priority
            className=""
            src="/finastra.jpg"
            alt="Finastra Project"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      <div
        ref={botBrosExp}
        className="flex md:items-end flex-col text-sm w-full md:pl-20"
      >
        <div className="flex flex-col md:w-1/2 gap-5">
          <div className="font-bold">
            Junior Developer Volunteer & Intern at BotBros AI
          </div>
          <div className="font-light">2019 - 2021</div>
          <div className="text-xs">
            Built an English Learning and a Human Resource system for local
            clients. Created a mobile-responsive informational site for a client
            in Germany.
          </div>
          <div className={`relative w-full h-[200px]  lg:h-[300px]`}>
            <Image
              priority
              className=""
              src="/botbros.jpg"
              alt="Novare Project"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-2 h-full bg-[#D9D9D9] rounded-xl absolute left-1/2">
        <div className="absolute -left-1.5 rounded-full w-5 h-5 bg-black" />
        <div
          style={{ top: height.novare + 75 }}
          className="absolute -left-1.5 rounded-full w-5 h-5 bg-[#D9D9D9]"
        />
        <div
          style={{ top: height.finastra + height.novare + 160 }}
          className="absolute -left-1.5 rounded-full w-5 h-5 bg-[#D9D9D9]"
        />
      </div>
    </div>
  );

  return (
    <div className="  flex flex-col px-10 pt-16 pb-5  w-full h-full">
      <div ref={novareExp} className="mb-24 w-full ml-5 justify-items-end">
        <div className=" flex flex-col w-1/2 gap-3">
          <div className="font-bold">
            Lead & Senior Lead Software Engineer at MDI Novare
            <div className=" font-light">2021 - Present</div>
          </div>
          <div className="text-sm">
            Development and stakeholder management for client (Metrobank).
            Modernized a legacy system for processes such as check encashment
            and cash deposit for digital banking. Led the creation of a dynamic
            form app. Developed a fnancial literacy and investment mobile app
            for new investors of Metrobank with over 100K+ downloads and 4.0+
            star rating. People manager and instructor for MDI Novare&apos;s
            boot camp programs.
          </div>
          <Image
            priority
            className=""
            src="/novare.jpg"
            alt="Novare Project"
            width={600}
            height={350}
          />
        </div>
      </div>

      <div ref={finastraExp} className="flex flex-col w-1/2 gap-3">
        <div className="font-bold">
          Associate & Software Engineer at Finastra
          <div className=" font-light">2019 - 2021</div>
        </div>
        <div className="text-sm">
          Developed new features and improved components for online banking.
          Customized banking products and supported global services for clients
          in Myanmar and Bangladesh. Served a collective online customer base
          exceeding an estimated 1 million users. Frequently served as Scrum
          Master and handled DevOps activities, including server maintenance,
          automation, and product releases.{" "}
        </div>
        <Image
          priority
          className=""
          src="/finastra.jpg"
          alt="Finastra Project"
          width={600}
          height={350}
        />
      </div>

      <div ref={botBrosExp} className="mt-24 w-full ml-5 justify-items-end">
        <div className=" flex flex-col  w-1/2 gap-5 ">
          <div className="font-bold">
            Junior Developer Volunteer & Intern at BotBros AI
            <div className=" font-light">2018 - 2019</div>
          </div>
          <div className="text-sm">
            Developed functional front-end components for an English as a Second
            Language (ESL) application using AngularJS. Created a mobile
            responsive informational site for a company based in Berlin,
            Germany. Developed functional front-end components and back-end APIs
            for a Human Resource Information System (HRIS).
          </div>
          <Image
            priority
            className=""
            src="/botbros.jpg"
            alt="Finastra Project"
            width={550}
            height={350}
          />
        </div>
      </div>
      <div className=" w-2 h-full bg-[#D9D9D9] rounded-xl absolute left-1/2">
        <div className="absolute -left-1.5 rounded-full w-5 h-5 bg-black" />
        <div
          style={{ top: height.novare + 96 }}
          className="absolute -left-1.5 rounded-full w-5 h-5 bg-[#D9D9D9]"
        />
        <div
          style={{ top: height.finastra + height.novare + 175 }}
          className="absolute -left-1.5 rounded-full w-5 h-5 bg-[#D9D9D9]"
        />
      </div>
    </div>
  );
}

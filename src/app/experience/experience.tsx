"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Experience(): JSX.Element {
  const [scrollPos, setScrollPos] = useState(0);
  const novareExp = useRef<HTMLDivElement>(null);
  const finastraExp = useRef<HTMLDivElement>(null);
  const botBrosExp = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState({ novare: 0, finastra: 0, botbros: 0 });
  const [isExperienceInView, setIsExperienceInView] = useState<boolean>(false);
  const [isFinastraView, setIsFinastraView] = useState<boolean>(false);
  const [hasPassedNovare, sethasPassedNovare] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  /** logging use effect */
  useEffect(() => {
    console.log(novareExp.current?.getBoundingClientRect().top);
    console.log({ hasPassedNovare });
  });

  /* use effect handle scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine direction
      if (currentScrollY > prevScrollY.current) {
        setScrollingDown(true); // Scrolling down
      } else if (currentScrollY < prevScrollY.current) {
        setScrollingDown(false); // Scrolling up
      }

      // Update stored scroll position
      prevScrollY.current = currentScrollY;

      // Update scroll position state
      setScrollPos(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*ungodly useeffect novare */
  useEffect(() => {
    if (isExperienceInView) {
      if (scrollingDown) {
        if (hasPassedNovare) {
          setProgress(novareExp.current?.clientHeight + 75);
        } else if (novareExp.current?.clientHeight <= progress) {
          setProgress(novareExp.current?.clientHeight + 75);
        }
        setProgress((old) => old + 3);
      }
    }
    //  else {
    //   if (scrollingDown && hasPassedNovare) {
    //     setProgress(novareExp.current?.clientHeight + 75);
    //   }
    // }
  }, [isExperienceInView, scrollPos]);

  /*ungodly useeffect finastra */
  useEffect(() => {
    if (isFinastraView) {
      if (scrollingDown) {
        // if (hasPassedNovare) {
        //   setProgress(novareExp.current?.clientHeight + 75);
        // } else if (novareExp.current?.clientHeight <= progress) {
        //   setProgress(novareExp.current?.clientHeight + 75);
        // }
        setProgress((old) => old + 10);
      }
    } else {
      if (scrollingDown) {
        setProgress(finastraExp.current?.clientHeight + 150);
      }
    }
  }, [isExperienceInView, scrollPos]);

  useEffect(() => {
    const element = novareExp.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Element is in view!");
          // Trigger your logic here
          setIsExperienceInView(true);
        } else if (!hasPassedNovare && !entry.isIntersecting) {
          setIsExperienceInView(false);
          sethasPassedNovare(true);
        } else {
          console.log("Element is not in view!");
          setIsExperienceInView(false);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed (0.5 = 50% visibility)
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const element = finastraExp.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Element is in view!");
          // Trigger your logic here
          setIsFinastraView(true);
        } else if (!hasPassedNovare && !entry.isIntersecting) {
          setIsFinastraView(false);
          // sethasPassedNovare(true);
        } else {
          console.log("Element is not in view!");
          setIsFinastraView(false);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed (0.5 = 50% visibility)
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

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
      <div
        ref={novareExp}
        className="flex md:items-end flex-col text-sm w-full md:pl-20"
      >
        <div className="flex flex-col md:w-1/2 gap-3">
          <div className="text-base font-bold">
            Lead & Senior Lead Software Engineer at MDI Novare
            {"  progress value : "}
            {progress}
            {"  is in view "}
            {isExperienceInView + ""}
            {" scroll position of screen  "}
            {scrollPos}
            {"  height of the novare thing "}
            {novareExp.current?.clientHeight}
            {" scrolling down "}
            {scrollingDown + ""}
          </div>
          <div className="font-light">2021 - Present</div>
          <div className="text-xs leading-6">
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
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
      </div>

      <div
        ref={finastraExp}
        className="flex flex-col gap-3 text-sm md:w-1/2 md:pr-10"
      >
        <div className="text-base font-bold">
          Associate & Software Engineer at Finastra
        </div>
        <div className="font-light">2019 - 2021</div>
        <div className="text-xs leading-6">
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
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </div>

      <div
        ref={botBrosExp}
        className="flex md:items-end flex-col text-sm w-full md:pl-20"
      >
        <div className="flex flex-col md:w-1/2 gap-3">
          <div className="text-base font-bold">
            Junior Developer Volunteer & Intern at BotBros AI
          </div>
          <div className="font-light">2019 - 2021</div>
          <div className="text-xs leading-6">
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
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
      </div>

      <div
        id="experience-bar"
        className="hidden md:flex w-2 h-full bg-[#D9D9D9] rounded-xl absolute left-1/2"
      >
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

      <div
        id="experience-progress"
        style={{ height: progress }}
        className={`max-h-full hidden md:flex w-2  bg-[#3185FC] rounded-xl absolute left-1/2`}
      >
        {/* <div className="absolute -left-1.5 rounded-full w-5 h-5 bg-black" />
        <div
          style={{ top: height.novare + 75 }}
          className="absolute -left-1.5 rounded-full w-5 h-5 bg-[#D9D9D9]"
        />
        <div
          style={{ top: height.finastra + height.novare + 160 }}
          className="absolute -left-1.5 rounded-full w-5 h-5 bg-[#D9D9D9]"
        /> */}
      </div>
    </div>
  );
}

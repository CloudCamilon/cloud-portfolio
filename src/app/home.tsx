"use client";

// import { HorizontalScroll } from "./_components/horizontal-scroll";
import Image from "next/image";
import useDebouncedResize from "./hooks/useDebouncedResize";
import { Pill } from "./_components/button";

export default function Home() {
  const { width, height } = useDebouncedResize();

  return (
    <div className=" flex w-full px-6">
      <main className="flex relative md:pb-16">
        <div className="flex text-center items-center md:text-left  md:items-start pt-10 flex-col relative md:w-4/6">
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
        <Image
          priority
          className="hidden md:flex z-1 absolute bottom-[-10%] right-0"
          src="/cloud.png"
          alt="Cloud icon"
          width={width / 3}
          height={height / 3}
        />
      </main>
    </div>
  );

  // return (
  //   <div
  //     className="flex min-h-screen w-full "
  //     style={{ backgroundColor: "white" }}
  //   >
  //     <main className="min-h-screen flex w-full pt-10 text-black flex-col relative overflow-hidden">
  //       <div
  //         className={`${
  //           isLoading ? "" : "hidden"
  //         } flex items-center justify-center  min-h-screen`}
  //       >
  //         Loading ...
  //       </div>
  //       <div className={`${isLoading ? "hidden" : ""}`}>
  //         <div className="mt-10 mb-10 pl-10 pr-[600px]">
  //           <div className="flex sans-serif text-4xl font-bold mb-5">
  //             Named after the clouds in the sky, now I&apos;m creating digital
  //             skies in the cloud.
  //           </div>
  //           <div className="text-lg">
  //             Hi, I&apos;m Cloud! A fullstack software engineer. Get to know me
  //             more by exploring my portfolio. Lorem ipsum dolor sit amet,
  //             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //             labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  //             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  //             consequat.
  //           </div>
  //           <div
  //             className="flex flex-wrap mt-6 gap-1 w-1/2"
  //             id="contact-section"
  //           >
  //             {/* <Button
  //               title={"Learn More"}
  //               handleClick={() => router.push("/about")}
  //             /> */}
  //             <Pill title={"React"} handleClick={() => {}} />
  //             <Pill title={"React Native"} handleClick={() => {}} />
  //             <Pill title={"Java"} handleClick={() => {}} />
  //             <Pill title={"Spring Boot"} handleClick={() => {}} />
  //             <Pill title={"TypeScript"} handleClick={() => {}} />
  //             <Pill title={"AngularJS"} handleClick={() => {}} />
  //           </div>
  //         </div>
  //         <div className="z-0 content-center px-0 flex-grow">
  //           <HorizontalScroll leftDirection={false} />
  //         </div>
  //         <Image
  //           priority
  //           className="z-1 absolute bottom-[-10%] right-[10%]"
  //           src="/cloud.png"
  //           alt="Cloud icon"
  //           width={width / 3}
  //           height={height / 3}
  //         />
  //       </div>
  //     </main>
  //   </div>
  // );
}

"use client";

import Header from "./_components/header";
import { HorizontalScroll } from "./_components/horizontal-scroll";
import Image from "next/image";
import useDebouncedResize from "./hooks/useDebouncedResize";
import { useEffect, useState } from "react";
import Button from "./_components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { width, height } = useDebouncedResize();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate waiting for fonts or assets to load
    document.fonts.ready.then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <div
      className="flex min-h-screen w-full "
      style={{ backgroundColor: "white" }}
    >
      <main className="min-h-screen flex w-full pt-10 text-black flex-col relative overflow-hidden">
        <div
          className={`${
            isLoading ? "" : "hidden"
          } flex items-center justify-center  min-h-screen`}
        >
          Loading ...
        </div>
        <div className={`${isLoading ? "hidden" : ""}`}>
          <Header selected="HOME" />
          <div className="mt-10 mb-10 pl-10 pr-[600px]">
            <div className="flex sans-serif text-5xl font-bold mb-5">
              Named after the clouds in the sky, now I&apos;m creating digital
              skies in the cloud.
            </div>
            <div className="text-md">
              Hi, I&apos;m Cloud! A fullstack software engineer. Get to know me
              more by exploring my portfolio.
            </div>
            <div className="flex mt-6" id="contact-section">
              <Button
                title={"Learn More"}
                handleClick={() => router.push("/about")}
              />
            </div>
          </div>
          <div className="z-0 content-center px-0 flex-grow">
            <HorizontalScroll leftDirection={false} />
          </div>
          <Image
            priority
            className="z-1 absolute bottom-[-20%] right-[10%]"
            src="/cloud.png"
            alt="Cloud icon"
            width={width / 3}
            height={height / 3}
          />
        </div>
      </main>
    </div>
  );
}

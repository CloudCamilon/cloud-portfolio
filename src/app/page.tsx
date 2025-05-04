"use client";

import Header from "./_components/header";
import ComingSoon from "./coming-soon";
import Home from "./home";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Misc from "./misc/page";
import Footer from "./_components/footer";
import About from "./about/page";
import { useEffect, useState } from "react";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate waiting for fonts or assets to load
    document.fonts.ready.then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return false ? (
    <ComingSoon />
  ) : (
    <div
      className={`bg-white text-black ${
        isLoading ? "hidden" : "visible"
      }  2xl:px-[25%]`}
    >
      <Header selected="HOME" />
      <div className="lg:px-[5%] xl:px-10%]">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Misc />
      </div>
      <Footer />
    </div>
  );
}

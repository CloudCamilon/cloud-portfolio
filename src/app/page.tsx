"use client";

import Header from "./_components/header";
import About from "./about/page";
import ComingSoon from "./coming-soon";
import Home from "./home";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Misc from "./misc/page";
import Footer from "./_components/footer";

export default function Main() {
  return false ? (
    <ComingSoon />
  ) : (
    <div className="bg-white text-black">
      <Header selected="HOME" />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Misc />
      <Footer />
    </div>
  );
}

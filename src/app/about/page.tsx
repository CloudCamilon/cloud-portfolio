import { JSX } from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function About(): JSX.Element {
  return (
    <div
      className="flex min-h-screen w-full "
      style={{ backgroundColor: "white" }}
    >
      <main className="min-h-screen flex w-full pt-10 text-black flex-col relative overflow-hidden">
        <Header selected={"ABOUT"} />
        <div className="flex flex-row px-10">
          <div className=" w-1/2"></div>
          <div className=" w-1/2">
            <div className="mt-12 mb-10 font-bold text-5xl">ABOUT</div>
            <div className="text-md leading-10">
              I’m an experienced software engineer with seven years in
              full-stack web and mobile development, proficient in Spring
              Framework, React, React Native, and DevOps deployment. Currently
              serving as a senior lead, I ensure quality execution and effective
              collaboration. My experience spans the financial sector, where I
              have worked with Waterfall, Agile Scrum, and Kanban methodologies.
              I have also collaborated with teams from the United Kingdom,
              India, Myanmar, Bangladesh, and the Philippines.
            </div>
          </div>
        </div>

        <div className="w-full absolute bottom-0">
          <Footer />
        </div>
      </main>
    </div>
  );
}

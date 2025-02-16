import { JSX } from "react";
import Header from "../_components/header";
import Companies from "./clients";
import Project from "./project";

export default function Page(): JSX.Element {
  return (
    <div
      className="flex min-h-screen w-full "
      style={{ backgroundColor: "white" }}
    >
      <main className="min-h-screen flex w-full pt-10 text-black flex-col relative overflow-hidden">
        <Header selected={"PROJECTS"} />
        <div className="flex px-10">
          <Companies />
        </div>
        <Project />
      </main>
    </div>
  );
}

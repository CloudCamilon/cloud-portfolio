import { JSX } from "react";
import Companies from "./clients";
import Experience from "./experience";

export default function Page(): JSX.Element {
  return (
    <div
      id="career-section"
      className="flex px-6 mt-16"
      style={{ backgroundColor: "white" }}
    >
      <div className="flex w-full mt-14 text-black flex-col ">
        <Companies />
        <Experience />
      </div>
    </div>
  );
}

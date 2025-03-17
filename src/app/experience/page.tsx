import { JSX } from "react";
import Companies from "./clients";
import Experience from "./experience";

export default function Page(): JSX.Element {
  return (
    <div className="flex px-6 " style={{ backgroundColor: "white" }}>
      <div className="flex w-full mt-12 text-black flex-col ">
        <Companies />
        <Experience />
      </div>
    </div>
  );
}

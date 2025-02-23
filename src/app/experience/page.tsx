import { JSX } from "react";
import Companies from "./clients";
import Experience from "./experience";

export default function Page(): JSX.Element {
  return (
    <div
      className="flex min-h-screen w-full "
      style={{ backgroundColor: "white" }}
    >
      <main className="min-h-screen flex w-full mt-12 text-black flex-col relative overflow-hidden">
        <div className="flex px-10">
          <Companies />
        </div>
        <Experience />
      </main>
    </div>
  );
}

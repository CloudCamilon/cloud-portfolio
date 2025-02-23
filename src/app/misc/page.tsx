import { JSX } from "react";
import Image from "next/image";

export default function Misc(): JSX.Element {
  return (
    <div className=" flex flex-col min-h-screen mt-24  p-10">
      <div className="gap-2 flex flex-col w-full  text-center justify-center align-middle items-center">
        <Image
          priority
          className=""
          src="/pinnacle.jpg"
          alt="Cloud icon"
          height={383}
          width={620}
        />
        <div className="font-bold">
          Core Values Champion Award (Grit) - Pinnacle Awards
        </div>
        <div className="font-light">MDI Novare</div>
        <div className="w-1/2">
          Recognized for excellence and performance. The annual event honors
          individuals and teams for innovative tech approaches and outstanding
          contributions. Won against 261 core value nominations, highlighting
          exceptional work among the best in the organization.
        </div>
      </div>
      <div className="flex min-h-screen mt-24 bg-slate-100 p-10">
        <div className="flex flex-col flex-1 bg-red-300 w-1/2">
          <div className="flex h-2/6 w-full bg-black"></div>
          <div className="flex w-full bg-white"></div>
        </div>
        <div className="flex flex-1 bg-orange-300 w-1/2"></div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <div className="flex flex-col text-xs  sm:p-20  p-5 sm:text-sm bg-[#EFF2EF] w-full sm:h-[408] h-[250]">
      <div className="flex justify-between">
        <div className="flex flex-col sm:text-base gap-3 ">
          <div>HOME</div>
          <div>ABOUT</div>
          <div>EXPERIENCE</div>
          <div>PROJECTS</div>
          <div>MISC</div>
        </div>
        <div className="w-[65%] flex flex-col sm:text-base justify-between  gap-1 ">
          <div className="flex flex-wrap flex-col gap-1 ">
            <div className="md:text-lg">Get in touch</div>
            <div>cloudcamilon@gmail.com</div>
            <div>
              Jupiter Street, Barangay Bel-Air, Makati City, Metro Manila, 1227,
              Philippines
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <Image
              priority
              className=""
              src="icons/github.svg"
              alt="Github icon"
              height={16}
              width={16}
            />
            <Image
              priority
              className=""
              src="icons/linkedin.svg"
              alt="Github icon"
              height={16}
              width={16}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse h-1/2">
        <div>Copyright © 2025 Cloud Camilon. All rights reserved.</div>
      </div>
    </div>
  );
}

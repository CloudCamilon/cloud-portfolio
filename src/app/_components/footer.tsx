import Image from "next/image";
import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <div className="text-sm p-20 flex bg-[#EFF2EF] w-full h-[408]">
      <div className="w-full h-full">
        <div className="flex h-1/2 ">
          <div className="flex flex-col text-base gap-3 w-32 ">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>EXPERIENCE</div>
            <div>PROJECTS</div>
            <div>MISC</div>
          </div>
          <div className="pl-6  text-base">
            <div className="flex flex-col gap-1">
              <div>Get in touch</div>
              <div>cloudcamilon@gmail.com</div>
              <div>
                Jupiter Street, Barangay Bel-Air, Makati City, Metro Manila,
                1227, Philippines
              </div>
            </div>

            <div className="flex h-3/4 flex-col-reverse">
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
        </div>
        <div className="flex flex-col-reverse h-1/2">
          <div>Copyright © 2025 Cloud Camilon. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

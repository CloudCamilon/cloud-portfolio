"use client";

import { JSX } from "react";
import Image from "next/image";

export default function Misc(): JSX.Element {
  return (
    <div id="misc-section">
      <div className=" flex flex-col p-6 text-center items-center gap-3">
        <div className="relative w-full md:w-[500px] h-[230px] md:h-[350px]">
          <Image
            priority
            src="/pinnacle.jpg"
            alt="Cloud icon"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="font-bold w-2/3">
          Core Values Champion Award (Grit) - Pinnacle Awards
        </div>
        <div className="font-light text-sm">MDI Novare</div>
        <div className="text-xs md:w-3/4 leading-6 lg:w-[50%]">
          Recognized for excellence and performance. The annual event honors
          individuals and teams for innovative tech approaches and outstanding
          contributions. Won against 261 core value nominations, highlighting
          exceptional work among the best in the organization.
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 my-16 px-6 ">
        {/* Left Section */}
        <div className="flex flex-row justify-center gap-5 md:w-1/2">
          <div className="flex flex-col gap-6">
            {/* Top Row */}
            <div className="flex justify-around">
              <div className="flex flex-1 items-center flex-col gap-3">
                <Image
                  priority
                  src="/azure_fundamentals.svg"
                  alt="Azure Fundamentals"
                  height={100}
                  width={100}
                />
                <div className="text-xs text-center leading-5">
                  Azure Fundamentals demonstrates foundational level knowledge
                  of cloud services and how those services are provided with
                  Microsoft Azure.
                </div>
              </div>
              <div className="flex flex-1 items-center flex-col gap-3">
                <Image
                  priority
                  src="/azure_ai.svg"
                  alt="Azure AI"
                  height={100}
                  width={100}
                />
                <div className="text-xs text-center leading-5">
                  Azure AI Fundamentals certification demonstrates foundational
                  knowledge of artificial intelligence (AI) and related
                  services.
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative flex flex-col w-full  md:h-[275px] h-[185px] ">
              <Image
                priority
                src="/bootcamp.png"
                alt="Bootcamp"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>

            {/*Bottom Section */}
            <div className="flex flex-col gap-3">
              <div className="font-bold text-base">
                SQE Boot Camp Batch 23: Top Rated Instructor
              </div>
              <div className="font-light text-sm">MDI Novare</div>
              <div className="text-xs leading-6">
                {`Invited as an instructor for MDI Novare's premiere junior
                bootcamp program. Participated in a number of batches and taught
                subjects ranging from basic Java to advanced Spring MVC courses.
                Recognized as highest rated instructor for Batch 23.`}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="relative grow flex flex-col w-full h-[453px]">
            <Image
              priority
              src="/tmi.jpg"
              alt="TMI"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>

          <div className="flex">
            <div className="flex flex-col gap-3">
              <div className="font-bold text-base">
                Technical Management Institute Graduate
              </div>
              <div className="font-light text-sm">MDI Novare</div>
              <div className="text-xs leading-6">
                {`Shortlisted and completed MDI Novare’s fast-tracked technical
                and leadership development program for emerging leaders that
                have the potential to be full time Technical Managers. Attended
                3 months of technical and leadership training + 3 months of
                On-The-Job (OJT) sessions.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

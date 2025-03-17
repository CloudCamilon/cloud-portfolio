import { JSX } from "react";
import Image from "next/image";

export default function Misc(): JSX.Element {
  return (
    <div>
      <div className=" flex flex-col mt-24 p-6 text-center items-center gap-3">
        <div className="relative w-full h-[290] ">
          <Image
            priority
            src="/pinnacle.jpg"
            alt="Cloud icon"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="font-bold w-2/3">
          Core Values Champion Award (Grit) - Pinnacle Awards
        </div>
        <div className="font-light">MDI Novare</div>
        <div className="text-sm">
          Recognized for excellence and performance. The annual event honors
          individuals and teams for innovative tech approaches and outstanding
          contributions. Won against 261 core value nominations, highlighting
          exceptional work among the best in the organization.
        </div>
      </div>

      <div className="flex flex-col gap-10 my-24 px-6">
        <div className="flex flex-row justify-center gap-5">
          {/* Left Section */}
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
                <div className="text-xs text-center">
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
                <div className="text-xs text-center">
                  Azure AI Fundamentals certification demonstrates foundational
                  knowledge of artificial intelligence (AI) and related
                  services.
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="flex flex-col ">
              <Image
                priority
                src="/bootcamp.png"
                alt="Bootcamp"
                width={750}
                height={848}
              />
            </div>

            {/*Bottom Section */}
            <div className="flex">
              <div className="flex flex-col gap-1">
                <div className="font-bold text-sm">
                  SQE Boot Camp Batch 23: Top Rated Instructor
                </div>
                <div className="font-light text-sm">MDI Novare</div>
                <div className="text-xs">
                  Recognized for excellence and performance. The annual event
                  honors individuals and teams for innovative tech approaches
                  and outstanding contributions. Won against 261 core value
                  nominations, highlighting exceptional work among the best in
                  the organization.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col ">
            <Image
              priority
              src="/tmi.jpg"
              alt="TMI"
              width={476}
              height={848}
              className="object-cover flex flex-1"
            />
          </div>

          <div className="flex">
            <div className="flex flex-col gap-1">
              <div className="font-bold text-sm">
                Technical Management Institute Graduate
              </div>
              <div className="font-light text-sm">MDI Novare</div>
              <div className="text-xs">
                Shortlisted and completed MDI Novare’s fast-tracked technical
                and leadership development program for emerging leaders that are
                ready to be full time Technical Managers. Attended 3 months of
                technical and leadership training + 3 months of On-The-Job (OJT)
                sessions.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className=" flex flex-col mt-24 p-10">
  //     <div className="gap-2 flex flex-col w-full text-center  items-center">
  //       <Image
  //         priority
  //         className=""
  //         src="/pinnacle.jpg"
  //         alt="Cloud icon"
  //         height={383}
  //         width={620}
  //       />
  //       <div className="font-bold">
  //         Core Values Champion Award (Grit) - Pinnacle Awards
  //       </div>
  //       <div className="font-light">MDI Novare</div>
  //       <div className="w-1/2">
  //         Recognized for excellence and performance. The annual event honors
  //         individuals and teams for innovative tech approaches and outstanding
  //         contributions. Won against 261 core value nominations, highlighting
  //         exceptional work among the best in the organization.
  //       </div>
  //     </div>

  //     <div className="flex flex-col justify-center gap-3 mt-24">
  //       <div className="flex flex-row  justify-center gap-5">
  //         {/* Left Section */}
  //         <div className="flex flex-col gap-6 w-1/2 ">
  //           {/* Top Row */}
  //           <div className="flex justify-around">
  //             <div className="flex flex-1 items-center flex-col gap-3">
  //               <Image
  //                 priority
  //                 src="/azure_fundamentals.svg"
  //                 alt="Azure Fundamentals"
  //                 height={152}
  //                 width={152}
  //               />
  //               <div className="text-xs text-center">
  //                 Azure Fundamentals demonstrates foundational level knowledge
  //                 of cloud services and how those services are provided with
  //                 Microsoft Azure.
  //               </div>
  //             </div>
  //             <div className="flex flex-1 items-center flex-col gap-3">
  //               <Image
  //                 priority
  //                 src="/azure_ai.svg"
  //                 alt="Azure AI"
  //                 height={152}
  //                 width={152}
  //               />
  //               <div className="text-xs text-center">
  //                 Azure AI Fundamentals certification demonstrates foundational
  //                 knowledge of machine learning (ML) and artificial intelligence
  //                 (AI) and related Microsoft Azure services.
  //               </div>
  //             </div>
  //           </div>
  //           {/* Bottom Image */}
  //           <div className="flex flex-col gap-2 justify-center">
  //             <Image
  //               priority
  //               src="/bootcamp.png"
  //               alt="Bootcamp"
  //               width={750}
  //               height={848}
  //             />
  //             {/* <div className="font-bold text-sm">
  //               SQE Boot Camp Batch 23: Top Rated Instructor
  //             </div>
  //             <div className="font-light text-sm">MDI Novare</div>
  //             <div className="text-xs w-[75%]">
  //               Recognized for excellence and performance. The annual event
  //               honors individuals and teams for innovative tech approaches and
  //               outstanding contributions. Won against 261 core value
  //               nominations, highlighting exceptional work among the best in the
  //               organization.
  //             </div> */}
  //           </div>
  //         </div>

  //         {/* Right Section */}
  //         <div className="flex flex-col gap-3">
  //           <Image
  //             priority
  //             src="/tmi.jpg"
  //             alt="TMI"
  //             width={476}
  //             height={848}
  //             className="object-cover flex flex-1"
  //           />
  //         </div>
  //       </div>

  //       {/*Bottom Section */}
  //       <div className="flex flex-row px-24">
  //         <div className="flex flex-col w-[60%] gap-1">
  //           <div className="font-bold text-sm">
  //             SQE Boot Camp Batch 23: Top Rated Instructor
  //           </div>
  //           <div className="font-light text-sm">MDI Novare</div>
  //           <div className="text-xs w-[75%]">
  //             Recognized for excellence and performance. The annual event honors
  //             individuals and teams for innovative tech approaches and
  //             outstanding contributions. Won against 261 core value nominations,
  //             highlighting exceptional work among the best in the organization.
  //           </div>
  //         </div>
  //         <div className="flex flex-col w-[40%] gap-1">
  //           <div className="font-bold text-sm">
  //             SQE Boot Camp Batch 23: Top Rated Instructor
  //           </div>
  //           <div className="font-light text-sm">MDI Novare</div>
  //           <div className="text-xs">
  //             Recognized for excellence and performance. The annual event honors
  //             individuals and teams for innovative tech approaches and
  //             outstanding contributions. Won against 261 core value nominations,
  //             highlighting exceptional work among the best in the organization.
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

const Company = ({
  source,
  company,
  link,
}: {
  source: string;
  company: string;
  link: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className={`relative w-full h-32 md:h-[275px]`}>
        <Image fill style={{ objectFit: "fill" }} src={source} alt="Earnest" />
      </div>
    </div>
  );
};

export default function Companies(): JSX.Element {
  return (
    <div className="sm:px-0 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
      <Company
        source={"/finastra.svg"}
        company="Finastra"
        link={"https://www.finastra.com"}
      />

      <Company
        source={"/novare.svg"}
        company="MDI Novare"
        link={"https://www.novare.com.ph"}
      />
      <Company
        source={"/metrobank.svg"}
        company="Metropolitan Bank"
        link={"https://www.metrobank.com.ph"}
      />
      <Company
        source={"/bb.svg"}
        company="BotBros AI"
        link={"https://www.botbros.ai"}
      />
      <Company
        source={"/bplus.svg"}
        company="B+ Studio"
        link={"https://www.b-plus.studio"}
      />
    </div>
  );
}

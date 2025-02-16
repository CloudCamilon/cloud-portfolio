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
    <Link href={link} className="h-full text-center">
      <div className="h-full  flex flex-col">
        <div className="flex flex-1 h-2/3 justify-center align-middle ">
          <Image
            priority
            className=""
            src={source}
            alt=""
            width={175}
            height={175}
          />
        </div>
        <div className="text-lg">{company}</div>
      </div>
    </Link>
  );
};

export default function Companies(): JSX.Element {
  return (
    <div
      id="companies"
      className="mb-10 grid grid-cols-5 gap-5 w-full h-[20vh] place-items-center "
    >
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

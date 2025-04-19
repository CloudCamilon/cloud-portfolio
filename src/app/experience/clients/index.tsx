import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

const Company = ({
  source,
  link,
}: {
  source: string;
  link: string;
}): JSX.Element => {
  return (
    <Link href={link}>
      <div className="flex flex-col cursor-pointer items-center">
        <div className={`relative w-full md:w-[150px] h-32 md:h-[100px]`}>
          <Image fill src={source} alt="Earnest" />
        </div>
      </div>
    </Link>
  );
};

export default function Companies(): JSX.Element {
  return (
    <div className="sm:px-0 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
      <Company source={"/finastra.svg"} link={"https://www.finastra.com"} />
      <Company source={"/novare.svg"} link={"https://www.novare.com.ph"} />
      <Company
        source={"/metrobank.svg"}
        link={"https://www.metrobank.com.ph"}
      />
      <Company source={"/bb.svg"} link={"https://www.botbros.ai"} />
      <Company source={"/bplus.svg"} link={"https://www.b-plus.studio"} />
    </div>
  );
}

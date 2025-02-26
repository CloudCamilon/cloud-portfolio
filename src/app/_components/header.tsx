import { JSX } from "react";
import ResumeDownload from "./resume-download";
import Link from "next/link";

type HeaderItem = "HOME" | "ABOUT" | "EXPERIENCE" | "PROJECTS" | "MISC";

const HeaderItems = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/" },
  { title: "EXPERIENCE", link: "/" },
  { title: "PROJECTS", link: "/" },
  { title: "MISC", link: "/" },
];

const HeaderItem = ({
  title,
  selected,
  link,
}: {
  title: string;
  selected?: boolean;
  link: string;
}): JSX.Element => {
  return (
    <Link href={link}>
      <div
        className={`
          px-4 
          text-xs sm:text-lg
          ${selected ? "font-bold underline" : "font-normal"} cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  );
};

export default function Header({ selected }: { selected: HeaderItem }) {
  return (
    <div
      className="flex  flex-row bg-white text-black px-4 sm:px-10 py-5 w-full sticky top-0 z-50"
      id="header"
    >
      {/* Logo */}
      <div className="hidden sm:block text-center  mb-4 sm:mb-0">
        CLOUD CAMILON
      </div>

      {/* Navigation Items */}
      <div className="flex flex-wrap md:justify-center justify-center gap-4 flex-1">
        {HeaderItems.map((item, index) => (
          <HeaderItem
            key={index}
            title={item.title}
            selected={item.title === selected}
            link={item.link}
          />
        ))}
      </div>

      {/* Resume Download Button */}
      <div className="hidden sm:flex mt-4 sm:mt-0">
        <ResumeDownload />
      </div>
    </div>
  );
}

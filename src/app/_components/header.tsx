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
        px-10
        text-base
        ${
          selected ? "font-boldhover:underline" : "font-normal"
        } cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  );
};

export default function Header({ selected }: { selected: HeaderItem }) {
  return (
    <div
      className="flex  bg-white text-black  px-10 py-5 w-full sticky top-0 z-50"
      id="header"
    >
      <div className="">CLOUD CAMILON</div>
      <div className="flex flex-1 flex-row justify-center text-center">
        {HeaderItems.map((item, index) => (
          <HeaderItem
            key={index}
            title={item.title}
            selected={item.title === selected}
            link={item.link}
          />
        ))}
      </div>
      <ResumeDownload />
    </div>
  );
}

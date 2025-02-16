import { JSX } from "react";
import ResumeDownload from "./resume-download";
import Link from "next/link";

type HeaderItem = "HOME" | "ABOUT" | "PROJECTS" | "SERVICES";

const HeaderItems = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  { title: "PROJECTS", link: "/projects" },
  { title: "SERVICES", link: "/services" },
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
        text-lg
        ${
          selected ? "font-bold text-black hover:underline" : "font-normal"
        } cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  );
};

export default function Header({ selected }: { selected: HeaderItem }) {
  return (
    <div className="flex  px-10 w-full h-12 " id="header">
      <div>CLOUD CAMILON</div>
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

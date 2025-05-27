import { JSX } from "react";
import ResumeDownload from "./resume-download";

type HeaderItem = "HOME" | "ABOUT" | "EXPERIENCE" | "PROJECTS" | "MISC";

type HeaderType = {
  title: string;
  selected?: boolean;
  link: string;
};

const HeaderItems: HeaderType[] = [
  { title: "HOME", link: "cloud-home" },
  { title: "ABOUT", link: "cloud-about" },
  { title: "EXPERIENCE", link: "cloud-experience" },
  { title: "PROJECTS", link: "cloud-projects" },
  { title: "MISC", link: "cloud-misc" },
];

const HeaderItem = ({ title, selected, link }: HeaderType): JSX.Element => {
  const scrollToSection = function (sectionId: string) {
    const element = document.getElementById(sectionId);
    const headerOffset = 100;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition! + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => scrollToSection(link)}
      className={`
          px-4 
          text-xs lg:text-base
          ${selected ? "font-bold underline" : "font-normal"} cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default function Header() {
  return (
    <div className="flex bg-white justify-between sticky z-50 top-0 w-page h-[100px] pl-6 pr-20 md:pr-6 items-center">
      <div className="text-center text-lg md:text-xs lg:text-lg">
        CLOUD CAMILON
      </div>
      <div className="hidden sm:flex flex-wrap flex-row gap-6">
        {HeaderItems.map((item, index) => (
          <HeaderItem
            key={index}
            title={item.title}
            selected={item.selected}
            link={item.link}
          />
        ))}
      </div>
      <div className="hidden sm:flex text-xs sm:text-xs lg:text-base">
        <ResumeDownload />
      </div>
    </div>
  );
}

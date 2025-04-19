import { JSX } from "react";

export function Button({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}): JSX.Element {
  return (
    <div
      className="cursor-pointer p-3 text-lg border font-bold border-black"
      onClick={handleClick}
    >
      {title}
    </div>
  );
}

export function Pill({
  title,
  handleClick,
  index,
}: {
  title: string;
  handleClick: () => void;
  index?: number;
}): JSX.Element {
  return (
    <div
      key={index}
      className="flex justify-center items-center h-7 cursor-pointer text-center text-xs border rounded-3xl px-3  border-black"
      onClick={handleClick}
    >
      {title}
    </div>
  );
}

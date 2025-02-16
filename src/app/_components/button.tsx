import { JSX } from "react";

export default function Button({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}): JSX.Element {
  return (
    <div
      className="cursor-pointer p-3 text-xl border font-bold border-black"
      onClick={handleClick}
    >
      {title}
    </div>
  );
}

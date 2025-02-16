import React from "react";

const scrollContent = [
  { text: "C", solid: true },
  { text: "L", solid: true },
  { text: "O", solid: true },
  { text: "U", solid: true },
  { text: "D", solid: true },
  { text: "C", solid: false },
  { text: "A", solid: false },
  { text: "M", solid: false },
  { text: "I", solid: false },
  { text: "L", solid: false },
  { text: "O", solid: false },
  { text: "N", solid: false },
];

export const HorizontalScroll = ({
  leftDirection,
}: {
  leftDirection: boolean;
}) => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Scrolling Container */}
      <div
        className={`${
          leftDirection ? "animate-scroll" : "animate-scroll-right"
        } animate-scroll flex whitespace-nowrap`}
      >
        {[...scrollContent, ...scrollContent].map((item, index) => (
          <div
            key={index}
            className={`
              ${
                item.solid
                  ? ""
                  : `drop-shadow-[0_1.0px_1.0px_rgba(0.9,0.9,0.9,0.9)]`
              } flex text-[200px] font-bold ${
              item.solid ? `text-black` : `text-white`
            } mx-4`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

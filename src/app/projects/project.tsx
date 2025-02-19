import { JSX } from "react";

export default function Project(): JSX.Element {
  return (
    <div className="flex p-10  w-full h-full">
      <div className="flex flex-col w-1/2 gap-5 pt-5">
        <div className="text-3xl"> Earnest Financial Literacy App</div>
        <div className="text-lg">
          Mobile app that aims to make investing easy. Financial education app
          that has banking integration for investment. Implemented using React
          Native. Mobile app that aims to make investing easy. Financial
          education app that has banking integration for investment. Implemented
          using React Native.
        </div>
      </div>
      <div className="flex w-1/2 bg-neutral-100 h-full"> </div>
    </div>
  );
}

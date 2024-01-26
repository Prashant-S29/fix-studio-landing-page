"use client";

import { webData } from "@/constants";
import React, { useState } from "react";

const BACK = () => {
  return (
    <>
      <div className="-mt-2 w-full ">
        {webData.map((data, index) => (
          <INNERPART key={index} data={data} index={index} />
        ))}
      </div>
    </>
  );
};

const INNERPART = ({ index, data }: { index: number; data: string[] }) => {
  const [lineWidht, setLineWidht] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showPage, setShowPage] = useState(false);
  setTimeout(() => {
    setLineWidht(true);
  }, 1000 + index * 100);
  setTimeout(() => {
    setShowText(true);
  }, 2000 + index * 100);
  setTimeout(() => {
    setShowBackground(true);
  }, 3000);
  return (
    <>
      <div
        key={index}
        className={`flex text-[15px]   justify-center relative text-white mix-blend-difference  items-end w-full`}
      >
        <div className="w-[40%] h-[23px] pt-1 overflow-hidden whitespace-nowrap  px-5">
          <div
            className={`${
              showText
                ? "translate-y-0 opacity-100"
                : "translate-y-[5px] opacity-0"
            } duration-500 leading-none`}
          >
            <span>{data[0]}</span>
          </div>
        </div>
        <div className="w-[20%] h-[23px] pt-1 overflow-hidden whitespace-nowrap  px-5">
          <div
            className={`${
              showText
                ? "translate-y-0 opacity-100"
                : "translate-y-[5px] opacity-0"
            } duration-500 leading-none`}
          >
            <span>{data[1]}</span>
          </div>
        </div>
        <div className="w-[20%] h-[23px] pt-1 overflow-hidden whitespace-nowrap  px-5">
          <div
            className={`${
              showText
                ? "translate-y-0 opacity-100"
                : "translate-y-[5px] opacity-0"
            } duration-500 leading-none`}
          >
            <span>{data[2]}</span>
          </div>
        </div>
        <div className="w-[20%] h-[23px] pt-1 overflow-hidden whitespace-nowrap  px-5">
          <div
            className={`${
              showText
                ? "translate-y-0 opacity-100"
                : "translate-y-[5px] opacity-0"
            } duration-500 leading-none`}
          >
            <span>{data[3]}</span>
          </div>
        </div>
        <div className="w-[20%] h-[23px] pt-1 overflow-hidden whitespace-nowrap  px-5">
          <div
            className={`${
              showText
                ? "translate-y-0 opacity-100"
                : "translate-y-[5px] opacity-0"
            } duration-500 leading-none`}
          >
            <span>{data[4]}</span>
          </div>
        </div>
        <div
          className={`${
            lineWidht ? "w-full " : "w-0 "
          } h-[0.5px] bg-white mix-blend-difference absolute duration-[2000ms] transition-[width] ease-[cubic-bezier(.8,0,.2,1)]`}
        />
      </div>

      <div
        className={`w-full  ${
          showBackground ? "h-0" : "h-[100vh] bg-black"
        } absolute ease-[cubic-bezier(0.990,0.000,0.790,0.585)]  duration-500 top-0 left-0 -z-10`}
      />
      <div
        className={`w-full min-h-screen absolute bg-white duration-300 bottom-0 left-0 -z-20`}
      />
    </>
  );
};

export default BACK;

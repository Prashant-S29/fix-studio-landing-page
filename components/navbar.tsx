"use client";

import React, { useState } from "react";

const NAVBAR = () => {
  const navLinks = [
    ["Fix Studio", "Index(17)"],
    ["(Contact)"],
    ["(Services)"],
    ["(Selected Clients)"],
    ["(Members)"],
    ["(Members)"],
  ];
  const [showText, setShowText] = useState(false);

  setTimeout(() => {
    setShowText(true);
  }, 2100);

  return (
    <>
      <nav className=" text-white z-20 mix-blend-difference">
        <div className="flex  w-full px-6 py-5 z-20 pb-0 relative items-center">
          <div className="w-[40%] h-[20px] overflow-hidden flex whitespace-nowrap  ">
            <div>
              <div
                className={`${
                  showText
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[5px] opacity-0"
                } duration-500`}
              >
                <span>{navLinks[0][0]}</span>
              </div>
            </div>
            <div className="w-full text-center">
              <div
                className={`${
                  showText
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[5px] opacity-0"
                } duration-500`}
              >
                <span>{navLinks[0][1]}</span>
              </div>
            </div>
          </div>
          <div className="w-[20%] h-[20px] overflow-hidden px-5">
            <div
              className={`${
                showText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[5px] opacity-0"
              } duration-500`}
            >
              <span>{navLinks[1][0]}</span>
            </div>
          </div>
          <div className="w-[20%] h-[20px] overflow-hidden px-5">
            <div
              className={`${
                showText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[5px] opacity-0"
              } duration-500`}
            >
              <span>{navLinks[2][0]}</span>
            </div>
          </div>
          <div className="w-[20%] h-[20px] overflow-hidden px-5">
            <div
              className={`${
                showText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[5px] opacity-0"
              } duration-500`}
            >
              <span>{navLinks[3][0]}</span>
            </div>
          </div>
          <div className="w-[20%] h-[20px] overflow-hidden px-5">
            <div
              className={`${
                showText
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[5px] opacity-0"
              } duration-500`}
            >
              <span>{navLinks[4][0]}</span>
            </div>
          </div>
          <div className="w-[10px] mt-[4px] aspect-square   absolute bg-white  z-20  right-0 mr-6" />
        </div>
      </nav>
    </>
  );
};

export default NAVBAR;

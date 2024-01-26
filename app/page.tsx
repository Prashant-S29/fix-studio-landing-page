"use client";

import BACK from "@/clientComponents/background";
import MARQUEE_SECTION from "@/clientComponents/marquee";
import MOBILE_VERSION from "@/components/mobileVersion";
import Image from "next/image";
import React, { useEffect } from "react";

const HOME = () => {
  useEffect(() => {
    (async () => {
      //@ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <div>
          <BACK />
          <MARQUEE_SECTION />
        </div>
        <div className="w-full h-[80vh] " />
      </div>
      <div className="block md:hidden">
        <MOBILE_VERSION />
      </div>
    </>
  );
};

export default HOME;

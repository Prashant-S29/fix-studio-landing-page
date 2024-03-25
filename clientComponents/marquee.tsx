"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";

import Marquee from "react-fast-marquee";
import IMAGE_GALLERY from "./imageGallery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/constants";

const MARQUEE_SECTION = () => {
  const imageMarquee = useRef(null);
  const [showImageMarquee, setShowImageMarquee] = useState(false);
  setTimeout(() => {
    setShowImageMarquee(true);
  }, 3200);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: document.body.clientHeight,
        // markers: true,
      },
    });
    timeline.fromTo(imageMarquee.current, { scale: "1" }, { scale: "2.2" });
  }, []);

  return (
    <>
      <div
        className={`mt-5  h-[350px] overflow-hidden flex items-center ${
          showImageMarquee ? "opacity-100" : "opacity-0"
        } duration-300`}
      >
        <div ref={imageMarquee} className="w-[150vw]">
          <Marquee autoFill speed={100} className="w-[150vw]">
            <div className="flex px-2">
              <div>
                <Image
                  src="https://res.cloudinary.com/dzfsxpblt/image/upload/v1711358559/code-components/etksaftt0ws6bwqsfbgj.png"
                  alt="fixImage"
                  unoptimized
                  width={500}
                  height={200}
                />
              </div>
              <div>
                <IMAGE_GALLERY images={images} />
              </div>
              <div>
                <Image
                  src="https://res.cloudinary.com/dzfsxpblt/image/upload/v1711358558/code-components/rfilbudp6eol4jlvjege.png"
                  alt="fixImage"
                  unoptimized
                  width={800}
                  height={200}
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default MARQUEE_SECTION;

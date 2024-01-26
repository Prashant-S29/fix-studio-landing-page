"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const IMAGE_GALLERY = ({ images }: { images: string[] }) => {
  const [activeImage, setActiveImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
        setActiveImage((activeImage) => (activeImage + 1) % images.length);
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      <div className="flex justify-center items-center relative h-[200px] w-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeImage ? "opacity-100" : "opacity-0"
            } absolute`}
          >
            <Image src={image} alt="imageOne" width={180} height={180} />
          </div>
        ))}
      </div>
    </>
  );
};
export default IMAGE_GALLERY;

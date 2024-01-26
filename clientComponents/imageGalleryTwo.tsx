"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const IMAGE_GALLERY_TWO = ({ images }: { images: string[] }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showImageAnimation, setImageAnimation] = useState(false);

  setTimeout(() => {
    setImageAnimation(true);
  }, 1000 + images.length * 200);

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
      <div className=" h-[180px]  w-full flex justify-center">
        <div className={`relative w-full justify-center h-[180px]  items-center ${showImageAnimation?"flex":"hidden"}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === activeImage ? "opacity-100" : "opacity-0"
              } absolute`}
            >
              <Image
                src={image}
                alt="imageOne"
                width={180}
                height={180}
                className="w-[180px]"
              />
            </div>
          ))}
        </div>
        <div className={`w-full  justify-center h-[180px] items-center relative ${showImageAnimation?"hidden":"flex"}`}>
          {images.map((image, index) => (
            <IMAGES_ANIAMTION image={image} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const IMAGES_ANIAMTION = ({
  image,
  index,
}: {
  image: string;
  index: number;
}) => {
  const [showImage, setShowImage] = useState(false);
  setTimeout(() => {
    setShowImage(true);
  }, 500 + index * 200);

  return (
    <>
      <div className="absolute w-[180px] h-[180px]">
        <Image
          src={image}
          alt="image"
          width={180}
          height={180}
          className={`${
            showImage ? "scale-100" : "scale-0"
          } duration-200 ease-in-out w-[180px]`}
        />
      </div>
    </>
  );
};

export default IMAGE_GALLERY_TWO;

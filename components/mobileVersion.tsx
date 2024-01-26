import React from "react";

import IMAGE_GALLERY_TWO from "@/clientComponents/imageGalleryTwo";
import { images } from "@/constants";
import Image from "next/image";

const MOBILE_VERSION = () => {
  return (
    <>
      <div className="w-full min-h-screen flex p-5 justify-center items-center">
        <div className="w-full">
          <div className=" flex justify-center ">
            <Image
              src="https://res.cloudinary.com/denl2iizs/image/upload/v1706263980/m0cfzyyx9iktcpjbeawq.png"
              width={500}
              height={500}
              alt="image"
              className="w-[300px] sm:w-[500px]"
            />
          </div>
          <div className="flex w-full  justify-center  mt-8">
            <IMAGE_GALLERY_TWO images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MOBILE_VERSION;

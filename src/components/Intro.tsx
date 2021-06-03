import React, { useState } from "react";
import UploadIcon from "../assets/icons/UploadIcon";
import { getImage } from "../utils/getImage";

const Intro = () => {
  const [gotImage, setGotImage] = useState(false);
  const tryGetImage = async () => {
    getImage({ callBackFunc: setGotImage });
  };

  return (
    <>
      {!gotImage && (
        <div className="absolute w-full h-full z-50 bg-base-200 ">
          <label
            htmlFor="upload-photo"
            className="cursor-pointer  w-full h-full flex justify-center items-center "
          >
            <span className="btn btn-primary rounded-full w-52">
              <span className="mr-2">
                <UploadIcon />
              </span>
              Open Image
            </span>
          </label>
          <input
            type="file"
            accept="image/*"
            id="upload-photo"
            onChange={tryGetImage}
            className="hidden opacity-0 z-0 absolute"
          />
        </div>
      )}
    </>
  );
};

export default Intro;

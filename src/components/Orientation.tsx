import React, { useState } from "react";
import { flip, rotate } from "../orientation/orientation";

const Orientation = () => {
  const [degree, setDegree] = useState(0);
  const [flipAxis, setFlipAxis] = useState("");

  const makeFlip = (axis) => {
    if (flipAxis === "x" && axis === "x") {
      setFlipAxis("x-1");
      return flip("x-1");
    }
    if (flipAxis === "y" && axis === "y") {
      setFlipAxis("y-1");
      return flip("y-1");
    }
    setFlipAxis(axis);
    return flip(axis);
  };
  const makeRotateForward = () => {
    if (degree + 90 === 360) {
      setDegree(0);
      return rotate(0);
    }
    setDegree((d) => d + 90);
    return rotate(degree + 90);
  };
  const makeRotateBack = () => {
    if (degree - 90 < -90) {
      setDegree(180);
      return rotate(180);
    }
    setDegree((d) => d - 90);
    return rotate(degree - 90);
  };
  return (
    <div className="flex lg:flex-wrap lg:justify-center	content-center lg:pb-0 pb-4">
      <div>
        <button
          className="btn w-56	lg:mb-2 lg:mr-0 mr-2"
          onClick={() => makeFlip("y")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z" />
          </svg>

          <span className="ml-2"> Flip Vertically </span>
        </button>
      </div>
      <div>
        <button
          className="btn w-56	lg:mb-2 lg:mr-0 mr-2"
          onClick={() => makeFlip("x")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z" />
          </svg>
          <span className="ml-2"> Flip Horizontally </span>
        </button>
      </div>

      <div>
        <button
          className="btn w-56	lg:mb-2 lg:mr-0 mr-2"
          onClick={makeRotateBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z" />
          </svg>
          <span className="ml-2"> Rotate Left </span>
        </button>
      </div>
      <div>
        <button
          className="btn w-56	lg:mb-2 lg:mr-0 mr-2"
          onClick={makeRotateForward}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z" />
          </svg>
          <span className="ml-2"> Rotate Right </span>
        </button>
      </div>
    </div>
  );
};

export default Orientation;

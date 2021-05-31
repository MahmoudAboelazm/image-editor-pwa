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
    <div>
      Orientation
      <div>
        <button onClick={() => makeFlip("y")}>flibY</button>
      </div>
      <div>
        <button onClick={() => makeFlip("x")}>flibX</button>
      </div>
      <div>
        <button onClick={makeRotateForward}>Rotate Forward</button>
      </div>
      <div>
        <button onClick={makeRotateBack}>Rotate Back</button>
      </div>
    </div>
  );
};

export default Orientation;

import React, { useState } from "react";
import { flip, rotate } from "../orientation/orientation";

const Orientation = () => {
  const [degree, setDegree] = useState(0);
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
        <button onClick={() => flip("y")}>flibY</button>
      </div>
      <div>
        <button onClick={() => flip("x")}>flibX</button>
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

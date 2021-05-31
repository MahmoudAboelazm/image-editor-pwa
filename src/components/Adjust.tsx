import React, { useState } from "react";
import { adjustEditor, adjustEditorProps } from "../adjust/applyAdjust";

const adjustNames = [
  "contrast",
  "sepia",
  "brightness",
  "hueRotate",
  "grayscale",
  "saturate",
];

const Adjust = () => {
  const [adjustValues, setAjustValues] = useState<adjustEditorProps>({
    contrast: 1,
    sepia: 0,
    brightness: 1,
    hueRotate: 0,
    grayscale: 0,
    saturate: 1,
  });
  const makeAdjust = (name, value) => {
    const newValues = adjustValues;
    if (name == "hueRotate") {
      newValues[name] = value / 2;
    } else {
      newValues[name] = value / 50;
    }
    adjustEditor(newValues);

    return setAjustValues(newValues);
  };
  return (
    <div>
      {adjustNames.map((a) => (
        <div key={a}>
          <p>{a.toUpperCase()}</p>
          <input
            type="range"
            id={a}
            name={a}
            min={0}
            max={100}
            className="appearance-none h-1 bg-base-200 cursor-pointer"
            onChange={(e) => makeAdjust(e.target.name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Adjust;

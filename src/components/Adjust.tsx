import React, { useEffect, useState } from "react";
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
    contrast: 50,
    sepia: 0,
    brightness: 50,
    hueRotate: 0,
    grayscale: 0,
    saturate: 50,
  });
  const makeAdjust = (name, value) => {
    adjustEditor({ ...adjustValues, [name]: value });
    return setAjustValues({ ...adjustValues, [name]: value });
  };
  useEffect(() => {
    let inputs = document.getElementsByClassName("range");
    for (const input of inputs as any) {
      let value = Math.abs(
        ((input.value - input.max) / (input.min - input.max)) * 100,
      );
      input.style.background = `linear-gradient(to left, #0000 0%, #0000 ${value}%,  #0000 ${value}%, black ${value}%)`;
    }
  }, [adjustValues]);
  return (
    <div>
      {adjustNames.map((a) => (
        <div className="mt-5" key={a}>
          <div className="flex justify-between	content-center -mb-1.5">
            <span className="stat-title">
              {a.slice(0, 1).toUpperCase() + a.slice(1)}
            </span>
            <span className="stat-desc">{adjustValues[a]}</span>
          </div>
          <input
            type="range"
            id={a}
            name={a}
            min={0}
            max={100}
            value={adjustValues[a]}
            className={`${a} range h-0.5 bg-base-200 cursor-pointer appearance-none w-full  `}
            onChange={(e) => makeAdjust(e.target.name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Adjust;

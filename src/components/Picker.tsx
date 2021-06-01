import React, { useState } from "react";
import { getTiles, getTilesAverageRGB } from "../colors-picker/colorsPicker";

const Picker = () => {
  const [averageRGB, setAverageRGB] =
    useState<ReturnType<typeof getTilesAverageRGB>>();
  const getRGB = () => {
    const c = getTilesAverageRGB();
    return setAverageRGB(c);
  };
  return (
    <div>
      <button onClick={getRGB}> getAverageRGB</button>
      <div>
        {averageRGB && (
          <>
            <div
              style={{
                background: `rgb(${averageRGB.donminantColor.r} ${averageRGB.donminantColor.g} ${averageRGB.donminantColor.b})`,
                height: "50px",
                marginBottom: "5px",
              }}
            ></div>
            {averageRGB.tilesRGB.map((t, i) => (
              <div
                key={i}
                style={{
                  width: "25px",
                  height: "25px",
                  background: `rgb(${t.r} ${t.g} ${t.b})`,
                  display: "inline-block",
                }}
              ></div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Picker;

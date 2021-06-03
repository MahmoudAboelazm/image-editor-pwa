import React, { useEffect, useState } from "react";
import { getRGB } from "../colors-picker/colorsPicker";
import { showLoading } from "../utils/showLoading";

let dataRGB;
const Picker = () => {
  const [selectedRGB, setSelectedRGB] = useState() as any;
  const [averageRGB, setAverageRGB] = useState() as any;
  const getColors = () => {
    if (!dataRGB) {
      showLoading();
      setTimeout(async () => {
        dataRGB = await getRGB();
        return getColors();
      });
    } else {
      showLoading();
      setAverageRGB(dataRGB);
      return (dataRGB = null);
    }
  };

  return (
    <div>
      {!averageRGB && (
        <span
          onClick={getColors}
          className="color-picker w-full block flex content-center justify-center bg-base-200	py-5 card-title	rounded-md cursor-pointer  mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z" />
                    <circle cx="6.5" cy="11.5" r="1.5" />
                    <circle cx="9.5" cy="7.5" r="1.5" />
                    <circle cx="14.5" cy="7.5" r="1.5" />
                    <circle cx="17.5" cy="11.5" r="1.5" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span className="ml-2">Colors Picker </span>
        </span>
      )}
      <div>
        {averageRGB && (
          <>
            <p className="card-title ">Dominant Color</p>
            <div
              className="rounded-full h-14 mb-4 flex justify-center items-center "
              style={{
                background: `rgb(${averageRGB.donminantColor.r} ${averageRGB.donminantColor.g} ${averageRGB.donminantColor.b})`,
                color:
                  0.2126 * averageRGB.donminantColor.r +
                    0.7152 * averageRGB.donminantColor.g +
                    0.0722 * averageRGB.donminantColor.b >
                  150
                    ? "black"
                    : "white",
              }}
            >
              <span className="card-title m-0">
                {"RGB(" +
                  averageRGB.donminantColor.r +
                  ", " +
                  averageRGB.donminantColor.g +
                  ", " +
                  averageRGB.donminantColor.b +
                  ")"}
              </span>
            </div>
            <p className="card-title mt-6">Palette</p>

            {selectedRGB && (
              <div
                className="rounded-full h-9	 flex justify-center items-center mb-2"
                style={{
                  background: `rgb(${selectedRGB.r} ${selectedRGB.g} ${selectedRGB.b})`,
                  color:
                    0.2126 * selectedRGB.r +
                      0.7152 * selectedRGB.g +
                      0.0722 * selectedRGB.b >
                    150
                      ? "black"
                      : "white",
                }}
              >
                <span className="font-semibold">
                  {"RGB(" +
                    selectedRGB.r +
                    ", " +
                    selectedRGB.g +
                    ", " +
                    selectedRGB.b +
                    ")"}
                </span>
              </div>
            )}
            <div className="flex flex-wrap content-center justify-center">
              {averageRGB.tilesRGB.map((t, i) => (
                <div
                  onClick={() => setSelectedRGB(t)}
                  className="rounded-full m-1 cursor-pointer"
                  key={i}
                  style={{
                    width: "25px",
                    height: "25px",
                    background: `rgb(${t.r} ${t.g} ${t.b})`,
                    display: "inline-block",
                  }}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Picker;

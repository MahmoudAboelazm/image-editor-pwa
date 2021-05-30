import React, { useEffect } from "react";
import { mainFiltersIntializing } from "../filters/filters/filters";
const Edit = () => {
  // const filterTest = () => {
  //   sendCanvasDataToRenderer();
  //   //console.log(Mou.version);
  //   // (Mou.prototype as any).fillColor(105, 200, 205);
  //   (Mou.prototype as any).channels({
  //     blue: 8,
  //     red: 3,
  //   });
  //   (Mou.prototype as any).gamma(1.6);
  //   // (Mou.prototype as any).sepia(20);
  //   // (Mou.prototype as any).contrast(15);
  //   (Mou.prototype as any).vibrance(75);
  //   (Mou.prototype as any).saturation(-35);
  //   // (Mou.prototype as any).brightness(5);
  //   //(Mou.prototype as any).exposure(8);
  //   (Mou.prototype as any).clip(8);
  //   // (Mou.prototype as any).curves(
  //   //   "rgb",
  //   //   [0, 0],
  //   //   [120, 100],
  //   //   [128, 140],
  //   //   [255, 255],
  //   // );

  //   //(Mou.prototype as any).colorize("#c42007", 30);
  //   return Mou.renderer.processNext();
  // };
  useEffect(() => {
    mainFiltersIntializing();
  }, []);
  return (
    <>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />

      <section className="drawer-content flex justify-center items-center	overflow-hidden	">
        <label
          htmlFor="my-drawer-2"
          className="mb-4 btn btn-primary drawer-button lg:hidden"
        >
          open menu
        </label>
        <div className="text-center p-2 h-full flex items-center">
          <div>
            <canvas className="hiddenn" id="canvas" height="1" width="1" />
          </div>
          <img
            className="m-auto max-h-full"
            id="edit-image"
            // src={require("./h.jpg")}
          />
        </div>
      </section>
    </>
  );
};

export default Edit;

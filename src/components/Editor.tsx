import React, { useEffect } from "react";
import { mainFiltersIntializing } from "../filters/filters/filters";
const Editor = () => {
  useEffect(() => {
    mainFiltersIntializing();
  }, []);
  return (
    <>
      <section className="flex justify-center items-center	overflow-hidden	w-full h-full lg:pb-0 pb-12	">
        <div className="text-center p-2 h-full flex items-center">
          <div>
            <canvas className="hidden" id="canvas" height="1" width="1" />
          </div>
          <img
            className="xl:max-w-5xl m-auto max-w-full max-h-full"
            id="edit-image"
            // src={require("./h.jpg")}
          />
        </div>
      </section>
    </>
  );
};

export default Editor;

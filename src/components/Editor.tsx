import React, { useEffect } from "react";
import { mainFiltersIntializing } from "../filters/filters/filters";
const Editor = () => {
  useEffect(() => {
    mainFiltersIntializing();
  }, []);
  return (
    <>
      <section className="flex justify-center items-center	overflow-hidden	w-full h-full">
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

export default Editor;

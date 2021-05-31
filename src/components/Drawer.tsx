import { useTheme } from "next-themes";
import React, { useState } from "react";
import { applyAdjust, cancelAdjust } from "../adjust/applyAdjust";
import { getImage } from "../utils/getImage";
import Adjust from "./Adjust";
import Effects from "./Effects";
import Filters from "./Filters";
import Orientation from "./Orientation";
import Picker from "./Picker";
const themes = [
  "synthwave",
  "dracula",
  "halloween",
  "luxury",
  "dark",
  "forest",
];
const list = ["ADJUST", "FILTERS", "EFFECTS", "ORIENTATION", "PICKER"];
const currentEditor = (name) => {
  switch (name) {
    case "ADJUST":
      return <Adjust />;
    case "FILTERS":
      return <Filters />;
    case "EFFECTS":
      return <Effects />;
    case "ORIENTATION":
      return <Orientation />;
    case "PICKER":
      return <Picker />;
    default:
      return "Unknown";
  }
};
const Drawer = () => {
  const { theme, setTheme } = useTheme();
  const [editorName, setEditorName] = useState("");
  const cancel = () => {
    if (editorName === "ADJUST") {
      cancelAdjust();
    }
    return setEditorName("");
  };
  const apply = () => {
    if (editorName === "ADJUST") {
      applyAdjust();
    }
    return setEditorName("");
  };
  return (
    <aside className="lg:h-full  lg:relative lg:w-auto w-full  absolute bottom-0">
      {/* {editorName && <div className="layer absolute w-full h-full z-10"></div>} */}

      <div className="bg-base-100 h-full relative ">
        <ul className="menu overflow-auto text-base-content lg:flex-col	 flex-row flex ">
          {list.map((l) => (
            <li key={l} className="lg:mb-1">
              <a onClick={() => setEditorName(l)}>{l}</a>
            </li>
          ))}
          <li>
            <input type="file" id="file" onChange={getImage} />
          </li>
        </ul>
        {editorName && (
          <div className="mb-0.5 shadow-xl lg:ml-0.5 absolute bg-base-100 lg:left-full lg:top-0 lg:bottom-auto bottom-full lg:w-48 w-full text-center">
            <button onClick={apply}>Apply</button>{" "}
            <button onClick={cancel}>Cancel</button>
            {currentEditor(editorName)}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Drawer;

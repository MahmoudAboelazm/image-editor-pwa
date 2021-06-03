import { useTheme } from "next-themes";
import React, { useState } from "react";
import { applyAdjust, cancelAdjust } from "../adjust/applyAdjust";
import AdjustIcon from "../assets/icons/AdjustIcon";
import ExportIcon from "../assets/icons/ExportIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import OrientationIcon from "../assets/icons/OrientationIcon";
import PickerIcon from "../assets/icons/PickerIcon";
import ThemeIcon from "../assets/icons/ThemeIcon";
import UploadIcon from "../assets/icons/UploadIcon";
import {
  applyOrientation,
  cancelOrientation,
} from "../orientation/orientation";
import { downloadImage } from "../utils/downloadImage";
import { getImage } from "../utils/getImage";
import Adjust from "./Adjust";
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
const list = [
  { name: "ADJUST", icon: <AdjustIcon /> },
  { name: "FILTERS", icon: <FilterIcon /> },
  { name: "ORIENTATION", icon: <OrientationIcon /> },
  { name: "PICKER", icon: <PickerIcon /> },
];
const currentEditor = (name) => {
  switch (name) {
    case "ADJUST":
      return <Adjust />;
    case "FILTERS":
      return <Filters />;

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
    if (editorName === "FILTERS") {
      window.Caman.renderer.cancelFilter();
    }
    if (editorName === "ORIENTATION") {
      cancelOrientation();
    }
    return setEditorName("");
  };
  const apply = () => {
    if (editorName === "ADJUST") {
      applyAdjust();
    }
    if (editorName === "FILTERS") {
      window.Caman.renderer.applyFilter();
    }
    if (editorName === "ORIENTATION") {
      applyOrientation();
    }
    return setEditorName("");
  };
  const changeTheme = () => {
    const index = themes.indexOf(theme);

    return setTheme(themes[index + 1] || themes[0]);
  };
  return (
    <aside className="lg:h-full  lg:relative lg:w-auto w-full  absolute bottom-0">
      {editorName && (
        <div className="layer absolute w-full h-full z-10 bg-base-300 opacity-60"></div>
      )}

      <div className="bg-base-100 h-full relative ">
        <ul className="menu overflow-auto text-base-content lg:flex-col	 flex-row flex ">
          {list.map((l) => (
            <li key={l.name} className="lg:mb-1">
              <a
                className={(l.name === editorName && "active") || ""}
                onClick={() => setEditorName(l.name)}
              >
                <span className="mr-2">{l.icon}</span>
                {l.name}
              </a>
            </li>
          ))}
          <li>
            <label htmlFor="upload-photo">
              <li>
                <a className="whitespace-nowrap	">
                  <span className="mr-2">
                    <UploadIcon />
                  </span>
                  New image...
                </a>
              </li>
            </label>
            <input
              type="file"
              accept="image/*"
              id="upload-photo"
              onChange={() => getImage({})}
              className="hidden opacity-0 z-0 absolute"
            />
          </li>
          <li onClick={() => downloadImage()}>
            <a>
              <span className="mr-2">
                <ExportIcon />
              </span>
              Export
            </a>
          </li>
          <li onClick={changeTheme}>
            <a>
              <span className="whitespace-nowrap">
                <ThemeIcon />
              </span>
              Theme
            </a>
          </li>
        </ul>
        {editorName && (
          <div className="lg:h-screen l mb-0.5 z-50	 shadow-xl lg:ml-0.5 absolute p-5	 bg-base-100 lg:left-full lg:top-0 lg:bottom-auto bottom-full  w-full lg:w-72">
            <div className="flex content justify-between	content-center mb-10">
              {editorName !== "PICKER" && (
                <button className="btn btn-primary px-6 py-0	" onClick={apply}>
                  Apply
                </button>
              )}
              <button className="btn px-6 py-0" onClick={cancel}>
                Cancel
              </button>
            </div>
            <div className="lg:max-h-full max-h-48 overflow-auto px-2 lg:p-0">
              {currentEditor(editorName)}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Drawer;

import { useTheme } from "next-themes";
import React from "react";
import { applyAdjust } from "../adjust/applyAdjust";
import { getImage } from "../utils/getImage";
const themes = [
  "synthwave",
  "dracula",
  "halloween",
  "luxury",
  "dark",
  "forest",
];
const Drawer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <aside className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li className="mb-1">
          <div className="collapse w-96 rounded-box border border-base-300 collapse-arrow w-full ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">Adjust</div>
            <div className="collapse-content">
              <input
                type="range"
                id="vol"
                name="vol"
                min="-100"
                max="100"
                onChange={(e) => applyAdjust(e.target.value)}
              />
            </div>
          </div>
        </li>
        <li className="mb-1">
          <div className="collapse w-96 rounded-box border border-base-300 collapse-arrow w-full ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">Effects</div>
            <div className="collapse-content">
              <p>Collapse content reveals with focus. If you add a checkbox.</p>
            </div>
          </div>
        </li>
        <li className="mb-1">
          <div className="collapse w-96 rounded-box border border-base-300 collapse-arrow w-full ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">Filters</div>
            <div className="collapse-content">
              <p>Collapse content reveals with focus. If you add a checkbox.</p>
            </div>
          </div>
        </li>
        <li className="mb-1">
          <div className="collapse w-96 rounded-box border border-base-300 collapse-arrow w-full ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">
              Orientaion
            </div>
            <div className="collapse-content">
              <p>Collapse content reveals with focus. If you add a checkbox.</p>
            </div>
          </div>
        </li>
        <li className="mb-1">
          <div className="collapse w-96 rounded-box border border-base-300 collapse-arrow w-full ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">Crop</div>
            <div className="collapse-content">
              <p>Collapse content reveals with focus. If you add a checkbox.</p>
            </div>
          </div>
        </li>
        <li className="mb-1">
          <div className="collapse w-96 rounded-box border border-base-300 collapse-arrow w-full ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">
              Image Colors
            </div>
            <div className="collapse-content">
              <p>Collapse content reveals with focus. If you add a checkbox.</p>
            </div>
          </div>
        </li>
        <li>
          <a>
            <input id="file" type="file" accept="image/*" onChange={getImage} />
          </a>
        </li>
        <li>
          <a>
            <div className="dropdown w-full">
              <button tabIndex={0} className="btn btn-primary w-full">
                Change theme
              </button>
              <ul className=" menu dropdown-content w-full p-0">
                {themes.map((t) => (
                  <li key={t} onClick={() => setTheme(t)}>
                    <button className="btn w-full rounded-none mt-1	">
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Drawer;

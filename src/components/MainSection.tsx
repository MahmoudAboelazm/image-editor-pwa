import React from "react";
import Drawer from "./Drawer";
import Edit from "./Edit";

const MainSection = () => {
  return (
    <main className="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52 min-h-screen	">
      <Edit />
      <Drawer />
    </main>
  );
};

export default MainSection;

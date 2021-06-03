import React from "react";
import Drawer from "./Drawer";
import Editor from "./Editor";
import Intro from "./Intro";

const MainSection = () => {
  return (
    <main className="bg-base-200 items-center	flex h-52 min-h-screen">
      <Intro />
      <Drawer />
      <Editor />
      <div className="show-loading cursor-wait absolute w-full h-full z-50 hidden"></div>
    </main>
  );
};

export default MainSection;

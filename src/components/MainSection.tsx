import React from "react";
import Drawer from "./Drawer";
import Editor from "./Editor";

const MainSection = () => {
  return (
    <main className="bg-base-200 items-center	flex h-52 min-h-screen	">
      <Drawer />
      <Editor />
    </main>
  );
};

export default MainSection;

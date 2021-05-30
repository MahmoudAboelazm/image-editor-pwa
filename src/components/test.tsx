import React, { memo } from "react";

const Test = memo(() => {
  console.log("rendered test");
  return <div>HEllo</div>;
});

export default Test;

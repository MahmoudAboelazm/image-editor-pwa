import React from "react";
const f = () => console.log("filter1");
const filters = [{ name: "Filter1", funcFilter: f }];
const Filters = () => {
  return (
    <div>
      {filters.map((filter) => (
        <div key={filter.name}>
          <p onClick={filter.funcFilter} className="cursor-pointer">
            {filter.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Filters;

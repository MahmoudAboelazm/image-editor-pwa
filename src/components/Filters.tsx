import React from "react";
import {
  filterOne,
  filterThree,
  filterTwo,
} from "../filters/filters/customeFilters";

const filters = [
  { name: "Filter1", funcFilter: filterOne },
  { name: "Filter2", funcFilter: filterTwo },
  { name: "Filter3", funcFilter: filterThree },
];
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

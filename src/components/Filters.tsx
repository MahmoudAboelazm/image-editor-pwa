import React from "react";
import {
  filterOne,
  filterThree,
  filterTwo,
} from "../filters/filters/customeFilters";

const filters = [
  {
    name: "Filter1",
    funcFilter: filterOne,
    image: require("../assets/images/f1.jpeg"),
  },
  {
    name: "Filter2",
    funcFilter: filterTwo,
    image: require("../assets/images/f2.jpeg"),
  },
  {
    name: "Filter3",
    funcFilter: filterThree,
    image: require("../assets/images/f3.jpeg"),
  },
];
const Filters = () => {
  return (
    <div className="flex lg:flex-wrap justify-between	content-center">
      {filters.map((filter) => (
        <img
          key={filter.name}
          onClick={filter.funcFilter}
          className="w-28 lg:mb-6 max-h-full cursor-pointer mr-6 lg:mr-0"
          alt={filter.name}
          src={filter.image}
        />
      ))}
    </div>
  );
};

export default Filters;

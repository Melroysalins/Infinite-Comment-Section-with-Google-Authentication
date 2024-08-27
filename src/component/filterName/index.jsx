import React from "react";
import "./index.css";

const FilterName = ({
  value,
  handleSelectedFilter,
  filtername,
  setFilterName,
}) => {
  return (
    <div className={filtername === value ? "selected" : "FilterNames"}>
      <p onClick={() => handleSelectedFilter(value)}>{value}</p>
    </div>
  );
};

export default FilterName;

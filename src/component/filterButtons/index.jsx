import React, { useState } from "react";
import "./index.css";
import FilterName from "../filterName";

const FilterButtons = () => {
  const [filtername, setFilterName] = useState("");
  const handleSelectedFilter = (value) => {
    setFilterName(value);
  };
  return (
    <div className="FilterButton">
      <FilterName
        value={"Latest"}
        filtername={filtername}
        setFilterName={setFilterName}
        handleSelectedFilter={handleSelectedFilter}
      />
      <FilterName
        value={"Popular"}
        filtername={filtername}
        setFilterName={setFilterName}
        handleSelectedFilter={handleSelectedFilter}
      />
    </div>
  );
};

export default FilterButtons;

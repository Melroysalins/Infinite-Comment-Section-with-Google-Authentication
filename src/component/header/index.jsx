import React from "react";
import "./index.css";
import CommentCount from "../commentCount";
import FilterButtons from "../filterButtons";

const Header = () => {
  return (
    <div className="headerContainner">
      <div className="header">
        <CommentCount />
        <FilterButtons />
      </div>
    </div>
  );
};

export default Header;

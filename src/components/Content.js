import React from "react";
import "../styles/content.css";
const Content = () => {
  return (
    <div className="content-body">
      <div className="content-header">
        <button type="button" className="btn">
          Add New Schedule
        </button>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Your Schedule"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Content;

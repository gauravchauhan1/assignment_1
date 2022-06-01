import React from "react";
import "../styles/main.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "../styles/main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Main;

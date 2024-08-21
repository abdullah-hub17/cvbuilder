import React from "react";
import "./Styling/Nav.css";

const Nav = () => {
  return (
    <div className="N-container">
      <h1>
        CV<span>Builder</span>
      </h1>
      <div className="N-items">
        <a href="#header">
          <li>Header</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#create-resume">
          <li>Create Resume</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import "../components/Styling/Header.css";
import resumeSvg from "../components/Assets/resume.svg";

const Header = () => {
  return (
    <div id="header" className="H-container">
      <div className="H-left">
        <p className="H-heading">
          A <span>Resume</span> that stands out!
        </p>
        <p className="H-heading">
          Make your own Resume. <span>It's Free</span>
        </p>
      </div>
      <div className="H-right">
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
};

export default Header;

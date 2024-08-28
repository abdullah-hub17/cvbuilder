import React from "react";
import "./Styling/Progress.css";
import progressSvg from "../components/Assets/progress.svg";

const Progress = () => {
  return (
    <div id="progress" className="P-container">
      <div className="P-left">
        <p className="P-heading">
          Haven't you donwload <span>Resume</span> yet!
        </p>
        <button className="P-button">Download Now</button>
        <p className="P-heading">
          Have you complete building <span>Resume?</span> No! <br /> Then '
          <button className="P-button">Go</button>' for it!
        </p>
      </div>
      <div className="P-right">
        <img src={progressSvg} alt="Process" />
      </div>
    </div>
  );
};

export default Progress;

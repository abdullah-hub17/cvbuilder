import React from "react";
import "./Styling/InputControl.css";

const InputControl = ({ label, ...props }) => {
  return (
    <div className="I-container">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
};

export default InputControl;
import React from "react";
import "./Styling/InputControl.css";

const InputControl = ({ label, type, onChange, ...props }) => {
  const handleInput = (event) => {
    if (type === "tel") {
      const newValue = event.target.value.replace(/[^0-9]/g, "");
      if (newValue !== event.target.value) {
        console.error("Can't add text to this field");
      }
      onChange({ target: { value: newValue } });
    } else {
      onChange(event);
    }
  };

  return (
    <div className="I-container">
      {label && <label>{label}</label>}
      <input
        type={type}
        onInput={handleInput}
        onChange={handleInput}
        {...props}
      />
    </div>
  );
};

export default InputControl;

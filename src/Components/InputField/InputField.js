import React from "react";
import "./StyleInputField.css";

const InputField = (props) => {
  return (
    <div className="input-field">
      <label htmlFor={props.inputName}>{props.labelText}</label>
      <input
        style={{
          width: "250px",
          borderRadius: "5px",
          border: "none",
          display: "block",
          padding: "5px",
        }}
        type="text"
        name={props.inputName}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;

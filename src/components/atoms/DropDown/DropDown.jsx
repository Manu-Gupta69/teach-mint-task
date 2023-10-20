import React, { useState } from "react";
import "./DropDown.scss";

function Dropdown({ options, optionSelectHandler, selectedOption }) {
  return (
    <div className="drop-down-parent">
      <h3>Country DropDown: </h3>
      <select value={selectedOption} onChange={optionSelectHandler}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;

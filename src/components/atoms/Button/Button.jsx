import React from "react";
import "./Button.scss";

const Button = ({ title, onBtnClick, style }) => {
  return (
    <button onClick={onBtnClick} className="button-parent" style={style}>
      {title}
    </button>
  );
};

export default Button;

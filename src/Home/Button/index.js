import React from "react";
import "./Button.css";

const Button = ({ text, color, onClick }) => {
  return (
    <div
      className="button"
      style={{
        background: color,
      }}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
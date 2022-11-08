import React from "react";
import "./Button.scss";

const Button = ({ Fun, children }) => {
  return (
    <button onClick={(e) => Fun(e)} className="main-button circle">
      {children}
    </button>
  );
};

export default Button;

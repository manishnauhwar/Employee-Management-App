import React from "react";

const Button = ({ label, className, onClickHandler }) => {
  return <button onClick={onClickHandler} className={className}>{label}</button>;
};

export default Button;

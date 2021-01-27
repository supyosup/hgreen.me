import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <div className="buttonContent">{props.children}</div>
    </div>
  );
};

export default Button;

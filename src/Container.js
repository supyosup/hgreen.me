import React from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./bootstrap.css";

const Container = (props) => {
  return (
    <div className={props.className}>
      <div>{props.children}</div>
    </div>
  );
};

export default Container;

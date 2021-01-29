import React from "react";
import linklogo from "images/linkedin.png";

const Footer = (props) => {
  return (
    <div className={props.className}>
      <a
        href="https://www.linkedin.com/in/hunter-green-b0120a205/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="test" src={linklogo} height="41px" width="41px"></img>
      </a>
    </div>
  );
};

export default Footer;

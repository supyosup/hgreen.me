import React from "react";
import linklogo from "images/linkedin.png";

const Footer = (props) => {
  return (
    <div className={props.className}>
      <a
        href="https://www.linkedin.com/in/hgreen18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linklogo}
          alt="linked-in logo"
          height="41px"
          width="41px"
        ></img>
      </a>
    </div>
  );
};

export default Footer;

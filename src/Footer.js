import React from "react";
import linklogo from "images/linkedin.png";

const Footer = (props) => {
  return (
    <div className={props.className}>
      <a href="https://linkedin.com">
        <img
          className="imagePadding"
          src={linklogo}
          height="41px"
          width="41px"
        ></img>
      </a>
    </div>
  );
};

export default Footer;

import React from "react";
import linklogo from "./linkedin.png";
import instalogo from "./instagram.png";

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
      <a href="https://www.instagram.com/oontii/">
        <img
          className="imagePadding"
          src={instalogo}
          height="50px"
          width="50px"
        ></img>
      </a>
    </div>
  );
};

export default Footer;

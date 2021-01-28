import React, { Component } from "react";
import "./App.css";
import me from "images/me.png";

const AboutMe = (props) => {
  return (
    <div className={props.hidden ? "aboutMeMain" : "hidden"}>
      <div className="myPic">
        <img src={me} className="bottomPadding" alt="image of me"></img>
      </div>
      <div className="center"></div>
      <p>I made this site in hopes to learn React and showcase my skills</p>
    </div>
  );
};

export default AboutMe;

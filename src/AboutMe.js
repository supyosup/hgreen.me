import React, { Component } from "react";
import "./App.css";
import myPic from "./me.PNG";

const AboutMe = (props) => {
  return (
    <div className={props.hidden ? "aboutMeMain" : "aboutMeHidden"}>
      <div className="myPic">
        <img className="bottomPadding" src={myPic} alt="image of me"></img>
      </div>
      <div className="center">
        <h3>Test</h3>
      </div>
      <p>
        Testing testing testing testing testing testing testing testing testing
        testing testing testing testing
      </p>
    </div>
  );
};

export default AboutMe;

import React from "react";
import "./App.css";
import myPic from "./me.PNG";

const AboutMe = (props) => {
  return (
    <div className="aboutMeMain">
      <div className="myPic">
        <img
          className="bottomPadding"
          src={props.image}
          alt="image of me"
        ></img>
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

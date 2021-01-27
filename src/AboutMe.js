import React from "react";
import "./App.css";

const AboutMe = (props) => {
  return (
    <div className="aboutMeMain">
      <div className="myPic">
        <img
          className="bottomPadding"
          src={require("./me.PNG")}
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

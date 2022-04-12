import React from "react";
import "App.css";
import me from "images/me.png";

const AboutMe = (props) => {
  return (
    <div className={props.hidden ? "aboutMeMain" : "hidden"}>
      <div className="myPic">
        <img src={me} className="bottomPadding" alt="image of me"></img>
      </div>
      <div className="center"></div>
      <p>
    Aspiring software developer with a strong passion for learning and self growth. <br></br>My primary languages include Java, Swift, and Python - however I am also familiar with JavaScript, C, and Bash.<br></br><br></br> 
    In my free time you can find me at the gym, outside cycling, or relaxing with friends.<br></br><br></br>
    Currently, I am working on a passion driven project for iOS - RunePro.
      </p>
    </div>
  );
};

export default AboutMe;

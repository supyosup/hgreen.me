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
	I am a programmer with an interest in mobile app development. I have experience developing for both iOS and Android. In my free time I enjoy going to the gym, riding my bike, and playing games on the PC. 
      </p>
    </div>
  );
};

export default AboutMe;

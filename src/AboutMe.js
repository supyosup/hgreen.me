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
        I made this site in hopes to learn React and showcase my skills. I enjoy
        problem solving, programming, and meeting new people. <br></br>This
        website will serve as an archive for my projects. <br></br>
        Thank you for stopping by and checking out my page.
      </p>
    </div>
  );
};

export default AboutMe;

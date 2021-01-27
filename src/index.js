import React from "react";
import ReactDOM, { render } from "react-dom";
import Nav from "./Nav";
import Container from "./Container";
import logo from "./hg.png";
import AboutMe from "./AboutMe";
import Strava from "./Strava";
import Footer from "./Footer";
import myPic from "./me.PNG";

const App = () => {
  return (
    <div>
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </div>
      <Container className="jumbotron2">
        <div className="imageContainer">
          <img src={logo} width="300" height="150"></img>
        </div>
        <div className="navBarCenter">
          <Nav></Nav>
        </div>
      </Container>
      <Container className="jumbotron">
        <AboutMe image={myPic}></AboutMe>
        <Strava></Strava>
      </Container>
      <Container className="center">
        <Footer className="footer"></Footer>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

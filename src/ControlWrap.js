import React from "react";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Container from "./Container";
import logo from "images/hg.png";
import Strava from "./Strava";

class ControlWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false, hobbiesVisible: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleHobbies = this.handleHobbies.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isVisible: !state.isVisible }));
    //console.log(this.state);
  }

  handleHobbies() {
    this.setState((state) => ({ hobbiesVisible: !state.hobbiesVisible }));
  }

  render() {
    return (
      <div className="none">
        <Container className="jumbotron2">
          <div className="imageContainer">
            <img src={logo} width="300" height="150"></img>
          </div>
          <div className="navBarCenter">
            {Nav(this.handleClick, this.handleHobbies)}
          </div>
        </Container>
        <Container className="jumbotron2">
          <AboutMe hidden={this.state.isVisible}></AboutMe>
        </Container>
        <Strava hidden={this.state.hobbiesVisible}></Strava>
      </div>
    );
  }
}

export default ControlWrap;

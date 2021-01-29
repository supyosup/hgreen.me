import React from "react";
import Nav from "Nav";
import AboutMe from "AboutMe";
import Container from "Container";
import logo from "images/hg.png";
import Strava from "Strava";

class ControlWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aboutVisible: false, hobbiesVisible: false };
    this.handleClick = this.handleAboutClick.bind(this);
    this.handleHobbies = this.handleHobbiesClick.bind(this);
  }

  handleAboutClick() {
    this.setState((state) => ({ aboutVisible: !state.aboutVisible }));
  }

  handleHobbiesClick() {
    this.setState((state) => ({ hobbiesVisible: !state.hobbiesVisible }));
  }

  render() {
    return (
      <div>
        <Container className="jumbotron2">
          <div className="imageContainer">
            <img src={logo} width="300" height="150"></img>
          </div>
          <div className="navBarCenter">
            {Nav(this.handleClick, this.handleHobbies)}
          </div>
        </Container>
        <Container className="jumbotron2">
          <AboutMe hidden={this.state.aboutVisible}></AboutMe>
        </Container>
        <Strava hidden={this.state.hobbiesVisible}></Strava>
      </div>
    );
  }
}

export default ControlWrap;

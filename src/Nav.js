import React from "react";
import Resume from "Resume.pdf";

const Nav = (aboutMeClick, hobbiesClick) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={aboutMeClick} href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.github.com/supyosup"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={hobbiesClick} href="#">
            Hobbies
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

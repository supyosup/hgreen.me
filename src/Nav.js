import React from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={showAbout}>
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
            Github
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./resume.txt" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

function showAbout() {
  console.log("Hello");
}

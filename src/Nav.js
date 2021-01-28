import React from "react";

const Nav = (onClick, onClick2) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={onClick}>
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
          <a className="nav-link" href="../src/Resume.pdf" download>
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={onClick2}>
            Hobbies
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

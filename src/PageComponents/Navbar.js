import React from "react";

const Navbar = props => {
  return (
    <header>
      <nav class="navbar">
        <div />
        <div>
          <ul class="nav">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/tech">Tech</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

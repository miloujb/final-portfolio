import React from "react";
import { Link } from "react-scroll";

const Navbar = props => {
  return (
    <header>
      <nav class="navbar">
        <div />
        <div>
          <ul class="nav">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <Link
              activeClass="active"
              to="tech"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Tech
            </Link>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

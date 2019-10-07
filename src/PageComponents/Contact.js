import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div class="contact">
      <h1>Contact Me</h1>
      <p>Email: emilybaileycodes@gmail.com</p>
      <div class="links">
        <ul>
          <li>
            <a href="https://github.com/miloujb" target="_blank">
              <FaGithub class="fa-fw" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emily-bailey-a9a647b7/"
              target="_blank"
            >
              <FaLinkedinIn class="fa-fw" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

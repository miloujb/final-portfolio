import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div class="contact">
      <h1>Contact Me</h1>
      <p>Email: emilybaileycodes@gmail.com</p>
      <a href="https://github.com/miloujb" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/emily-bailey-a9a647b7/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Contact;

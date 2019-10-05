import React from "react";
import About from "./about";
import TechStack from "./TechStack";
import Projects from "./Projects";

const en = () => {
  return (
    <>
      <div class="intro">
        <h1>Emily Bailey</h1>
        <h2>Developer | Linguist | Northcoder</h2>
      </div>

      <About />
      <TechStack />
      <Projects />

      <div class="contact">
        <h1>Contact Me</h1>
        <p>Email: emilybaileycodes@gmail.com</p>
        <p>Github: www.github.com/miloujb</p>
      </div>
    </>
  );
};

export default en;

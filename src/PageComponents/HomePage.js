import React from "react";
import About from "./about";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";

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
      <Contact />
    </>
  );
};

export default en;

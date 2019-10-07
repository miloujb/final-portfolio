import React from "react";
import About from "./about";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import emily from "../images/emily.jpg";

const en = () => {
  return (
    <>
      <Navbar />
      <div class="intro">
        <div class="intro-text">
          <h1>Emily Bailey</h1>
          <img src={emily} alt="Emily Bailey" class="img"></img>
          <h2>Developer | Linguist | Northcoder</h2>
        </div>
      </div>
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};

export default en;

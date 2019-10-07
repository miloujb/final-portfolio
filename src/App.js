import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./PageComponents/HomePage";
import About from "./PageComponents/about";
import TechStack from "./PageComponents/TechStack";
import Projects from "./PageComponents/Projects";
import Contact from "./PageComponents/Contact";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Router>
          <HomePage path="/" />
          <About path="/about" />
          <TechStack path="/tech" />
          <Projects path="/projects" />
          <Contact path="/contact" />
        </Router>
      </body>
    </div>
  );
}

export default App;

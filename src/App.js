import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import HomePage from "./PageComponents/HomePage";
import English from "./PageComponents/en";
import French from "./PageComponents/fr";
import German from "./PageComponents/de";
import Spanish from "./PageComponents/es";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <Router>
          <HomePage path="/" />
          <English path="/en" />
          <French path="/fr" />
          <German path="de" />
          <Spanish path="es" />
        </Router>
      </body>
    </div>
  );
}

export default App;
